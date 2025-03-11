
![Screenshot of the list with the positions I published last year](/write-vacancies/1*ZBs7dlM7eJD3StbrQh4y-A.png)

# Guide: how to write job openings

I’ve hired more than 50 people for 4 years as an Engineering Manager. I’ve developed hiring processes with my team, sought advice and hired consults, attended courses and training. Candidates I’ve interacted with have thanked me for great job descriptions, non-template interviews, and constructive feedback. This includes both those I hired and those I declined. Tinkoff once awarded me for the best fit-interviews in the company. Here’s what I’ve learned and how you can do the same.

The hiring process as a whole is huge: from understanding hiring needs to a successful onboarding of another newbie. Right now I want to focus on the opening: how to fill it with meaning, edit, format, publish, and distribute. I’ll show an example from Emerging Travel Group and then share the general ideas and approached behind it.

## How I write an opening

### Start with the need

There are usually two situations when I open a position: replacing an employee or hiring for a new one. The first case is easier — you can look at what you already have, define what you like and what you don’t, and use that for the description. In the second case, you should start by understanding, at least for yourself, what this new position is, why it’s needed, and so on.

Here’s an example of a position I opened at [Emerging Travel Group](https://www.emergingtravel.com/career/). I agreed with other managers that we’re forming a new team. The products I was responsible for were blocked by external dependencies. They were developed slower than desired, it bothered products. My teams couldn’t pick up this work without dropping one of their own — where they were experts. When we discussed this, I created and approved a vision of how it should work:

![A workflow diagram describing the proccesses of a new team from the example](/write-vacancies/1*oziK1iXfOq3ifYafcoW7PQ.png)

To define the need and position details, try to create a diagram, where the elements are the required positions. It might be org. chart, workflow or something mixed with systems design scheme

To make this scheme work, we need an analyst, a backend developer, a frontend developer, and a tester. Let’s focus on the analyst, as the most complex role here.

### Describe the job

What main tasks do we set for a systems analyst?

1.  Carry transport projects through the Discovery stage, relieving the project and product managers in Operations Stream as much as possible.
2.  Unblock the delivery phase if problems are related to requirements or agreements between stakeholders.

Without these, the scheme won’t work. What do analyst need to do to complete it?

-   Obtain the product backlog ranked by value. Help with ranking if necessary. Quarterly.
-   Take projects from the top of the backlog one by one. Collect minimal descriptions from initiators — transportation product managers or business optimisation specialists.
-   Align projects with the Operations Stream product and project managers. First, to ensure projects don’t ruin stream’s strategy and tactics, and the vision for CRM as a whole product. Second, to determine the level of these experts involvement needed to validate full requirements.
-   If any conflicts arise, collect them and find a solution that satisfies all stakeholders. If that fails, conduct brainstorming with stakeholders representatives.
-   Work out full project and product requirements: communicate with stakeholders and executors, follow checklists and guides, interview end-users, and write documentation. Create CJM and User Stories if needed.
-   When requirements are gathered, initiate project launch. The project and product managers will check them for consistency with the rest of the product and projects. Developers and testers will check for completeness — ensuring they have everything needed to start working. Then set executor estimates and the due date, and ensure everything is correctly reflected in the task manager.

### Describe interactions

The company decided to form a department of systems analysts. So, the hiring manager and the org chart manager will be the head of this department. They will also be responsible for onboarding.

According to the scheme, the systems analyst will mainly work with:

-   The Operations Stream project and product managers to validate projects and requirements.
-   Transportation product managers to gather and rank the product backlog and collect initial requirements. These are the main business customers.
-   CRM users to work out requirements. These are the main stakeholders.
-   Software and QA engineers from Operations Delivery and QA Pool. These are the main executors who will provide estimates and bring up blockers, which the analyst will help to resolve.

### Put it all together in the opening description

I’ve already discovered and wrote down the main content. Now I’ll sum it up into a text for candidates. Then I’ll review it from an outsider’s perspective and tune what might be unclear. I’ll get the first draft:

> **Opening. System Analyst in ETG CRM**
>
> Emerging Travel Group (ETG) is a global travel-tech company. Regular travellers use us to go on vacations. Corporate employees book business trips through us, and their managers handle approvals. Agencies compile tours with us and sell them to their clients. All this data goes into one internal tool for our employees — the CRM, where we are looking for a System Analyst.
>
> Operations CRM is one of the teams developing feature for our support and sales specialists. Currently, we can’t handle with all the tasks required for transportation products, so we’re forming a dedicated sub-team for them.
>
> This sub-team will consist of 4 people: a system analyst, a backend developer, a frontend developer, and a QA engineer. Time to time some of the experts from the main team will join: a product manager, a project manager, two team leads, and other QAs — 6 more people.
>
> The System Analyst will primarily work with:  
>  — The Product and Project Manager of Operations Discovery to validate projects and requirements.  
>  — Transportation Product Managers to collect and prioritize the product backlog and gather initial requirements. These are the main business clients.  
>  — CRM users to get the complete requirements. These are the main stakeholders.  
>  — Software and QA engineers from Operations Delivery and the QA Pool, who will provide estimates and raise blockers that the System Analyst will help to resolve.
>
> What the System Analyst will have to do:  
>  — Take projects from the top of the backlog one by one and collect minimal descriptions from initiators. For this, create a checklist and go through it with product managers of transport or business optimisation specialists.  
>  — If any conflicts arise, collect them and find a solution that satisfies all stakeholders. If that fails, conduct brainstorming with stakeholders representatives.  
>  — Align projects and their scope with the Product and Project Managers. First, to ensure these projects don’t ruin stream’s strategy and tactics and CRM development vision. Second, to determine the level of these experts involvement needed to validate full requirements.  
>  — Develop full project and product requirements: communicate with stakeholders and executors, follow checklists and guides, interview end-users, and write documentation. If necessary, create CJM and User Stories.  
>  — When requirements are gathered, initiate the project. The Project and Product Managers will check for consistency with the rest of the product and projects. Engineers will ensure completeness and sufficiency to start work. Then, assign estimates and due dates, and verify correct display in the task manager.  
>  — Quarterly assist with product backlog prioritisation and participate in planning.
>
> We have already compiled the first version of the backlog. The first task will be to join the project of the car rental service launch and its integration into the CRM. It’s already in delivery, but there are issues with its requirements. Once resolved, we will move on to automating the work of operators selling airline tickets.
>
> We work in iterations, or if you prefer, Kanban cadences: quarterly and weekly. At the quarterly level, we plan projects and synchronize with other teams. At the weekly level, we define tasks to be done, execute, and release to production.
>
> Tasks are managed in JetBrains YouTrack, integrated with GanttPro for planning. Documentation is written in Confluence, and diagrams are created in Miro. Everything is linked to a unified Google Workspace account provided on the first working day, where we also use email, calendar and Drive.
>
> CRM is a mature product, receiving data from a dozen of other products. Under the hood, it’s a Django application supported by several teams. Despite being a 9-year-old monolith, we don’t consider it as a legacy. We have a well-structured repository with common utilities and applications for each integration. We write unit tests and thinking about integration tests. We roll out multiple times a week without issues. Our main challenge is the amount of docs and the complexity of business domains we face.
>
> If we successfully set up the direction and still find out transportation tasks accumulating faster than they can be completed, we will scale the team. We may form a separate stream with its own product and project managers, product team lead, and hire additional engineers.
>
> Ideal candidates, as we see them:  
>  — Have worked as a System Analyst for three years.  
>  — Have a technical background: understand the specifics of XML and JSON formats, knows how modern websites work, and can write SQL queries.  
>  — Can create CJM and describe requirements in User Story format.  
>  — Proficient in English at a B2 level.  
>  — Knows the specifics of Travel and CRM.  
>  — Can clearly articulate thoughts, speak and write competently.  
>  — Loves to travel.
>
> To apply, contact our recruiter Nastya on Telegram or via email. She will provide details, answer initial questions, and start the interview process.
>
> Interview Process:  
> 1. Sardor, the Head of Architecture and Analytics, will review your resume and other shared artifacts.  
> 2. He and another analyst will conduct a technical skills interview.  
> 3. Nastya will conduct an company’s culture fit interview.  
> 4. We will arrange meeting with the product and project manager to meet the potential colleagues and exchange questions.  
> 5. You will finalise salary, start date, and other conditions with Nastya and Sardor. Here we send the exact offer.
>
> Benefits and Work Format:  
>  — Two employment options. In Russia and Belarus — under the labor contract and providing voluntary health insurance. Elsewhere — a service agreement with our Cyprus legal entity. You can be contracted as an individual, as a sole enterpreneur or as a legal entity in your jurisdiction.  
>  — A work laptop. Provided at the office or reimbursed for purchase.  
>  — Remote work. Office attendance is optional if there is one nearby.  
>  — Learning opportunities. We offer corporate training, conferences, and English courses. If you wish to participate in a conference as a speaker, we will help to organise it. The company also reimburse half the cost of external training if it helps in your job.  
>  — 28 days off yearly. One extra paid mental health day off per month. The company also covers half the cost of therapist service.  
>  — Informal activities: online and sometimes offline.
>
> To apply, contact our recruiter Nastya on Telegram or via email. She will provide details, answer initial questions, and start the interview process.

### Edit and polish

I never publish the first draft. This is a sort of canvas which confuses myself. I will iteratively improve it: set the structure, move paragraphs to each other according to their meaning, rewrite strange places and reveal what remains abstract. After that, I’ll get something like:

> **Job opening. Systems Analyst in a Travel Tech CRM, Remote**
>![CRM screenshot](/write-vacancies/1*B1BqNTDaLWAXdvABmJq6Ew.png)
>
> Hey!
>
> We’re Emerging Travel Group, aka ETG — a global travel-tech company. Regular travellers go on vacation with us. Company employees book business trips with us, and their managers approve them. Agencies put together tours with us and sell them to their own clients. All this data is sent in a single internal tool for our employees, the CRM — and we are looking for a system analyst for it.
>
> **Product and Tasks**
>
> CRM is a mature product that receives data from dozens of other products: hotels, transportation, partner sales services, etc. It is an internal website used by various employees: analysts, product managers, operators, support staff, salespeople, and others. Each one solves their own tasks in it.
>
> Within CRM, you will work on transportation products: booking airline and train tickets, transfers, and car rentals. There are many tasks we want to accomplish but cannot manage with the current staff. Therefore, we are launching a new team and hiring staff there.
>
> The first task is to launch the car rental service and integrate it into CRM. Once this is done, we will focus on automating the work of operators selling airline tickets. Along the way, we will compile a backlog of other tasks.
>
> The team’s tasks include launching new transport products, client problem-solving and additional services sales automation. To achieve these, the system analyst will:  
>  — Lead transport projects through the Discovery phase, significantly offloading the project and product managers.  
>  — Unblock the Delivery phase if there arise any issues related to requirements or agreements between stakeholders.
>
> **Technologies**
>![Gitlab screenshot revealing project’s structure](/write-vacancies/1*lw8IN9Uak_w8P_whW0NvwQ.png)
>
> CRM is a Django application maintained by several teams. Although our monolith is 9 years old, we do not consider it as a legacy. We have a streamlined repository structure with shared utilities and applications for each integration. We write unit tests and are starting with integration tests. We automated our pipelines to release multiple times a week without any issues. The main challenge is the amount of docs, the number and depth of business domains we deal with.
>
> Moreover, it is crucial for us to keep the product consistent and the user interface intuitive. For example, understanding how things are set up on the hotel screen should immediately clarify how things work on the airline ticket screen.
>
> **Team and Communications**
>
> The new team will have 4 members: the system analyst (you), an engineer per backend, frontend and QA. From the main team, a product manager, a project manager, team leads, and other testers will join — up to 6 more people.
>
> You will primarily work with:  
>  — The product and project managers to validate projects and requirements.  
>  — Four transportation product managers to gather and prioritise the product backlog and initial requirements. These are the main business customers.  
>  — Three engineers from your team. These are the main executors who will provide estimates and bring up blockers, which you will help to resolve.  
>  — CRM users to complete requirements. They are the main stakeholders, have tens of representatives and are diverse.
>
> If the new direction becomes fully operational and transport tasks accumulate faster than they can be completed, we will scale the team. We might create a separate stream with its own product and project managers, product team lead and hire more engineers.
>
> **Processes and Tools**
>
> We work in iterations or, formally speaking, Kanban cadences: quarterly and weekly. At the quarterly level, we plan projects and synchronize with other teams. At the weekly level, we determine which tasks to take, complete them, and deploy them to production.
>
> We manage tasks in JetBrains YouTrack. For planning, we integrated it with GanttPro. We write documentation in Confluence and draw diagrams in Miro. Everything is mainly tied to a unified Google Workspace account, which we provide on the first working day. We also use it for email and calendars.
>
> **Expectations and Requirements**
>
> What we expect from the system analyst:  
>  — Consistently gather minimal project descriptions from the backlog. For this, create a checklist and go through it with the transportation product managers or business optimisation specialists.  
>  — If conflicts arise, collect them and find a solution that satisfies all stakeholders. If that fails, conduct brainstorming with stakeholders representatives.  
>  — Align projects and their scope with the product and project managers. Firstly, to ensure projects do not contradict the operations stream strategy and CRM’s vision as a cohesive product. Secondly, to determine the level of these experts’ involvement needed to validate complete product and project requirements.  
>  — Develop complete project and product requirements: communicate with stakeholders and executors, follow checklists and guides, survey end-users, and write documentation. If necessary, create CJM and User Stories.  
>  — Once the requirements are gathered, initiate the project launch. The project and product managers will check them for consistency with the rest of the product and projects. Developers and the tester will check them for completeness to ensure they have everything they need to start working. Then, fill in the estimates and the due date, and ensure everything is correctly displayed in the task manager.  
>  — Help with prioritising the product backlog and participate in planning sessions quarterly.
>
> The ideal candidates:  
>  — Have worked as a system analyst for three years, doing nearly the same tasks as we expect from this role.  
>  — Have a technical background: can explain the features of XML and JSON formats, how modern websites work; can write simple SQL queries with SELECT, JOIN, WHERE and GROUP BY.  
>  — Can create CJM and describe requirements in the format of User Stories. We’ll ask to solve a small case on the fly.  
>  — Proficient in English at a B2 level. You can provide a known certificate or we’ll assign a test.  
>  — Clearly articulate thoughts both writing and speaking.
>
> **Application and Interviews**
>
> To apply, contact Nastya, our recruiter, [on Telegram](https://t.me/dreaming_unicorn) or [by email](mailto:anastasiia.sycheva@emergingtravel.com). She will provide details, answer initial questions, and start the interview process.
>
> Interview Process:  
> 1. Sardor, the Head of Architecture and Analytics, will review your resume and other shared artifacts.  
> 2. He and another analyst will conduct a technical skills interview.  
> 3. Nastya will conduct an company’s culture fit interview.  
> 4. We will arrange meeting with the product and project manager to meet the potential colleagues and exchange questions.  
> 5. You will finalise salary, start date, and other conditions with Nastya and Sardor. Here we send the exact offer.
>
> **Terms and Working Format**
>
> We offer:  
> — Two employment options. In Russia and Belarus — under the labor contract and providing voluntary health insurance. Elsewhere — a service agreement with our Cyprus legal entity. You can be contracted as an individual, as a sole enterpreneur or as a legal entity in your jurisdiction.  
>  — A work laptop. Provided at the office or reimbursed for purchase.  
>  — Remote work. Office attendance is optional if there is one nearby.  
>  — Learning opportunities. We offer corporate training, conferences, and English courses. If you wish to participate in a conference as a speaker, we will help to organise it. The company also reimburse half the cost of external training if it helps in your job.  
>  — 28 days off yearly. One extra paid mental health day off per month. The company also covers half the cost of therapist service.  
>  — Informal activities: online and sometimes offline.
>
> To apply, contact Nastya, our recruiter, [on Telegram](https://t.me/dreaming_unicorn) or [by email](mailto:anastasiia.sycheva@emergingtravel.com). She will provide details, answer initial questions, and start the interview process.

Great, now we can publish it and send to recruiters — so they can distribute it and help with contacting candidates.

Now, let’s break it down in a comprehensive guide on how to write a job description in general and what to do afterwards to hire a great employee.

## Why I do it this way

### Why put in all this effort

The example above is detailed and requires a lot of work: understanding, negotiating, thinking, formulating, rewriting. Why bother?

We could find ourselves in a situation where a manager tells us, “I’ve got the budget, hire yet another engineer.” So, we could just pass this to the recruiter — that’s what they’re paid for, right?

If the recruiter asks for a description, we could copy-paste someone else’s or ask ChatGPT. Don’t candidates already know what engineers are supposed to do?

![Screenshot of a stock job opening description](/write-vacancies/1*18INGPYveiA_uGdSOL4XLw.png)

I guess you’ve got the idea

Here’s a default job description with stock responsibilities, qualifications and other points. As a candidate, I see a lot of questions about such a description:

-   What does it mean that your engineering team is dynamic? Do you release the product in small iterations? Or do your requirements and processes change every week?
-   If I’m playing a crucial role in design, development, and maintenance — what are the rest of the team doing? For example, seniors and team leads?
-   The statement about delivering solutions that meet needs is meaningless — who is looking to deliver solutions that don’t fit and drive failure?
-   How will the performance, scalability, and reliability of applications be measured? Subjectively from my perspective, the team lead’s perspective, or are there any metrics?
-   How do I decide whether to collaborate and implement features or optimise the application further?
-   Also, what does clean, maintainable, and well-documented code mean? What if my vision of this is even stricter than the team’s?
-   What is considered an issue: the service is down, 500 errors sometimes occur, memory leaks, or a client complains that something isn’t working?
-   Is it okay if I bring a new dependency to the project with one maintainer and 200 Github stars if it’s a new industry trend?
-   How do you distinguish strong Golang proficiency from not so strong and very strong?
-   Familiarity — does that mean knowing the existence of these technologies, or having written commercial code in each of them?
-   Why should I join you? Everyone offers competitive salaries, growth opportunities, benefits, and a “friendly team.” What makes you special?
-   What do you exactly do? How are you better than your competitors? Everyone develops cutting-edge tech solutions. What sets you apart from hundreds of similar vacancies?

The person who wrote this might know the answers to all these questions. But it’s unlikely they’ll have the chance to tell them to candidates — who won’t be motivated to apply. And if they do apply, it’ll be because they applied to everything, and you’ll receive the most generic applications. Such candidates will likely forget about you until a recruiter contacts them. They’re unlikely to be motivated to work specifically with you.

**There are exceptions like Apple**. No matter how they publish the opening, they’ll get thousands of applications. Such companies face a different problem — vague and generic descriptions generate so many applications, including irrelevant ones, that they become impossible to sort. Companies have to hire an army of recruiters and buy automated solutions of varying quality. When that’s not enough, they hire so-called talent partners — who are also recruiters but advocate for candidates to regular recruiters. Even in this scheme, poorly crafted job descriptions waste tons of money on useless work that could have been avoided.

**The market is still candidate-driven,** even after lay-offs waves. Yeah, this can be debated as [there are more positions than in 2023, but fewer than at the peak of 2022](https://www.reddit.com/r/cscareerquestions/comments/1cpm3qg/data_showing_the_2024_tech_job_market_is_far/). But even if we don’t have to compete for all candidates, there’s still competition for a large share of the best ones. And the better the candidate you want to hire, the higher the competition, even if you have a FAANG strength brand.

**Even if you’re hiring through referrals**, you’ll have to invest in the description. Because you have to compete here too. And because you still need to motivate that candidate known through N handshakes to start talking to you. Description is also a way you sell the position to a candidate.

### Who the heck will read such an endless scroll

Understandable if this thought crossed your mind after the example. To address this, let’s look at the hiring funnel and vacancy resizing.

![Hiring funnel, where 100 applicants convert to 2 accepted offers](/write-vacancies/1*dD24qftwtW0k45quFgOcgQ.png)

The funnel — a model that visualises the hiring process

Hiring consists of stages. Candidates become fewer as they pass from one stage to the next. The ratio of candidates who pass further to all candidates on this stage is the conversion rate. In the initial stages: applications and cold contacts by recruiters — there are more candidates than when we make an offer. That’s why the visualisation looks like a funnel.

Every stage of the hiring funnel is not free: recruiters and hiring managers review applications, experts conduct interviews, security service checks the candidate, … So it’s important to find a balance. If we can afford to filter out thousands of irrelevant candidates to find a few relevant ones — okay. Although in my opinion, it’s better to organise the funnel so that only 10 candidates apply but all of them are relevant and there are 2–3 good enough to send them offers. A detailed job description helps as it’s cheaper to filter candidates at the earliest stage.

**Resizing** is when you adapt the job description to the publication format. There can be options from minimalist, where the hiring manager posts on social media: “Looking for a Golang backend developer for my team, here’s the details: link, apply in direct messages” — to a paid video integration where the host adds a story and relevant shots behind the description and make it even more informative.

The goal of resizing is to give just enough info for the candidate to understand they are probably a fit and to motivate them to read the full details via the link. Let’s try resizing for the systems analyst example:

-   Banner in targeted ads: “Looking for a Systems Analyst in CRM. Full-time and remote. Tap for details.”
-   Social media post: “Hi! A neighbouring team is looking for a Systems Analyst. I like both working with these fellows and the product they make. They’re short on heads, so they’re looking for someone to gather requirements for new features and help engineers push them to prod. Here’s the details: link. For referrals or questions, write in direct messages.”
-   Recruiter’s message:  
    “Hi!  
    I’m Nastya, recruiter at ETG. We’re an international travel tech company. I’m looking for a Systems Analyst to work on our CRM. I’ve spotted you’re looking for a job, so I’ve thought you might be interested.  
    In short, you’ll be gathering requirements, interviewing users, describing and agreeing on solutions, and then helping engineers implement them. I see you’ve already worked as a Systems Analyst for three years: first at X, then at Y. So I think the role and tasks will be familiar to you.  
    Other requirements and details: link. What do you think about applying to us? What questions can I help you with?”

Also, it’s worth adapting the title to make it a sort of target and stand out from neighbouring ads or publications. Instead of just “Systems Analyst” — “Systems Analyst in a Travel Tech CRM, Remote.”

**A suitable candidate won’t be overwhelmed with too much details** if they’re meaningful and well presented. The more detailed the description, the more likely suitable specialists will apply. There also will be those, who didn’t read at all, and you’ll reject them. If the candidate didn’t apply, it’s likely they wouldn’t fit anyway because:

-   they lack the motivation to read the text entirely;
-   … or the attention to apply as you ask;
-   they expect different working conditions;
-   their experience doesn’t match your requirements;
-   the company isn’t attractive enough;
-   whatever.

Does it make those missed applications valuable? I don’t think so. And I don’t know any great specialist who would skip a suitable position because it had “too many words.”

If you are a systems analyst and the position in the example suits you but you didn’t want to apply — please write why. You can do it in the comments, [email me](mailto:laidrivm@gmail.com) or [message in Telegram](https://t.me/laidrivm). I have something to discuss with you!

### How to write

**Do some preparations**. Follow the sequence I went through in the example:

1.  Understand the need — why do you open this position? How do we see the result of the person’s work in this role? Whom would we like to see on the team, and whom would we not?
2.  Formulate that in text and diagrams.
3.  If there are other stakeholders for this position, as there usually are in product teams — ask them for comments.

Only then start writing the actual vacancy.

**Use a friendly and informal tone**. To determine the exact level — imagine you’re telling your friend about this position in a bar or cafe. If imagining doesn’t help, do it for real. Meet with a friend who might be interested in this position, record your speech, then transcribe and edit it. I prefer this tone of voice because it shows candidates that we are trying to reduce the distance, interested in hiring someone, and not formalists.

**Share details and clarify abstractions**. Some illustrations:

-   An edtech platform can turn out to be a YouTube clone with a paywall, or it can be a course builder in augmented reality with an AI assistant for mentors that helps track students’ problems.
-   Node.js can be shiny, or it can smell of because a bunch of boilerplate and bicycles. Balancing on the most well-known open-source tools, or consisting of super-experimental libraries supported by the CTO’s friends.
-   In the US market means a product can be toughly sold for corporate trainings by an outsourcing company from India, or there can be a queue of B2C experts who want to sell courses with us.

Such details form the candidate’s expectations, filter out the unsuitable, and allow you to stand out.

To check how concrete the description is, test it with a black marker. Black out or replace with [X] all proper names and see — how many other companies and positions would fit such a description?

Find all the adjectives you have: strong, experienced, dynamic, critical, scalable, and others. These are all assessments, and they are abstract. Explain how you got these assessments, what you mean by them, what they mean specifically for you.

**Be honest**. It’s better to mention all potential drawbacks right away. For example, writing that you have a 300K lines monolith without tests is better than guiltily mentioning it on the interview. Or worse, letting the candidate find out about it on their own on the first working day. If you write honestly, you will meet candidates, who want to fix what you consider a possible drawback. Or it may not be a drawback for them at all. Or they value honesty, which is also cool.

**Explain why your company is great**. A job posting is an opportunity to talk about your material and non-material advantages: growth, technologies, soft skills, culture, social significance, work format. Not just that they exist in general, but how they manifest specifically in your company. If it’s hard to come up with what to write, imagine you’re competing for a position with Microsoft. Or with some of your true competitors. Why should one choose you over them?

**Show, don’t tell**. If you have examples or proof of your words, share them. If you can show something instead of telling, do it. You can show any metrics — the same % of codebase covered by unit tests or the level of cyclomatic complexity from the linter. Attach some screenshots of your product UI or record Looms. If code fragments can be made open-source, publish and show them. Links to conference presentations, blogs, or other media will also work great.

**Don’t rely solely on ChatGPT and copy-pasting**. You can use both, but they are unlikely to help much, as you’ll have to tune the result. These tools generate text that isn’t about you and your opening, because neither the authors of other openings nor the neural network know much about you. Instead of feeding the neural network more and more context, it’s better to write everything yourself. Moreover, from written, not generated text, the candidate can check the vibe of the company and the hiring manager.

### What to write

A published vacancy should give the candidate all the information on a single web page so they can make a decision about applying. That means, the candidate:

-   wants to work in our company in this position;
-   is ready to spend their and ours time on interviews.

Therefore, it should be treated like a promo page. With a unique offer, rational and emotional arguments. And also — by addressing concerns and questions. Here’s the list I go through myself when preparing a description.

**What kind of company are we?** Our name, what we do in general. Indicate the domain and positioning because candidates may have preferences or stop-lists.

**What’s the role?** The name, the work to be done, the expected result, any specifics, what a typical day will look like, and any important non-routine tasks. Expectations for different positions vary in different companies.

**Why was the hiring opened?** If it’s a replacement, what happened to the previous employee? Why aren’t we considering internal rotation or promotion?

**What will be the first task?** Where to start and why, what is expected, what tasks will follow. This is why we are hiring someone. It is important here — not to be afraid to show your weakness or vulnerability. If we do this, we honestly indicate the pains and problems we need help with. If instead it’s “we are a team of great professionals, royals of the hill” — then why do you need someone else?

**What’s about the team?** How many people are on it, what are their roles, what’s the current stage: has it been formed for a long time or are we looking for the first employees?

**Who will the candidate work with?** The hiring manager, their team, other managers, and other teams or some other combination. Why with these people and not the other.

**What are the processes?** What calls and other rituals are there, how we communicate, how and when we pass results to each other.

**What tools do we use?** From task trackers to linters — what the candidate will work with.

**What is the product?** What problem it solves, with what features, at what stage, how we measure success.

**What stack do we use?** What the product is written in, what we plan to drop out of it, and what we want to bring in new. What automation exists and what we plan. If there is a tech radar, attach it.

**What condition is the product in?** How much legacy it has, how we evaluate technical debt, how much we invest in it, and how we work with it.

**What are the plans?** What we want from the team, product, and technologies in the future.

**How do I see the ideal candidate?** I want to focus more on this point and discuss a few things related to the requirements:

-   I usually specify 3–7 points with necessary but sufficient conditions. If one is missing — I will reject, but if all are present at a sufficient level, I will sign without any other conditions. I have not yet encountered positions where it was impossible to reduce the list without losing meaning.
-   I’m not a fan of additional requirements — those without which the candidate is still suitable. So I do not specify them either in the usual list or separately highlighting “would be a plus.” If the candidate has something valuable beyond the requirements — for example, if they have worked with such products or in the same industry, I will either see it in the CV or the candidate will mention it themselves.
-   Each remaining point is explained in details to align what is needed for this work — and what the candidate will be assessed during interviews.
-   If there are competency matrices, growth checklists, or something like that, attach them.

**Who definitely won’t fit?** What conditions can I mention not being cancelled, and if candidate present them — better not to waste each other’s time? When I was stormed by graduates of three-month IT courses, I explained why they wouldn’t fit most of my positions — but also gave links on how and where they could find a job in the same company.

**What’s the hiring process?** How we choose candidates, what stages are in the process, what interviews and how they are conducted.

**How to apply?** I usually share contacts of someone who will handle the main communication about the position or contact first. Sometimes it’s me, sometimes a recruiter. I always put an email — because everyone has one, and one more convenient and faster channel. In the analyst example it’s Telegram. Sometimes I duplicate this block — next to the requirements because it fits organically there — and again at the very end.

**How much do we pay?** If it’s possible to mention a salary, do it: in the format of a range “from X to Y,” or “want to fit under X.” Even if policies forbid this, everyone still discusses each other’s salaries. There is [levels.fyi](http://levels.fyi) and its analogs. And saving money at the hiring stage will likely turn into expenses at the stages of reviews and retention. So if you reveal the money, you simplify life for everyone including yourself. If your company here is completely against you, you can share info on salary in private messages or closed communities.

**What do we offer?** What other benefits are there for the candidate to join us? Start by listing everything that you consider valuable, at least potentially: all kinds of reimbursements, bonuses, stocks, exclusive events or special offers. Then compare this with the position’s income. If you consider free coffee a perk for a senior engineer, either you pay too little or have nothing more to offer. In this case, it’s better not to mention it, even if free coffee is available. I can’t imagine an employee who would be motivated by its presence to choose between two offers.

This list contains more questions than might be suitable for a specific situation. In that case, I skip some of them. At the same time, I can easily imagine a position where there answers to all these questions will be meaningful and valuable.

This list also helps to structure the text of the position itself. However, the structure can change depending on how the story organically flows. I usually start with the company info because it’s the largest frame. I place the requirements closer to the end because it’s important to show the value first.

Sometimes I provide a summary at the beginning, explaining in short who I am looking for, where, and why. It can be copied into resizes later. Sometimes I see vacancies start with how to apply because that’s the main target action we want. I haven’t tested it myself, but it’s also an option.

No matter how much text you write in a vacancy, candidates may still have questions. But the higher the quality of the description, the better the questions will be. Or there might be no questions because we’ve answered them all, and the candidate will mention this. If they read something, of course. If not, their questions will make it immediately clear.

I should mention that I’ve never worked under a strict NDA. But even in such a case, I would try to find as much information as possible to share and negotiate with the person responsible for this policy. Or at least provide a detailed description after the candidate signs the papers so they can review it and prepare questions without taking up interview time.

### When you’re on a mass hiring

If you are constantly hiring, you will eventually find some templates. The information about the company, team, product, and working conditions will be the same. You can just copy-paste these blocks from one position to another. But it’s important to keep track of their meaning and relevance and update them as needed.

It’s also useful to exchange descriptions with other hiring managers and recruiters. They will start to use what they like and what works for you, and you will do the same out of theirs openings. The vacancies will start to look more consistent and convert better. Still, make sure that your openings will still have your tone of voice and are recognisable among others.

There are situations where the company has pool hiring. They first hire a typical employee for the general pool and then figure out where to send them. Even in such conditions, a detailed description will be useful as one of the ways to get the best or most suitable candidates within the pool. Here you should focus on the details different from the other teams.

### Where and how to publish

**In work chats.** No one sells a job in a company or exact team better than the people who already work there — to their friends. Of course, if they do like it. These people will invite colleagues from previous workplaces they have already worked with well. Many companies have a bonus for a successful referral, so the motivation is there. If there is no such bonus, offer something you can afford yourself: from an Amazon certificate to a box of beer —as a material equivalent of “thank you.”

**On your social networks.** How to set up a profile and build a network [I briefly described in another article](https://medium.com/@laidrivm/how-i-found-a-job-as-an-engineering-manager-twice-in-2023-and-2024-906f00ee39f5), in the LinkedIn profile and Social networks sections. You can ask friends from the industry, who have enough relevant subscribers, to post too. If the company has social networks, ask their administrators to post there. If they resist, suggest making regular digests with other positions as well. Finally, you can set up targeted ads.

**In professional communities.** For example, if you are looking for a developer on FastAPI, post in the FastAPI Devs chat. Check beforehand that posting your openings is allowed by the rules. Or there might be contacts where you need to send your opening to be posted. I personally use framework communities, graduate chats of various courses, closed communities where people also look for jobs, and purely job chats by location, like IT Jobs Serbia. This method has brought me dozens of employees — both direct reports and employees for other teams.

**On job boards.** If you have reached this stage, be prepared for high competition and low conversion rates — how many responses will suit. You can improve that with specialised boards — the narrower and more relevant, the better. Just in case, I’ll share a list:

-   [levels.fyi](https://www.levels.fyi/jobs/title/software-engineering-manager?jobId=117020737463558854)
-   [Pallet](https://www.pallet.com/)
-   [Glassdoor](https://www.glassdoor.com/)
-   [Wellfound](https://wellfound.com/)
-   [Xing](https://www.xing.com/)
-   [Honeypot](https://www.honeypot.io/en/)
-   [Indeed](https://www.indeed.com/)
-   [HeadHunter (RU)](http://headhunter.ru/)
-   [Habr Career (RU)](https://career.habr.com/)

**Cold messages are still an option.** Recruiters usually handle this, but I’ve done it myself a couple of times. Here’s how I did it: I opened LinkedIn, typed the position title into the search, set the filter to 1st and 2nd circle of connections, and wrote to everyone with the “Open to Work” status. It was a bit exhausting, though. If you’ve reached this stage, it might be worth contacting staffing agencies.

**Staffing agencies** help with hiring because they grow their brand and candidate base. They usually take a commission as a percentage of a new employee’s annual salary. Other conditions vary. I can recommend a couple of agencies I’ve worked with myself. They also work with candidates outside of Russia and Belarus with enough English proficiency: [NewHR](https://newhr.org/en) and [GMS](https://gmsservices.ru/en).

I also want to share the thought that many really great specialists don’t have a resume because they don’t need one. They are hired as fast as they thought about moving. Only methods 1–3 will help reach out to such people. The rest is more for ordinary mortals, like me.

### How to update

It’s normal to adapt the vacancy at any time until you hire an employee. And when you hire — write that the position is closed. At the same time, you shouldn’t delete the publications themselves because they will get indexed or pop up in some other way — giving a chance for a suitable candidate to write to you in the future.

During the hiring process, you will receive feedback: how many people respond, how many of these responses suit you, how candidates perform in interviews, what they ask during the process. All this is an opportunity to reflect and update the vacancy. Or consider these signals in future hires. I also wrote separate article on [how to work with feedback in general](https://medium.com/@laidrivm/guide-how-to-ask-for-give-accept-and-process-feedback-9e3a1d061e74).

## What’s next

Besides the great opening description, a lot of other things help to hire strong candidates:

-   Publicity;
-   Your brand (Lord, forgive me);
-   The company brand;
-   Good working conditions;
-   A well-established hiring process;
-   An onboarding process and working with expectations during the probation period.

So, besides improving the job description and its distribution, it’s worth dealing with related topics as well.

I didn’t wrote about test tasks. It seems to be a topic that is better covered “vertically”: designing, publishing, reviewing, discussing applicability, and other things. Test tasks are great — remember that you have the option to offer them.

----------

If you found this article helpful, please show your support by clapping, sharing it with your friends or colleagues, and subscribing to receive notifications for my new posts.

If you want to talk on managing engineering teams or departments, designing systems, or improving your tech product, [send an email](mailto:laidrivm@gmail.com) or [message me](https://t.me/laidrivm).

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/vladimir-lazarev/).

Peace!