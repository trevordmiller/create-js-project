![Generator Nexus Logo](nexus-logo.png)

# generator-nexus [![Build Status](https://secure.travis-ci.org/trevordmiller/generator-nexus.png?branch=master)](https://travis-ci.org/trevordmiller/generator-nexus)

_A generator for scaffolding modern JS projects_

_Nexus_ is a [Yeoman](http://yeoman.io) generator for scaffolding modern JS projects. This includes everything from a simple vanilla JS npm package to a complex React web app with linting, testing, continuous integration and other options. Although each project is different, a lot of tooling overlaps, so _Nexus_ has a consistent _Core_ which can be customized and extended by your choices to the generator prompts. After you make your choices, _Nexus_ lays down cutting-edge best practices and boilerplate setup in seconds so that you can focus on the unique parts of your project.

_Nexus_ has been built in a modular way so that as the industry moves to new technology choices, the generator options will be updated to match.

---

## Getting Started

1. `npm install -g generator-nexus`
1. `yo nexus` in an empty directory
1. Answer the prompts and wait for everything to be installed
1. `npm run dev`

---

## How it works

### Core

When a project is generated with _Nexus_, it automatically gets the _Core_ set of of files and folders, which are customized based on your answers to the generator prompts:

- `src/`
  - Boilerplate code wire up
- `dist/`
  - Public code _(automatically built from `src/` directory)_
- `.gitignore`
- `package.json`
- `README.md`

### Optional

When you run _Nexus_, it will prompt you with other options that you can extend the _Core_ with, if you want:

##### Editor config (EditorConfig)

- Adds an `.editorconfig` file to the root of your project

##### Linting config (ESLint)

- Adds npm scripts for linting, specific to the project type you select
- Adds recommended eslint rules for all JS projects
- Adds React/JSX specific linting rules if React project type is selected
- Adds linting dependencies and configuration to your `package.json`

##### Testing config (Mocha)

- Adds npm scripts for testing, specific to the project type you select
- Adds an example test file for the default code generated, based on the project type you select
- Adds testing dependencies and configuration to your `package.json`

##### Continuous Integration config (Travis CI)

- Adds a `.travis.yml` file to the root of your project
- Adds a Travis CI badge to the top of your `README.md` based on your answers to the generator prompts

##### React bundling and hot reloading (Webpack) _(only added when choosing web app (React) project type)_

- Adds a `webpack.config.js` file to the root of your project
- Adds Webpack dependencies and configuration to your `package.json`

---

### Roadmap

- [x] `v1.0.0` release
- [ ] Add isomorphic React rendering option _(when `app` option is selected, so that apps can be run for real, not just with `webpack-dev-server`)_
- [ ] Add isomorphic routing option (flatiron director or react router?) _(when `app` option is selected)_
- [ ] Add continuous deployment option (Heroku) _(when `app` and `travis ci` options are selected)_
- [ ] Add styling reset/theme option (React inline styles) _(when `app` option is selected)_
- [ ] When Node v4.0.0 is released, update `engine` in `package.json` to `4.0.0`, which will allow use of ES6 in `webpack.config.js`

---

### Contributing

Contributions are welcome!

1. Clone
1. `npm install`
1. `npm run dev`
1. Follow code style in project
1. Ensure test coverage for any changed functionality
1. Submit a pull request

---

### License

MIT
