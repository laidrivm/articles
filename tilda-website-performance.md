# What to do if you are not satisfied with your Tilda website performance?

If you're struggling with poor website performance on Tilda, you're not alone.In this article, I’ll walk you through practical solutions — from maximizing Tilda’s capabilities to leveraging Cloudflare, using a static site generator with Tilda as a headless CMS, and even rethinking third-party script management. These steps will help you boost your site’s speed and user experience.

A couple of weeks ago, the fellows from [Refocus](https://refocus.me/) reached out to me for a consultation. Refocus is an educational company operating in the Philippines and Indonesia. They don’t have their own IT products. Their website is built on Tilda. The company was upset with the page loading speed, and they had also nearly reached the engine’s limitations in terms of performance optimizations. Additionally, Tilda’s servers were located far from the region where the company primarily operates. Resolving this issue is critical for organic traffic growth and improving the user experience.

I examined the case, explored options, and proposed the following, starting from the simplest and most obvious to the most labor-intensive:

1.  Maximize optimization within Tilda’s capabilities.
2.  As an experiment, try moving a couple of pages to Cloudflare.
3.  Transfer DNS records, load balancing, and static content to Cloudflare.
4.  Start using the static site generator (SSG) approach to render all pages, while keeping Tilda as a headless CMS.
5.  Optionally and radically, consider abandoning Google Tag Manager. Start hosting third-party scripts on your own CDN and directly integrate them into the pages. Alternatively, try to use web workers to run third-party scripts to unload main thread.

I will explain these steps in detail, how the migration scheme might look, and why these recommendations are made.

## Squeezing the maximum out of Tilda

I suggested starting with implementing all the recommendations from [the official guide](https://help.tilda.cc/website-speed). It turned out that the company had already implemented a most of them, but they were still unsatisfied with the results:

![Screenshot from PageSpeed Insights](/tilda-website-performance/1*lhzejvVOY4xXkiBmU5_Arg.png)
*To make the results more accurate, it is worth measuring the performance from the the target region network*

![Screenshot from PageSpeed Insights with Web Vitals Metrics](/tilda-website-performance/1*Q_DPTkzfamU9SO7hw1iiCg.png)
*The values of user metrics appear even less satisfactory than the final score*

The next step was to address the issue with images. Despite [the Tilda’s announcement in August 2020](https://newsletter-en.tilda.cc/august2020) that loading adaptive images in modern formats became a default, all the images on the company’s website remained in PNG format. I suggested doing two things simultaneously:

1.  Double-check the settings and contact support again.
2.  Tune the content release process. Most likely, the company’s designers manually process images so they can also compress them before uploading. If you’re using Tilda Zero Blocks, you still have to upload them as PNG. If you’re using default blocks, you may compress them directly to .WebP.

Optimizing the loading of third-party scripts is also worth considering. The easiest approach is to follow [these tips](https://stackoverflow.com/questions/68391231/how-to-avoid-issue-related-to-google-tag-manger-in-page-speed-to-improve-perfoma) and examine the integration within GTM itself and the scripts inside it. Other possible steps in this direction will be discussed later.

## Migrating pages to Cloudflare

Part of the performance issue with Tilda was due to their servers, including the CDN, being located far from the company’s target region within Asia. Of course, much depends on Tilda’s CDN itself. However, the first thing the browser receives is the HTML markup of the page, which triggers the loading of other assets. It is possible to optimize at least this step.

I couldn’t find specific recommendations on how to optimize indicators like INP or LCP while using Tilda. Most techniques to handle render-blocking were hindered by the engine’s inability to independently configure lazy or asynchronous loading. Even reconfiguring caching headers is a challenge.

I spent several more hours googling, but I only confirmed that accomplishing something was difficult, the results were fragile, and sometimes I would get only around 20 search results, half of which were freelancer profiles.

Was needed something that would serve pages instead of Tilda. I recommended Cloudflare because of:

-   its suitable [coverage map](https://www.cloudflare.com/network/);
-   extensive additional features;
-   subjectively, much simpler and easier to understand services than Akamai or other variants.

Manually transferring a couple of pages from Tilda is possible, while mass export can be organized using handwritten scripts that use the Tilda API, Cloudflare API, and webhooks. These scripts can be hosted on a virtual machine. The company already has one, which was acquired along with the blog from outsorce developers. It can be schematically represented as follows:

![Scheme of the original state of the company’s services](/tilda-website-performance/1*62FoDnXiHMk2L7Dlojx8gQ.png)
*On the left — current state of the project. On the right — after migrating the first landing pages to Cloudflare*

![Screenshot from PageSpeed Insights after transferring first landing to Cloudflare](/tilda-website-performance/1*1rPA7sxw-SJD8Z4lAMMZ6g.png)
*Metrics of the test landing page after migration*

Now the pages are delivered faster, caching can be configured, and the servers themselves are closer to the users.

## Transfer DNS records, load balancing, and static files

The problems we still have:

1.  The number of used services and vendors has increased.
2.  Companies want to use the main domain more actively rather than a separate subdomain for landing pages.
3.  We still don’t have full control on caching headers and policies.

The next step here could be to redelegate the domain and switch to Cloudflare DNS. We will utilize more of the offered ecosystem and eliminate one external service. Additionally, we can use the Load Balancer, also provided by Cloudflare, to add another caching layer for Tilda pages and the blog hosted on a virtual machine in Singapore:

![The scheme after migration to Cloudflate DNS and usage of the Load Balancer](/tilda-website-performance/1*YRzTv_DkJYbXWWDbNZ-GAA.png)
*The most challenging stage. We’re going to make it simple with the further steps*

Now let’s solve the Tilda CDN issues. Its’ servers are still distant, and we cannot control caching. There are two options to deal with this:

1.  Use a subset of Tilda CDN directories as the origin for Cloudflare CDN. It doesn’t sound very reliable, and we will most likely end up uploading a lot of unnecessary assets.
2.  Modify our page import scripts to also transfer static files — but only the ones that are actually used. We can use the same original URL structure.

However, now we will also have to replace the addresses on the pages from [static.tildacdn.cc](http://static.tildacdn.cc/) and [neo.tildacdn.cc](http://neo.tildacdn.cc/) to our own cdn.domain.com, which requires import scripts to run through the entire HTML markup.

![The scheme after getting rid of Tilda CDN](/tilda-website-performance/1*pme34BD2egbiVmguy_zPoA.png)
*Tilda Engine still uploads assets to its’ CDN, but the company’s website use the version from Cloudflare CDN*

## Using SSG and Tilda as a Headless CMS

We still haven’t handle a requirement to use a single domain fot the most of the webpages. There is also the issue of further optimizing Tilda pages. Additionally, a couple of simple steps can improve the blog performance. Let’s start with them.

The blog is built with Next.js, a framework that allows rendering site pages [in static generation mode](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). This means that the HTML markup of the page is generated while we build an application, after which it can be cached on a CDN. This approach works well for blog pages. If all blog pages are rendered with data and cached, user requests will no longer hit the virtual machine. This will allow us to remove the load balancer from that machine.

![The scheme where we turn on SSG-mode on the blog app](/tilda-website-performance/1*pJ026A7sAgOSC7zk3wpCjg.png)

Redirecting traffic from the blog VM. We can remove the local load balancer. But we can also keep it if there are requests for dynamic content.

Now let’s talk about optimization and content update of Tilda pages. What options do we have?

-   Optimize each page manually after importing from Tilda. This doesn’t sound very convenient, but it might work for rarely updated pages. However, if the pages are frequently updated, we would have to rewrite optimizations every time. And if there are many pages, it hurts.
-   Automate optimization along with the import process. Our import script already parses the HTML markup and replaces CDN addresses. We can try to modify the page code more significantly: for example, implement lazy-loading. However, such automation will miss some cases, and any Tilda update potentially breaks it.
-   Switch to our own rendering engine. This is the most expensive option but the most suitable in the long term. Having our own rendering engine will allow us to continue improving page performance. At the same time, the company can still maintain content in Tilda, follow existing processes and reduce transition costs.

I suggested using Gatsby as the rendering engine. It is a framework designed for SSG, and it has a [ready-to-use plugin for working with Tilda](https://www.gatsbyjs.com/plugins/gatsby-source-tilda/). Next.js, which is used in to render the blog, is also suitable. On the one hand, it will require more time to integrate with Tilda. On the other, both applications will be on the same tech stack.

![](/tilda-website-performance/1*WZQayDARH7OF76BUCgBodw.png)
*Transitioning the main site to its own rendering engine built with Gatsby*

## Remove GTM and upload Third-Party Scripts to a CDN or use web workers to run them

Google Tag Manager occupies the main thread, and it’s not easy to optimize. Moreover, it loads itself first and then loads other scripts, which can also load other scripts… All of this consumes resources, takes time, and is not favored by users nor search engines.

The idea is to include all scripts directly in the page code and manage their loading and execution. This requires a significant change of processes and dedicated technical expert, so it’s challenging to implement. However, it provides significant improvement as third-party scripts often remain unoptimized.

Additionally, the third-party scripts themselves can be uploaded to our own CDN and loaded from there. This allows us to manage their updates, loading, and caching ourselves. Additionally, they potentially can be served from servers closer to the users. But a separate process will be required to update the scripts to new versions on time.

Another way to improve the performance of third-party scripts is to use web workers instead of a main thread to run them. I know two tools helpful to do it:

-   [Partytown](https://partytown.builder.io/), which can be used along with the rendering engine. It has some verified integrations with Next.js and Gatsby — frameworks I’ve recommended earlier in this article. It also supports common services like GTM and Facebook Pixel.
-   [Zaraz](https://www.cloudflare.com/products/zaraz/), which is also one of the Cloudflare services and could be used along with CDN and other services. It provides nearly the same effect but using Cloudflare workers and you still have high abstaction of managing third-party scripts.

## What’s next

If you solved all the issues above there are still a few things to try to improve performance:

1.  Enable HTTP/3 protocol. It may have some impact in a long run as it will become more widely adopted. If you use Cloudflare, turn it on [with a single slider on your dashboard](https://cloudflare-quic.com/). Otherwise, you need to dig into the documentation of your load balancer.
2.  Consider image resizing. I recommend this step here as it might be not that easy as it sounds to implement. There are also two ways to do it. First, managed-way with [yet another Cloudflare tool](https://developers.cloudflare.com/images/image-resizing/) or [a solution called image proxy](https://imgproxy.net/). Second, to handle everything on your own by deploying [an open-source version of image proxy](https://github.com/imgproxy/imgproxy) and connecting it to your system.

P.S. Thanks to [Alex](https://www.linkedin.com/in/aplesovskikh/) for suggesting the addition of tools to manage third-party scripts and for proposing two further optimization steps.

----------

If you found this article helpful, please show your support by sharing it with your friends or colleagues.

If you want to talk on managing engineering teams, designing systems, or improving your tech product, [send an email](mailto:laidrivm@gmail.com) or [message me](https://t.me/laidrivm).

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/vladimir-lazarev/).

Peace!
