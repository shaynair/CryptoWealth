[![Build Status](https://travis-ci.org/csc301-winter-2017/project-team-10.svg?branch=master)](https://travis-ci.org/csc301-winter-2017/project-team-10)

# CryptoWealth

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [How to run](#how-to-run)
- [Contributing](#contributing)
- [Directory Structure](#directory-structure)
- [Further reading](#further-reading)


## Setup

### Main Project

**Note** that this project requires [Python 3.5](https://www.python.org/downloads/) or higher, [Node 6.x](https://nodejs.org/en/download/current/) or higher, [PostgreSQL](https://www.postgresql.org/download/), [Docker](https://www.docker.com/products/overview) and [Docker Compose](https://docs.docker.com/compose/install/).

__(On Windows you will also need Visual Studio 2015 with C++ or higher, and Visual C++ Redistributables from Microsoft)__

* Clone the repository and change directory to it.

* Set up Python virtual environment. **Also make sure that your working directory has no spaces in it.**

```bash
py -3 -m pip install virtualenv
virtualenv env
source env/bin/activate  # On Windows use env\Scripts\activate
py -3 -m pip install -r py-requirements/dev.txt
```

* Set up Django migrations.

```bash
py -3 src/manage.py makemigrations
py -3 src/manage.py migrate
```

* Set up front-end dependencies: `npm install`

* Set up Docker: `docker-compose build`


## How to run

First, make sure you are in Python virtual environment: `source env/bin/activate  # On Windows use env\Scripts\activate`

### Using Docker

Run Docker development server

* `$ docker-compose up`

You can access shell in a container

* `$ docker ps  # get the name from the list of running containers`
* `$ docker exec -i -t <CONTAINER_NAME_OR_ID> /bin/bash`

### Accessing the database

The database can be accessed @localhost:5433

* `$ psql -h localhost -p 5433 -U crypto crypto_dev`


## Contributing

### Testing

To make sure the code respects all coding guidelines you should run the static analysis before pushing any code.

Frontend (javascript analysis)

* `$ npm run lint`

Backend (django/python analysis)

* `$ npm run analyze`

### Adding libraries

You must run `python src/manage.py migrate` whenever you make or edit a Django model.

You must add to `py-requirements` whenever adding a new Python package.

You must run `npm i --save <package>` whenever you add a new NPM package.

### Git Respository Best Practices

* Create a different branch for the issue you are working on off your master branch like `git checkout -b feature-name`.

* Whenever you begin work, be sure to `git pull --rebase upstream master`.

* When you have completed, `git push origin feature-name` and issue a PR to the repository.

* In case you have a PR pending on this branch, `checkout` to your local `master` branch, `checkout` another `feature` branch and work there. Needless to say, `git pull --rebase upstream master` is always important.

## Directory Structure

```
.
├── package.json                                     <- Package info for NPM. Contains front-end libraries (JS/JSX) and convenient scripts.
├── .babelrc, .bootstraprc, .eslintrc                <- Configuration settings for Babel (JS/ES6 transpiler), Bootstrap (front-end library) and ESLint (JS code analyzer) respectively
├── .prospector.yml, .sass-lint.yml, .travis.yml     <- Configuration settings for Prospector (Python code analyzer), SASS Lint (CSS/SASS analyzer) and Travis CI (automated test runner) respectively
├── docker-compose.yml, docker.common.yml            <- Configuration settings for Docker (hosting platform)
├── docker                                           <- Contains scripts for Docker to set up the project automatically.
├── py-requirements
│   ├── dev.txt                                      <- Development environment packages for Python (Django back-end).
│   └── prod.txt                                     <- Production environment packages for Python (Django back-end).
├── webpack
│   ├── dev.config.js                                <- Development configuration for Webpack (bundles and pre-processes front-end files).
│   └── prod.config.js                               <- Production configuration for Webpack.
└── src
    ├── manage.py                                    <- Runs important Django commands such as setting up database and running server.
    ├── fixtures.json                                <- Database constants for testing.
    ├── crypto                                       <- Main project folder for back-end.
    │   ├── urls.py                                  <- **All routes performed from the back-end**
    │   ├── wsgi.py                                  <- Initialization script.
    │   ├── utils.py                                 <- Helpful classes and methods.
    │   └── settings                                 <- **Settings and libraries used by the back-end**
    ├── base                                         <- Example of how to extend the back-end API.
    ├── accounts                                     <- An example of how to implement a feature. This organizes all code in the back-end related to accounts and authentication.
    │   ├── models.py                                <- Models for accounts. All the fields here will be inserted as-is into the database. Methods for models can also be defined.
    │   ├── serializers.py                           <- Connects the view to the model by serializing or formatting any data.
    │   ├── urls.py                                  <- Routes related to accounts API.
    │   └── views.py                                 <- Viewset for the accounts. Note that actually these don't need to be graphic templates per se, but rather just what happens when you navigate to a route.
    └── static                                       <- **Front-end files**
```

## Further reading

### Frontend

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/ReactTraining/react-router) Declarative routing for React
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin)
* [Redux](https://github.com/reactjs/redux) Predictable state container for JavaScript apps 
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) DevTools for Redux with hot reloading, action replay, and customizable UI. Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) Thunk middleware for Redux - used in async actions
* [React Router Redux](https://github.com/reactjs/react-router-redux) Ruthlessly simple bindings to keep react-router and redux in sync
* [tcomb form](https://github.com/gcanti/tcomb-form) Forms library for react
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize FontAwesome
* [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) to customize Bootstrap
* [ESLint](http://eslint.org), [Airbnb Javascript/React Styleguide](https://github.com/airbnb/javascript), [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css) to maintain a consistent code style and [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) to make sure all imports are correct

### Backend

* [Django](https://www.djangoproject.com/)
* [Django REST framework](http://www.django-rest-framework.org/) Django REST framework is a powerful and flexible toolkit for building Web APIs
* [Django REST Knox](https://github.com/James1345/django-rest-knox) Token based authentication for API endpoints
* [WhiteNoise](http://whitenoise.evans.io/en/latest/django.html) to serve files efficiently from Django
* [Prospector](http://prospector.landscape.io/en/master/) a complete Python static analysis tool
* [Bandit](https://github.com/openstack/bandit) a security linter from OpenStack Security