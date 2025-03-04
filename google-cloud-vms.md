# Guide: how to configure cheapest VM for a web service in Google Cloud

I’ve recently needed to deploy a Node.js application to use its endpoint as a webhook. I couldn’t simply access it by IP, so to avoid dealing with dynamic DNS, a static IP was needed. The company for which I developed this application already had another virtual machine on Google Cloud. So, to avoid adding complexity and multiple providers, I decided to set up a new VM there too.

For those who have faced a similar context, I share this guide. It will help to choose the most cost-effective option among suitable ones and configure it for hosting a web application. I believe it would be helpful as far as VMs on Google Cloud are much more expensive than on other providers, and the configurations are more complex.

First, I’ll briefly describe the infrastructure solution, and then I’ll go into more details about the steps I took in the cloud console:

1.  Create a network.
2.  Create an instance template.
3.  Set up health checks.
4.  Create an instance group using this template.
5.  Create a managed load balancer.
6.  Promote the load balancer’s IP to static.
7.  Optional: review the firewall settings.
8.  Optional: set up alerts.

## Design the solution

Regular VMs exist continuously. We create, configure, and leave them running. The service provider guarantees low downtime and, when possible, notifies in advance about situations that could lead to troubles. Such VMs on Google Cloud are surprisingly expensive, so let’s also consider another type — preemptible.

