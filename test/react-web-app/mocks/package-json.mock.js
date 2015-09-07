export default
`{
  "name": "object-assign-polyfill",
  "version": "1.0.0",
  "description": "Object.assign() polyfill",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/object-assign-polyfill.git"
  },
  "author": "First Last <email@somewhere.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "server.js",
  "scripts": {
    "lint": "eslint src webpack.config.js server.js",
    "test": "mocha src/**/*.test.js --compilers js:babel/register",
    "test:watch": "npm test -- -w",
    "build": "webpack",
    "build:watch": "node server.js"
    "start": "node server.js",
    "dev": "npm-run-all -p test:watch build:watch",
    "prepublish": "npm build"
  },
  "pre-commit": [
    "lint",
    "test"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "pre-commit": "1.x.x",
    "npm-run-all": "^1.x.x",
    "mocha": "2.x.x",
    "eslint": "1.x.x",
    "eslint-plugin-react": "3.x.x",
    "babel-core": "5.x.x",
    "babel-loader": "^5.1.2",
    "express": "^4.13.3",
    "babel-plugin-react-transform": "1.0.1",
    "react-transform-catch-errors": "0.1.1",
    "react-transform-webpack-hmr": "0.1.2",
    "delicate-error-reporter": "0.0.4",
    "webpack": "1.9.6",
    "webpack-dev-middleware": "1.2.0",
    "webpack-hot-middleware": "2.0.0",
    "babel": "5.x.x"
  }
}
`;
