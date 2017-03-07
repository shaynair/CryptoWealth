# CryptoWealth

## Iteration 2

 * Start date: February 22, 2017
 * End date: March 8, 2017
 
##Process

#### Roles & responsibilities

*Main roles are meant to give a clear and defined role to every member in the team. They are not the only roles that one would have.*

| Role | Responsibility | Member |
| --- | --- | --- |
| Front-end Master | Primarily responsible for creating the front-end of the project. | Ian |
| Back-end Master | Primarily works with the back-end (user profiling, routing, security, database management, middleware...) and is responsible for maintaining development branches associated with the back-end, including creating the sprint backlog and merging PRs | Sakshaat |
| Chief Data Analyst | Primarily works with the data analysis (parameterization, historical analysis, suggestion algorithms) and is responsible for maintaining development branches associated with the data analysis section, including creating the sprint backlog and merging PRs | Aaron |
| Technical Lead | Works with the entire stack, merging any outstanding PRs, helping to create high-level algorithms and keeping code standards and RESTful endpoints consistent | Akshay |
| Business/QA Lead | Helps to coordinate the team for sync meetings, ensures presentation quality of the product and of deliverables, and helps to create high-level algorithms through researching resources and APIs | Harold |

#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 1. Meeting on February 22, 2017 (Wednesday) at 8:00pm (In-person)
 2. Meeting at March 3, 2017 (Friday) at 6:30pm (In-person)
 3. Meeting at March 8, 2017 (Wednesday) at 7:45pm (In-person)

 * What's the purpose of each meeting?
The purpose of the first meeting 
To decide on tools / languages to use
Determine MVP to be completed by this iteration
To divide individual tasks for layer of our application
Decide on what needs to be done by next meeting.
Code review and status updates
Decide on what needs to be done by next meeting.
Code review and create demo video

 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.

[ZenHub Board] (https://i.gyazo.com/e5c466f2df8d4ca1a2571f51cae0cfb4.png)

 * We want to understand:
   * How do you keep track of what needs to get done?
ZenHub
   * How do you prioritize tasks?
Outlined an MVP, placing all required tasks on the ZenHub board
   * How do tasks get assigned to team members?
Each team member are in charge of a designated layer of our application.  That member is in charge of assigning tasks relating to their corresponding layer.

#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.

On GitHub, we plan to use forks and feature branches to maintain our development.

The `master` branch in the `csc301-winter-2017` version of the repository will serve as our base reference and submission branch. Changes meant for production will be pushed to this branch on a regular basis. We will push this branch to our production hosting environments manually whenever appropriate for presentation.

We will also maintain a `develop` branch on an ongoing basis on the `csc301-winter-2017` version of the repository. It will serve as reference for us, and will be the central repository to which pull requests from respective forks are accepted to. At the end of each sprint, if the `develop` branch is fully tested and ready for production, we will issue a pull request to `master` which will be merged.

After the `develop` branch, we will maintain individual forks. The reasoning for using forking (as opposed to branching further) is that we do not have administrative access to the central repository. By forking, we are able to use our respective forks with Continuous Integration and/or with automated hosting services. 

Individual `develop` branches will be used for our development hosting environments. Each individual will also create `feature` branches on an ongoing basis, which will be merged back to `develop`, which will then be used to create a pull request to our central repository's `develop` branch.

An explanation of this workflow can be found at the [Atlassian Gitflow Workflow page](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) or the [GitHub workflow page](https://guides.github.com/introduction/flow/).




## Product

#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

*As a user I can get started with cryptocurrency investing by completing a user-friendly and easy-to-understand questionnaire to determine how risk adverse I am
*As a user I will be able to see what my portfolio of cryptocurrencies look like in an easy-to-understand way

*Set up Django Server/Architecture
*Gather User Risk Data
*Import Crypto-currency data

*As a user I will see a landing page for the CryptoWealth website


#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

Code Architecture

[1st iteration](https://gyazo.com/2611c28f449791ab6b272e272d91a7d3)


[2nd iteration](https://gyazo.com/bf8b349da188f0a74bdb8cdb0e74df41)




Wireframes: to visually illustrate the layout and flow of our website and to give a general idea of the content on the page



 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

