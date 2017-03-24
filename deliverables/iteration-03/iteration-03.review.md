# CryptoWealth

## Iteration 03 - Review & Retrospect

> When: Thursday, March 24, 2017, 6:30pm
 
> Where: In-person, Slack, GitHub

## Process - Reflection

We took our process from our previous iteration and built upon it greatly. We were more productive than ever this iteration, and we hope to continue our process into what waits for us in the future.

#### Decisions that turned out well

1. Two of our team meetings this iteration were notable due to the communication, collaboration, and productivity that occurred. These were code sessions in which the entire team would gather in one place to code for 4-7 hours per meeting. These meetings highlighted our team’s ability to comfortably working together in a fast=paced collaborative process. Our success is due to a mutually agreed-upon end goal of how we envisioned CryptoWealth, and also to the fact that physical proximity and willingness to assist one another proved to be extremely helpful in moving towards our common goal.

2. The Kanban process was adhered to in this iteration, and it really shows. We created issues for our ZenHub board and assigned them to 2-3 people at a time (i.e. back-end tasks would go to Aaron and Akshay, front-end tasks would go to Sakshaat, Ian and Harold). Then, when someone was ready to work on a task, they would assign it to themselves and change it from "To-do" to "In progress." This way, everyone knew what they had to do, and there was no shortage of tasks to be done. Everyone also knew what everyone else was working on, and this encouraged strong communication. Our board can be seen here: ![ZenHub](https://puu.sh/uX1qX/7f216974e0.png)

3. We went through many designs and concepts for our application until we decided on one that we were comfortable with. This involved group discussions online on Slack to pick suitable colour schemes for our application, and showing each other screenshots of concept designs. By doing this, we were able to come up with a much better design than if we had just assigned it to one person. Some concept designs can be seen here: ![Concept](https://files.slack.com/files-tmb/T3UPW0M4H-F4ND6V9R9-d62163d84e/image_uploaded_from_ios_1024.jpg) and here: ![Concept](https://files.slack.com/files-tmb/T3UPW0M4H-F4P9HNYFM-e94fe8e4bc/image_uploaded_from_ios_1024.jpg)

4. At the beginning of our iteration and at the beginning of our meetings we refactored our old code from the previous iteration. This helped us for this iteration as we were able to get rolling with new code and features much faster by integrating and building off of quality-controlled code.

#### Decisions that did not turn out as well as we hoped

1. As seen in our Burndown chart, most of our work was done late in the iteration. While this is not nearly as extreme as our last iteration and we did not write much bad code this iteration, we had to finish late due to competing schedules in the first week of the iteration. There were also two issues that we did not get to at all. The Burndown chart is seen here: ![Burndown](https://puu.sh/uX1fc/99479614a3.png)

2. The forking workflow we used for Git had some problems. If we forgot to `pull` from `upstream` and `push` to `origin` (our fork) every time, our fork would get de-synchronized. In a tight schedule and during a group meeting, this would waste valuable time. In one instance, Harold had to completely wipe his fork and recreate it as his fork was far too behind to even allow him to commit straight to `upstream`'s `master` branch. As seen in our commit history, we often pushed straight to `master` towards the end of our iteration instead of creating pull requests as defined earlier, mostly due to these problems. This is when we were doing pull requests (the day before): ![Pull requests](https://puu.sh/uX1SI/1fced9310b.png) and this is when we were committing straight to `master` (the day after): ![master](https://puu.sh/uX1Mk/bfdf4666a5.png)

3. For reasons still unknown to us, the technologies we used had conflicts with other software that each of our machines had installed. This led to some strange quirks in some of our development environments. Often, we would have a line of code that worked in 3-4 team members' working copies, but not for the last 1-2 team members. (Some examples: Python's SSL verification, Chart.js, and React property types.)

#### Planned changes

1. We will be synchronizing our forks with the main repository and ensuring that we commit to branches this time. Committing to `master` every time in our individual forks likely caused the issue with desynchronization. Notably, the group members who used branches in their forks did not suffer from having to resolve conflicts in 10+ files on their pull requests.

2. As a lot of ideas and thought processes were exchanged during our in-person planning meetings, we tend to get quite involved in the verbal discussions, often forgetting to keep the artifacts that were created. Due to this, we lost two important artifacts: our database schema drawing and our rough plan of the landing page. Next time, we should have a dedicated team member taking meeting minutes so that valuable meeting insights are not lost or forgotten.

## Product - Review

#### Goals and/or tasks that were met/completed:

1. We isolated a potential working algorithm for portfolio generation. We prioritized stability and reputability of cryptocurrencies for risk averse users and we prioritized high weekly returns for risk tolerant users. This was then put into a mathematical model. We hope to expand upon this greatly (i.e. introducing machine learning algorithms).

2. _As a user, I should be able to complete a questionnaire to see how risk tolerant I am, and then receive a risk profile and portfolio which I can sign up with._ We finalized our questionnaire by adding an input field for the cash value of the portfolio and adding a visualization and representation of the user's portfolio and risk profile.

3. _As a user, I should be able to register with a portfolio, and later login to that same portfolio._ We persisted all user details to the database and stored only details that do not rely on an individual user's personal details, enforcing personal security.

4. _As a user, I should be able to see changes in my portfolio over time in an easy to understand manner._ We implemented midnight changes to portfolios, and added a profile screen that would show the net changes in one's portfolio.

5. _As a user, I should see an interface which is intuitive and visually pleasing._ We updated our landing page and the look and feel of the entire application. First, we picked a colour scheme (#47 from [this link](https://designschool.canva.com/blog/website-color-schemes/) as a temporary measure). We then modelled it after Wealthsimple: ![Wealthsimple](https://www.wealthsimple.com/images/pages/the-details-laptop-CA-0b4389f9.png)

#### Goals and/or tasks that were planned but not met/completed:

1. _As a user, I should be able to see every change in my portfolio allocation history._ We will have an activity log of automatic updates to portfolios. We did not implement this for this iteration, as it was the least important goal we had, and we prioritized other tasks first.

## Meeting Highlights

Going into the next iteration, our main insights are:

1. We find that we are most productive when working together in person as we can more easily discuss and share ideas with one another. Due to our ability to collaborate, this results in a goal-oriented positive work environment where we are motivated and seek to accomplish tasks at a high quality. In-person, we were also able to iron out all the concerns and questions we had with our tech stack whenever issues popped up. We should schedule more in-person meetings just like these: more in number, but shorter in duration.

2. We were able to complete the majority of our issues this iteration and we did not waste too much valuable time. We would have run into far more issues if we did not get comfortable with Redux, Django and React (which some of us learned for the first time during this project). Group members that were more involved in our constant discussions were more likely to adhere to best practices that we set out. Strong communication was really our best suit and our process really helped to bring that forth. We hope to continue with our process (after ironing out the Git and dependency issues we had).

3. Refactoring some of our old code to meet code quality guidelines actually helped us in the long run. While our application is still relatively simple at this stage, we have created it in such a way that it can easily expand into something much bigger. If we were to introduce machine learning algorithms and new features such as security and user history, we would easily be able to do it. We already added various third-party libraries in this iteration including progress bar components, Chart.js version 2 and security modules for the back-end. We feel confident in this project and in our tech stack, going forward.

