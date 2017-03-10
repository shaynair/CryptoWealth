# CryptoWealth

## Iteration 2

>Start date: February 22, 2017
>End date: March 9, 2017
 
## Process

This iteration begins our actual work on the project. We will follow our GitHub workflow defined in our first iteration.

#### Roles & responsibilities

| Role | Responsibility | Member |
| --- | --- | --- |
| Front-end Engineer | Ensures front-end is kept consistent and structurally sound, merging related PRs | Ian |
| Front-end Analyst | Creates any miscellaneous pages required for the front-end | Harold |
| Scrum Master | Helps to coordinate the team for sync meetings by finding available space and working with everyone's schedules | Harold |
| Designer | Creates a colour scheme, logo and overall look and feel of the project | Sakshaat |
| Data Analyst | Works with the data analysis back-end and helps to route data to the front-end, merging related PRs | Aaron |
| Technical/QA Lead | Sets up the project, sets up deployment, documents the directory structure, merges any outstanding PRs and ensures presentation quality | Akshay |

#### Events

Due to our poor experience with online meetings in the last iteration, we will strive to meet in-person for this iteration's meetings despite team members' schedules. As before, there will be a minimum of one meeting per week, and these meetings will be used to work on high-level ideas, discuss key team and workflow details and give general updates on progress.

The first meeting is our in-person planning meeting at UofT, on February 22, 2017 at 8:00 pm. Here, we will decide on our tech stack, and determine our goals for this iteration. We will also divide tasks between group members.

The second meeting will be on Friday, March 3, 2017 and it will be an in-person meeting at UofT. This will be a sync meeting as we discuss our progress and what our next steps are. We will also have the project set up by then, and we will discuss any issues we have with the codebase.

The third meeting will be on March 9, 2017 and it will be an in-person meeting. This will be our review meeting as we meet to finalize the video and finish our iteration goals. We will also use this time to do a sync meeting as we perform code review.

#### Artifacts

We plan to create documents which will be pushed to the GitHub repository, including a workflow document and deliverables.

 * A markdown document documenting our project, set-up and best practices for Git.
 * A task board on ZenHub: ![ZenHub Board](https://i.gyazo.com/e5c466f2df8d4ca1a2571f51cae0cfb4.png)
 * GitHub pull requests, issues and Burndown graphs detailing each group member's work over time.

We will be assigning tasks based off of our workflow document and off of the technologies each group member is most comfortable with. We will assign all tasks from the start of the iteration as we will not likely have many fatal issues that come up later in development as we keep our iteration relatively small. All tasks will be kept track of on ZenHub and will be put on a flow similar to Kanban; we will treat the entire iteration as a sprint and will keep track of issues as they move from "To do" to "In progress" to "Review/QA". Lastly, tasks will be prioritized in logical order. That is, we will emphasize setting up the Git repository first, then our basic application flow, and then aesthetic details.

#### Git / GitHub workflow

On GitHub, we plan to use forks and feature branches to maintain our development.

The `master` branch in the `csc301-winter-2017` version of the repository will serve as our base reference and submission branch. Changes meant for testing or production will be pushed to this branch on a regular basis. We will push this branch to our production hosting environments manually whenever appropriate for presentation. We choose to use `master` for most of our commits as this is required for our GitHub contributions to count, as [noted here](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/).

After the `master` branch, we will maintain individual forks. The reasoning for using forking (as opposed to branching further) is that we do not have administrative access to the central repository. By forking, we are able to use our respective forks with Continuous Integration and/or with automated hosting services. 

Each individual will also create `feature` branches on an ongoing basis, which will be merged back to `master` eventually, which will then be used to create a pull request to our central repository's `master` branch. These `feature` branches are meant to share code between team members and are only meant for development.

An explanation of this workflow can be found at the [Atlassian Gitflow Workflow page](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) or the [GitHub workflow page](https://guides.github.com/introduction/flow/).

## Product

#### Goals and tasks

1. Decide on a tech stack to use. We should consider the pros and cons of various languages and frameworks while also weighing in on which team members are proficient in each of these languages and frameworks, respectively. Deciding on a tech stack as soon as possible will allow us to start development sooner. We will look at similar projects and see what technologies were used in those projects, and we will have a planning meeting where we will survey each group member as to his proficiencies.

2. Set up the codebase and our entire repository structure. We will research promising templates and generators for our project, and adapt our project to one of these. Using one of these 'starter packs' will lead to a faster development time and less trial-and-error as we will be using a tried and tested solution. This is a priority as we will be using this for our development primarily.

3. _As a user I can get started with cryptocurrency investing by completing a user-friendly questionnaire to determine how risk adverse I am._ This will entail creating questions to display to the user on the front-end and mapping responses to a higher or lower relative risk value. 

4. _As a user I will be able to see what my portfolio of cryptocurrencies look like in an easy-to-understand way._ This will entail gathering the user risk data from the front-end and inputting it into an algorithm on the back-end, and giving back a response with the cryptocurrency data. This will also entail creating charts and graphs on the front-end to display this data. We will have to import cryptocurrency data from external APIs.

5. We should look into whether analyzing the crypto-currency market has been attempted by any other open source projects or public blogs or articles as well, to isolate a potential working algorithm for portfolio generation. This is not a priority for this iteration as we do not need a sophisticated algorithm to demonstrate our concept.

#### Artifacts

 * Pictures and schematic diagrams of our application flow. This will show the application's inner workings in relation to our basic features, i.e. we will show what happens when the user performs certain actions. It can be seen ![here](https://i.gyazo.com/bf8b349da188f0a74bdb8cdb0e74df41.png).

 * A script of our video. We will introduce our idea and present it in a short, digestible manner.

 * A portfolio generation mockup using basic jQuery, HTML and CSS.

