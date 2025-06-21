---
layout: post
title: "But What is European Summer of Code?"
---

If you're reading this, you probably already have an idea of how rewarding it is to contribute to impactful open-source projects. There are several programs like GSoC, LFX Mentorship, SoB, and etcetera, which provides new contributors with opportunities to work on exciting open-source projects and learn a lot all while getting a good stipend.

ESoC or the European Summer of Code is one such relatively new program, the description from their website reads,

> Funding stipends for contributors new to open source worldwide, and matching applied AI projects in Europe with international open source projects.

I was one of the first members to be selected for ESoC and since sharing the news, I've received a ton of messages from folks asking, "What is ESoC?", "How did you apply?", or "How can I get in too?"

This blog post is my attempt to answer all those questions.

TL;DR: find the organsations from ESoC's [website](https://www.esoc.dev/) and GitHub [repo](https://github.com/european-summer-of-code) > read the application process > join the communities > make meaningful contributions > wait for the results

## **How does ESoC work?**

Unlike how GSoC is coordinated and controlled by Google, ESoC is a Europe-based initiative supported by several key "hubs". Currently, there are three hubs (the numbers might increase in the future):

🇫🇷 France: [probabl - the scikit-learn company](https://probabl.ai/)

🇩🇪 Germany: [German Center for Open Source AI](https://gcos.ai/)

🇮🇹 Italy: [Fondazione Bruno Kessler](https://www.fbk.eu/en/)

These hubs coordinate the projects registered with them and are responsible for all the administrative tasks. 

## **Projects in ESoC**

There are broadly two kinds of available projects in ESoC: 

* **Open source projects**: These emphasize contributions to open-source toolkits, libraries, or frameworks. The goal is to improve core functionality, add features, or enhance usability of the project. Example includes sktime, scikit-learn, pytorch-forecasting and etc. Contributors get a 4800 EUR stipend over 3 months.
* **Applied projects**: These projects focus on solving applied problems using open-source tools. These are practical, outcome-driven projects and more internship-styled where the hub connects the contributor to a European organisation. Example includes EcoSPECS. Interns may get a higher stipend but there are formal project deliverables.

These projects are announced on a rolling basis unlike GSoC where the projects are announced all at once, so keep an eye on them!

(Disclaimer: Project types and the rules tied to them are quite flexible so it is best to confirm the technical and legal details with the concerned hub)

## **Application and Selection Process**

The application and selection process might differ depending on the hub and type of project, so it’s best to keep up with the ESoC GitHub repository and website and seek help or instructions from the respective communities.

I applied to sktime, which is a toolkit for time series analysis registered with the German Centre for Open Source AI. For open-source projects, you typically need to submit an application form, a meaningful pull request (PR) as an entrance task, and a project proposal (if required by the project you're applying to). Based on your entrance task and proposal, you may be invited to an interview. The final selection is made after considering your performance in all the stages.

In the case of applied projects, you first submit the application form, and then you’re given an entrance task which is usually a simplified sub-task of the actual applied project. After completing the entrance task, you may be invited to an interview. Your selection here depends primarily on your past experience with the relevant tech stack, the quality of your entrance task, and your interview performance.

In both cases, the interview will last for 30 minutes and you'll be required to give a 5-minute presentation on the code you’ve written. The interview questions will vary depending on the project you’re applying to. For open-source projects, the interview tends to focus more on open-source fundamentals, as your technical potential is already assessed by the mentors based on your past contributions to the project. However, for applied projects, expect in-depth technical questions on the topics associated with the project.

## **General Tips**

A lot of people ask questions like, "How do I get selected for ESoC or GSoC or _insert any other open-source stipend-awarding program_?"

However, I don't think this is the question they should ask. It's like a kid asking their football coach, "How can I win a 2022 FIFA match between France and Argentina?" rather than asking, "How can I get good at football?"

So the correct question should be: "How can I make valuable contributions to open-source projects?" and the rewards will follow.

And how do you make valuable contributions? 

* Start early
    * Expect to feel overwhelmed when you first see large codebases. Starting early gives you time to explore the project's purpose, break down modules to understand them better, and get your questions answered by the community.
* Ask better questions
    * Vague questions like “_How do I get selected for ESoC?_” don’t help anyone in the community. So, always do some prior research and then ask focused questions. A better example would be:
        >“Hi, I’m a first-time contributor. I was going through Issue #1234 and I want to understand how _something_ works. I’d really appreciate any help and would love to get more involved.”
* Don't blindly copy and paste content from a large language model
    * If you don’t understand what you’re writing, don’t write it. Whether using AI is good or bad is a separate debate, what matters is that you take ownership of your work.
* Collaborate, don’t compete
    * My [mentor](https://github.com/fkiraly) once told us:
        >“It’s also not a race with a single prize. We work together to build something great, and you’re invited to become a central part of it - as a team!”
* Quality over quantity
    * I feel contributions with technical depth are always preferred over a large number of minor ones (like fixing typos or bumping package versions). Don’t get me wrong, starting small is great and every contribution to the project helps. But aim to gradually make deeper contributions aligned with the project’s roadmap.
* Join the communication server
    * Whether it's Discord, Discourse, Zulip, Slack, or something else - join it! Get comfortable in the community, participate in discussions, and try to attend meetings if your project has them. That’s how you get to know the community and the project goals.

## My Journey

It was September of 2024, and I wanted to start contributing to open-source projects because I had a clear idea of how much I could learn by working on a large codebase used by thousands of people.

I first came across sktime while working on a hackathon project where we had to build a pipeline to predict the prices of agricultural commodities in the Indian market, a classic time series problem. What drew me to sktime was the helpful community and the fact that they had a mentorship program, it was unpaid but a massive opportunity to learn with experienced mentors. After making my first significant pull request, I joined the mentorship program, and it taught me a lot.

sktime had previously been accepted into GSoC twice, so I was also planning to apply to GSoC with them. Unfortunately, they weren't accepted into GSoC 2025, it was a disappointing news but along with that came an exciting announcement: the launch of the European Summer of Code (ESoC) - with sktime as one of the founding organizations!

By that time, I already had enough experience contributing to sktime and had grown to love the community, so I dropped my plans to apply to GSoC with other organizations and withdrew my application. Looking back, I think it was a great decision and it made me so happy when I got the acceptence email for the ESoC program!

To anyone getting started - happy contributing :)

> I originally published this post [here](https://hackmd.io/@jigyasu/but-what-is-european-summer-of-code)