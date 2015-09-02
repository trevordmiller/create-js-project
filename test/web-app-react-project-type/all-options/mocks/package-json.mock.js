export default
`{
  "name": "object-assign-polyfill",
  "version": "1.0.0",
  "description": "Object.assign() polyfill",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sarahcollings/object-assign-polyfill.git"
  },
  "author": "Sarah Collings <sarahcollings@gmail.com> (www.sarahcollings.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "dist/bundle.js",
  "scripts": {
    "lint": "eslint src webpack.config.js",
    "test": "mocha src/**/*.test.js --compilers js:babel/register",
    "test:watch": "npm test -- -w",
    "build": "webpack",
    "dev": "webpack-dev-server",
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
    "mocha": "2.x.x",
    "eslint": "1.x.x",
    "eslint-plugin-react": "3.x.x",
    "babel-core": "5.x.x",
    "babel-loader": "5.x.x",
    "react": "0.13.x",
    "react-hot-loader": "1.x.x",
    "file-loader": "0.8.x",
    "webpack": "1.x.x",
    "webpack-dev-server": "1.x.x",
    "babel": "5.x.x"
  }
}
`;
