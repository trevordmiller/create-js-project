![Nexus Logo](logo.png)

# generator-nexus [![Build Status](https://travis-ci.org/trevordmiller/generator-nexus.svg?branch=master)](https://travis-ci.org/trevordmiller/generator-nexus)

_Scaffold modern JS projects in seconds_

---

## About

_Nexus_ is a [Yeoman](http://yeoman.io) generator for scaffolding modern JS projects in seconds (like npm packages and React web apps). When you run _Nexus_, it will ask you a few questions about your project; then, based on your choices, it lays down cutting-edge best practices and boilerplate setup in seconds so that you can focus on the unique and fun parts of your project.

_Nexus_ has been built in a modular way so that as the industry moves to new technology choices, the generator options will be updated to match.

---

## Getting Started

1. `npm install -g generator-nexus`
1. `yo nexus` in an empty directory
1. Answer the prompts and wait for everything to be installed
1. `npm run dev`

---

## How it works

### Project Type

When you first run `yo nexus`, _Nexus_ asks you to pick your project type:

- JS module _(stand-alone npm package)_
- React component _(stand-alone npm package)_
- React web app

### General Info

Next, _Nexus_ ask for general info like your project name, project description, etc.

### Base

Then, _Nexus_ prepares a base set of files and folders which will be customized based on your choices:

- `src/`
  - Boilerplate code
- `dist/`
  - Public code, automatically built from `src/` directory code ^
- `.gitignore`
- `package.json`
- `README.md`

_(only added for React project types)_

- `webpack.config.js`

_(only added for React web app project types)_

- `.babelrc`
- `server.js`
- `index.html`

### General Extensions

After you select your project type and complete the general info questions, _Nexus_ asks if you want to extend the base setup with some general tools:

##### Editor formatting (EditorConfig)

- Adds an `.editorconfig` file to the root of your project

##### Linting (ESLint)

- Adds npm scripts for linting, specific to the project type you selected
- Adds recommended eslint rules for all JS projects
- Adds linting dependencies and configuration to your `package.json`
- Adds React/JSX specific linting rules, if you selected a React project type

##### Testing (Mocha)

- Adds npm scripts for testing, specific to the project type you selected
- Adds an example test file for the default code generated in `src`, based on the project type you select
- Adds testing dependencies and configuration to your `package.json`

##### Continuous Integration (Travis CI)

- Adds a `.travis.yml` file to the root of your project
- Adds a Travis CI badge to the top of your `README.md` based on your answers to the generator prompts

##### Continuous Deployment (Heroku) _(coming soon)_

_Required selections: Travis CI_

- Updates `.travis.yml` file with Heroku information

### React Extensions

If you selected a React project type, _Nexus_ asks if you want to extend the base React project setup with _React Extensions_:

##### Isomorphic rendering _(coming soon)_

- Sets up a Node server for rendering your React code on the server

##### Isomorphic routing _(coming soon)_

- Adds routing which can be used on both the server and client

##### Styling _(coming soon)_

- Adds some base style variables and theming using [React's inline styles](https://facebook.github.io/react/tips/inline-styles.html)

---

## Roadmap

- [ ] `v1.0.0` release
- [ ] General Extension: continuous deployment option (Heroku)
- [ ] React Extension: Flux option (Redux + Redux Dev Tools)
- [ ] React Extension: isomorphic rendering option (Node server)
- [ ] React Extension: isomorphic routing option (flatiron director)
- [ ] React Extension: styling option (React inline styles)
- [ ] After Node v4.0.0 is released, update `engine` in `package.json` to `4.0.0`, which will allow use of ES6 in `server.js` and `webpack.config.js`

---

## Contributing

Contributions are welcome!

1. Clone
1. `npm install`
1. `npm run dev`
1. Follow code style in project
1. Ensure test coverage for any changed functionality
1. Submit a pull request

---

## License

MIT