Preemptible VMs differ in that they can be rebooted or recreated at any moment. Google promises not to do this more than once a day and, in exchange, offers a significant discount — e.g., $7 per month instead of $21. In the Google Cloud Console, this type is referred to as [Spot VM](https://cloud.google.com/compute/docs/instances/spot). Due to the cost, we’ll focus on this type.

We need to deal with the restart and recreation of VMs. Restarting is not as critical when it comes to stateless applications. In my case, I also can afford a small downtime and not process a request that arrives during the restart. Therefore, I don’t need to deal with replication, saving and synchronizing intermediate processing results, graceful shutdown, and other techniques that enhance fault tolerance.

To handle the situation of recreation, we need to automatically boot the VM and execute scripts that initialize the application. In Google Cloud, this can be achieved using an Instance Group, which can automatically scale the number of instances. Additionally, in the Instance Template used by the instance group to create new instances, where startup scripts can be specified.

Google also releases a static IP if it was assigned to a deleted VM. To bypass this issue, we’ll use a Managed Load Balancer since the current load falls into the free tier.

![A diagram that shows how the solution looks like](https://cdn-images-1.medium.com/max/1600/1*QqgZhdykGQuSajWlZ4hK4Q.png)

How it schematically looks like. Of course, network firewall filters not only incoming traffic, but also outcoming and inner one

Now let’s move on to the specific steps.

## Create a network

![Screenshot of a creation of a new network in Google Cloud Console](https://cdn-images-1.medium.com/max/1600/1*2NyNXcKsgSZWHfh1z8xCQQ.png)

Without a network, you won’t be able to proceed with the following steps

Navigate to [VPC Network → VPC Networks → Create VPC Network](https://console.cloud.google.com/networking/networks/add). Choose the network name, it is OK to use “default” for the first network, enable automatic subnet creation mode, and include all suggested firewall rules.

## Create an instance template

![Screenshot of a creation of a new instance template in Google Cloud Console](https://cdn-images-1.medium.com/max/1600/1*esavJptlmgjHaJ4KC26EDA.png)

In Google Cloud there are many entities. So I duplicate in the name what it is, specify the characteristics, and the template version. If you will have only one VM in the project, you can skip this complexity. In large projects, the name can become something like “it-n1-s1-spot-ubuntu-iowa-default-3”

Go to [Compute Engine → Instance Templates → Create an instance template](https://console.cloud.google.com/compute/instanceTemplates/add).

Select the characteristics of the VM. My Node.js application, which I plan to deploy within a Docker container, is going to have a few requests per hour and isn’t highly computationally intensive. Additionally, I still want to reduce costs, so I choose n1-standard-1 from the General Purpose list and select the spot provisioning model.

Surprisingly, n1 is the best tier in terms of the vCPU-RAM-Cost balance. The situation is not so good with e2, which is positioned for lightweight computations. If the presets from n1 don’t fit your requirements, you can specify a custom resource VM there. The cost for these resources will not differ from the standard presets.

You can also compare costs in the [documentation](https://cloud.google.com/compute/all-pricing) and [pricing calculator](https://cloud.google.com/products/calculator). Here I’ll note once again that, in general, I don’t recommend renting VMs in Google Cloud because of their cost:

![Screenshot of a Hetzner admin panel with a creation of a new VM and it’s cost](https://cdn-images-1.medium.com/max/1600/1*RqMCaZzYj4P-fpQf2OsT2w.png)

Just to compare, the cost of a dedicated VM at Hetzner with two vCPUs, 2GB RAM, 40GB SSD, and a static IP for a month is EUR 4.35

![Two screenshots of a Google Cloud price calculator with equivalent VMs — one spot and one regular, and their costs](https://cdn-images-1.medium.com/max/1600/1*KQSezaMb6n9p951v7icOsQ.png)

At Google, you would have to pay EUR 30.73 for a similar dedicated VM — 7 times more expensive! A Spot VM would cost “only” x3 — EUR 14.07

Now, let’s return to the instance group settings. If you choose VM similar to n2-starndart-2 or more powerful, enable the confidential VM service. Otherwise, I believe this feature doesn’t worth such an upgrade — so just move on.

![Another screenshot of a creation of a new instance template — with the fields below regarding the previous one](https://cdn-images-1.medium.com/max/1600/1*n7ZS-6ebihXhGNhwFNscrw.png)

In theory, you can deploy the container directly with the application on the VM. However, I decided to stick with a regular OS and run the container inside it

Then, set up the boot disk. I chose the cheapest standard disk with the minimum allowable size of 10 gigabytes. For the image, I selected the familiar Ubuntu OS with the latest stable version 22.04 LTS x86/64.

In the firewall settings, it’s crucial to allow both HTTPS and HTTP traffic. You can adjust this later if needed.

Move on to advanced options. Under networking section, choose the VirtIO interface card. Choose the network interface — if you’ve created it earlier, it should be on the list. Next to the management section, the startup scripts are of interest here. Write some Bash code to be run. Here’s my example:

```bash
sudo apt update  
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common  
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg  
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null  
sudo apt update  
sudo apt install -y docker-ce docker-ce-cli containerd.io  
sudo usermod -aG docker $USER  
sudo systemctl enable docker  
sudo systemctl start docker  
echo "Docker has been installed and started"  
sudo docker pull user/repository:latest  
sudo docker run -e ENV_VARIABLE=env_value \  
  -p 80:3000 \  
  --name container_name -d user/repository:latest
```

There’s nothing particularly unique here: I update packages, install Docker using [a fairly common method](https://docs.docker.com/engine/install/ubuntu/), pull an image from [Docker Hub](https://hub.docker.com/), and start a container. In my case it’s not nescessary to set up SSL encryption from the start. Also, I’ll have an external load balancer, so I don’t need to set up my own. That’s why I’m just mapping port 80 of the machine, which corresponds to HTTP requests, to port 3000 inside the container where my application is listening.

## Set up a health check

![Screenshot of a creation of settings of a new health check](https://cdn-images-1.medium.com/max/1600/1*MaJViD42OoH3oWx6X9jMBg.png)

Basically, a health check is a method of an application to determine externally, if it’s alive and working. In Google Cloud it is a corresponding automated check

Open [Compute Engine → Health checks → Create a health check](https://console.cloud.google.com/compute/healthChecksAdd).

Without a configured health check, you won’t be able to set up a managed load balancer. However, configuring a health check for your application is generally beneficial. For example, if the application goes down, the virtual machine could be automatically restarted.

In my application, the health check endpoint is available directly at the route / and responds with a 200 status code and a “healthy” in body. Therefore, I change the protocol to HTTP and leave the path as is. In the health criteria, I adjust the check interval to 10 seconds, and I also set the healthy and unhealthy thresholds to 3 results. These are recommendations from Google Cloud itself for a case using a health check for load balancing.

## Create an Instance Group

![Screenshot of a creation of a new instance group](https://cdn-images-1.medium.com/max/1600/1*_jX9hGER4M_mK4wPXQU8Qg.png)

I create stateless instance group as far as I have stateless app

Continue to [Compute Engine → Instance Group → Create instance group](https://console.cloud.google.com/compute/instanceGroups/add).

Choose the instance group template you created earlier. If necessary, change the zone — I usually choose the latest one. Set autoscaling from 1 to 1 instance. This will allow a new virtual machine to be spun up in case the previous one is terminated. You can leave the autoscaling signal unchanged because this rule will rely on the presence of a virtual machine as a whole. If needed, adjust the initialization period — I’ve increased it to 300 seconds just in case.

In the autohealing section, specify the health check you created earlier. Also, if necessary, increase the delay before it starts checking the virtual machine.

In the “Updates during VM instance repair” section, choose to update the instance configuration. This will allow the instance to pull updated configuration versions from the group and template settings.

After completing this, a VM should be automatically created, and your application will be deployed on it according to the scripts. You can check this by going to [Compute Engine → VM Instances](https://console.cloud.google.com/compute/instances) and connecting to the virtual machine via SSH.

![Screenshot of a created VM instance and how to access logs and monitoring sections from the user interface](https://cdn-images-1.medium.com/max/1600/1*9c7edWJl82y26c_ygQXAdg.png)

You can also view the logs and metrics of a created VM — to check if everything goes as expected

If something isn’t working, it’s worth revisiting the steps above and taking time for debugging before going further. If the health check doesn’t work correctly, the balancer will continuously return “no healthy upstream”.

Don’t hesitate to create new entities and delete old ones if you’re having trouble editing already created resources. In Google Cloud, there are quite a few user interface limitations.

## Create a managed load balancer

![Screenshot of configuring a frontend service while creating a new managed load balancer](https://cdn-images-1.medium.com/max/1600/1*oS6KLxsym_p6OTEEswNe9Q.png)

Now, navigate to [Network Services → Load Balancing → Create a load balancer](https://console.cloud.google.com/net-services/loadbalancing/add). Choose the “start configuration” for the Application Load Balancer. Keep the default values for the radio buttons and click “Continue”. Choose a frontend name — the other settings are suitable for accepting HTTP requests. Move on to the backend section.

![Screenshot of a creation of a new backend service while creating a new managed load balancer](https://cdn-images-1.medium.com/max/1600/1*xRDDtdEABs-ADVgkfImgQg.png)

In the list of backends, choose to create a new backend. Change the type to “instance group” and select the instance group you created earlier. Scroll down the form and choose the created health check.

For routing rules, leave it as a “simple host and path rule.” Proceed and create the load balancer.

### Promote load balancer’s IP to static

![Screenshot showing how to promote IP address to static in the user interface](https://cdn-images-1.medium.com/max/1600/1*x7gNeNYMesLGOeGEHA-53g.png)

Finally, go to [VPC Network → IP Addresses](https://console.cloud.google.com/networking/addresses/list). There, find the IP address with a “Forwarding rule …” description — this is the load balancer. Click on the three dots and select “promote to static IP address.”

To make everything work, you only need to update the DNS record. The remaining two steps below are optional, but I’ll dive into them as well, because they are about good and easy to implement approaches.

## Optional: review the firewall settings

![Screenshot showing the suggested firewall rules while creating a new network firewall policy](https://cdn-images-1.medium.com/max/1600/1*Zf2oJYd8FckMgq1fGX2UIA.png)

Open [Network Security → Firewall policies](https://console.cloud.google.com/net-security/firewall-manager/firewall-policies/list).

Firewall settings might have caused me the most inconvenience on the current project (aside from my own mistakes lol), so it’s useful to know where they are and what they look like.

You can add or modify rules that have already been set. For example, instead of applying rules by tags, you can apply them to all instances or vice versa.

You can also create a new policy. Interesting rules are suggested, such as blocking known malicious IPs using Google Cloud Threat Intelligence. Some other options, like blocking sanctioned countries are not so useful. As far as I know, projects hosted in Google Cloud won’t be accessible from under-sanctioned IPs even without turning on this policy.

## Optional: setup alerts

Setting up alerts can be a good practice, especially when you have preemptible VMs in your infrastructure. So, go to [Monitoring → Alerting](https://console.cloud.google.com/monitoring/alerting).

To begin with, you should configure the recipients of the notification. You can do this by clicking on [edit notification channels](https://console.cloud.google.com/monitoring/alerting/notifications). Google Cloud supports various channels, including email, SMS, Slack, PagerDuty, its own Pub/Sub, and custom webhooks.

![Screenshot of a creation of a new alert using available metrics](https://cdn-images-1.medium.com/max/1600/1*t1FsLrnaNYxOoQhnMgrdkg.png)

I set up a basic alert that triggers on VM deletion and creation. This way, if the webhook doesn’t work, I can understand this from the email notification and know when to retry an attempt.

## What’s Next

Now that’s it. But there are still things to improve in the current configuration. Here’s a list of further steps you might be interested in:

-   Set up SSL encryption.
-   Connect a secrets manager and configure syncing environment variables from there.
-   Add a second virtual machine and implement request replication if it was processed on a preempted VM.
-   Consider the “infrastructure as code” approach: set up Ansible, Terraform, or a more lightweight tool to manage infrastructure using declarative configurations stored on GitHub in a repository adjacent to the project’s code.

![A diagram showing improved version of the system](https://cdn-images-1.medium.com/max/1600/1*jFTT_RhOKlv_TtfR_tm2EQ.png)

How improved system might look like. Health checks and firewall are omitted

I have a question left to you, my dear reader. Have you ever used Google Cloud before? What tasks have you solved with it?

----------

If you found this article helpful, please show your support by clapping, sharing it with your friends or colleagues, and subscribing to receive notifications for my new posts.

If you want to talk on managing engineering teams or departments, designing systems, or improving your technical product, email me at [laidrivm@gmail.com](mailto:laidrivm@gmail.com) or message me on [https://t.me/laidrivm](https://t.me/laidrivm).

Feel free to connect with me on LinkedIn at [https://www.linkedin.com/in/vladimir-lazarev/](https://www.linkedin.com/in/vladimir-lazarev/).

Peace!