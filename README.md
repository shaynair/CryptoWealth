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

### Dependencies

* [Python 3.5](https://www.python.org/downloads/) or higher

* [Node 6.x](https://nodejs.org/en/download/current/) or higher

* [PostgreSQL 9.4](https://www.postgresql.org/download/) or higher (on Mac, follow [these instructions](https://launchschool.com/blog/how-to-install-postgresql-on-a-mac) instead)

### Instructions

* Clone the repository and change directory to it.

* Set up Python virtual environment. **Also make sure that your working directory has no spaces in it.**

```bash
python3 -m pip install virtualenv
python3 -m virtualenv env
```

## How to run

### Running on your own environment

**At all times, make sure you are in Python virtual environment: (Linux/Mac) `source env/bin/activate` (Windows) `env\Scripts\activate`**

**Do the following only once:**

* Install back-end dependencies: `python3 -m pip install -r py-requirements/dev.txt`

* Set up front-end dependencies: `npm run global-install && npm install`

* Set up database: (Mac/Linux: do `createdb -h localhost && ./init-user-db.sh`, Windows: do the steps in `init-user-db.sh` manually)

**To run, you need two terminals.**

1. `npm run dev`

2. `./run-django.sh`

Server will be visible, by default, on [port 8000 on localhost](http://localhost:8000). It will auto-refresh whenever you change a relevant file.

### Accessing the database

The database can be accessed @localhost:5433

* `psql -h localhost -p 5433 -U crypto crypto_dev`

## Contributing

### Analysis

To make sure the code respects all coding guidelines you should run the static analysis before pushing any code.

Frontend (javascript analysis): `npm run lint`

Backend (django/python analysis): `npm run analyze`

### Adding libraries

You must add to `base-requirements.txt` whenever adding a new Python package.

You must run `npm i --save <package>` whenever you add a new NPM package.

### Git Respository Best Practices

_(Note: These are necessary due to quirks of [contribution graphs](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/))_

* Always work in your own fork of the repository.

* Create a different branch for the issue you are working on off your master branch like `git checkout -b feature-name`.

* Whenever you begin work, be sure to `git pull --rebase upstream master`.

* When you have completed, `git push origin feature-name` and issue a PR to the **`master` branch on the central repository**. (If you issue a PR to another branch, your contributions may not be counted!)

* In case you have a PR pending on this branch, `checkout` to your local `master` branch, `checkout` another `feature` branch and work there.

## Directory Structure

```
.
├── package.json                                     <- Package info for NPM. Contains front-end libraries (JS/JSX) and convenient scripts.
├── .babelrc, .bootstraprc, .eslintrc, .gitignore    <- Configuration settings for Babel (JS/ES6 transpiler), Bootstrap (front-end library), ESLint (JS code analyzer) and Git respectively
├── .prospector.yml, .sass-lint.yml, .travis.yml     <- Configuration settings for Prospector (Python code analyzer), SASS Lint (CSS/SASS analyzer) and Travis CI (automated test runner) respectively
├── Procfile, runtime.txt                            <- Configuration settings for Heroku (hosting platform)
├── base-requirements.txt                            <- Base environment packages for Python (Django back-end).
├── dev-requirements.txt                             <- Development environment packages for Python (Django back-end).
├── requirements.txt                                 <- Production environment packages for Python (Django back-end).
├── init-user-db.sh                                  <- Initialization script for PostgreSQL.
├── run-django.sh                                    <- Shell script to run Django back-end.
├── webpack
│   ├── dev.config.js                                <- Development configuration for Webpack (bundles and pre-processes front-end files).
│   └── prod.config.js                               <- Production configuration for Webpack.
└── src
    ├── manage.py                                    <- Runs important Django commands such as setting up database and running server.
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