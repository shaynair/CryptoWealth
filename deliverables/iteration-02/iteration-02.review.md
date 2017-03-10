# CryptoWealth

## Iteration 02 - Review & Retrospect

> When: Thursday, March 9, 2017, 6:30pm
 
> Where: In-person, Slack, GitHub

## Process - Reflection

Our team was able to agree on meeting times much easier after we co-ordinated our schedules from the previous iteration. We are able to conduct productive online meetings and complete tasks by internal deadlines. So far, we have also put our Monday evening tutorial time to good use as a weekly sync meeting involving discussions and quick task delegation. Our meetings have thus far been very productive. We have greatly improved on our process from the previous iteration.

#### Decisions that turned out well

1. We were able to decide on a workflow and become comfortable with it quite easily. ZenHub has an intuitive interface and is very customizable. We were able to quickly decide on the scope of this iteration and we easily delegated tasks according to interest once the tech stack was chosen. Akshay was responsible for setting up our repository and code on-boarding instructions. Akshay and Aaron were in charge of back-end code, while Ian, Harold, and Saakshaat were in charge of front-end. We agreed on collaborating on writing the script. ![ZenHub Board](https://i.gyazo.com/e5c466f2df8d4ca1a2571f51cae0cfb4.png)

2. We quickly redefined our GitHub workflow after seeing the [relevant post on Piazza about contributions](https://piazza.com/class/ixi2hcv294s25r?cid=242). Our original workflow would not have been able to have all contributions counted, but we redefined it into a simpler one that counted all of our group members' contributions. (There is one exception, where Ian's [Pull Request 44](https://github.com/csc301-winter-2017/project-team-10/pull/44) was squashed instead of rebased by accident, leading to contributions not being counted.)

3. We switched away from using Google Docs for completing deliverables and instead had certain group members work on it through our GitHub workflow (though instead pushing directly to `master` due to it not being code). This allowed for writing more seamlessly as we could use proper Markdown editors.

4. Our project scope was kept small and it allowed us to focus on what was important, with guidance from the TA. We kept any outstanding issues we thought of in the "Icebox" on our ZenHub Board above. These would be issues that we would get to in a future iteration, but do not need to worry about for this one.

#### Decisions that did not turn out as well as we hoped

1. As we have a group member on work term and some group members unavailable on weekends, all of our in-person meetings have been at night time on weekdays. Furthermore, some of these meetings took an extended amount of time (one took 3 hours, and another took 6 in total) which made it difficult for our group members who are commuters or had other commitments. We must try to either break up our meetings into multiple ones, or try to avoid meeting so late at night.

2. As seen in our Burndown chart, most of our work was done late in the iteration. This is primarily due to pressure from the deadline, and secondarily due to it taking so long to set-up the project at all. As also seen in our GitHub contribution graphs, we had a dip in the amount of commits between the end of the first iteration and the set-up of the project. This led to somewhat rushed code as not all of it conforms to best practices. The Burndown chart is seen here: ![Burndown](https://puu.sh/uCZ6w/9ea0474661.png)

#### Planned changes

1. As a lot of ideas and thought processes were exchanged during our in-person planning meetings, we tend to get quite involved in the verbal discussions, often forgetting to write down the ideas that were mentioned and analyzed. Due to this, during the meetings we sometimes had to spend time on backtracking our thought processes. For example, we had to reiterate why we decided to use Django over Node.js. Next time, we should have a dedicated team member taking meeting minutes so that valuable meeting insights are not lost or forgotten, but rather documented for our own reference as well as an artifact.

2. We found ourselves most productive when physically working together in-person: we get the most tasks done while ensuring that we’re on the same page. We also bounce ideas off one another and make sure we’re not missing anything in our code or deliverables. Next time, we should consider getting together on a weekend earlier during the day (when we’re still awake and not tired down by lectures) to work together on code and other deliverables. Another advantage of working on weekends is that we are less bound by time constraints, e.g. we don’t have to worry about commuting home too late.

3. We should try having more weekly sync meetings to discuss code review and any questions or concerns we may have. We did have one in this iteration, but it was far too short and we had to go through the main structure and concepts near the deadline. Perhaps we can go over our GitHub history of commits every week to make sure that everyone is on track with their work.

4. We hope to make our commit history neater by rebasing more often, instead of committing code and merging pull requests directly. We just discovered "rebasing and merging" pull requests as we worked with pull requests this iteration, and we hope to use this feature more in the future. Our current commit history (for the main repository) is often unclear or contains messages meant more for personal use. Rebasing commits will allow us to have a clearer idea of what exactly we are pushing to the repository, as well.

## Product - Review

#### Goals and/or tasks that were met/completed:

1. We decided on a tech stack to use. We decided to go with Django (Python 3.x) for the back-end and React for the front-end. We considered the pros and cons of using various back-end frameworks such as Node.js (which more of us were familiar with) but Django proved to be less verbose and more appropriate to what we needed to do. Furthermore, Python is a language that all of the group members are comfortable with. We also decided to use React to structure our project in a consistent manner, and some of us were also more familiar with React than any other front-end framework. To really get comfortable with our stack, we created diagrams which everyone could understand: ![here](https://i.gyazo.com/bf8b349da188f0a74bdb8cdb0e74df41.png)

2. We set up the codebase and our entire repository structure. We used [Django React+Redux](https://github.com/Seedstars/django-react-redux-base), an open-source template repository of starter code. We thought it was perfect for our project as it uses Django and React in an efficient way, and has some code done already (such as a login system). It is structured well, and is extensible.

3. _As a user I can get started with cryptocurrency investing by completing a user-friendly questionnaire to determine how risk adverse I am._ Using React, we created an extensible questionnaire and mapped responses to risk values.

4. _As a user I will be able to see what my portfolio of cryptocurrencies look like in an easy-to-understand way._ We sent the user's risk value to the back-end, where a simple algorithm (for now) generated a portfolio of cryptocurrencies. Prices for cryptocurrencies were imported from the Coinbase Python API. We also created a [mockup](portfolioAllocations.html) of charts that we plan to use later. Our video script and link can also be seen in the [video document](iteration-02.video.md).

#### Goals and/or tasks that were planned but not met/completed:

1. We should look into whether analyzing the crypto-currency market has been attempted by any other open source projects or public blogs or articles as well, to isolate a potential working algorithm for portfolio generation. This was not a priority for this iteration as we do not need a sophisticated algorithm to demonstrate our concept. For this iteration, we used hardcoded coefficients in the back-end to generate a rough portfolio instead, for the purposes of the video. While we do retrieve current prices from an API, we do not look at historical data quite yet.

## Meeting Highlights

Going into the next iteration, our main insights are:

1. We should definitely start earlier in the next iteration. We took a few shortcuts in the code for this iteration as we did not spend too much time styling or implementing all of the features from our mockups. If we start earlier, we will be able to complete tasks in a digestible manner and tackle issues as they arise. We could also tackle styling issues throughout the project to make it more presentable this way.

2. It took a while for all of us to get used to our GitHub workflow. Due to this, early in the iteration there are many direct pushes and few branches. Only after our review meeting were we able to sync everyone to using branches and pull requests properly for code. For our next iteration, we hope to be more faithful to our defined workflow. While our entire workflow is documented well in multiple documents (including our README), it takes practice for everyone to get used to it.

3. We should start refactoring our old code to meet code quality guidelines. If we're able to sort this out now, we will run into fewer issues later if we ever become tight on time again. As more of our group members are now comfortable with React especially, we hope to use it to its full potential.

4. We should start modifying the data analysis algorithm required to come up with profitable portfolios for potential clients, by perhaps looking into existing algorithms or historical data analysis (which we have not done yet).