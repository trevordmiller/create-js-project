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
  "main": "dist/index.js",
  "scripts": {
    "lint": "eslint src",
    "test": "mocha src/**/*.test.js --compilers js:babel/register",
    "test:watch": "npm test -- -w",
    "build": "babel src/index.js -o dist/index.js -s",
    "build:watch": "npm run build -- -w",
    "dev": "npm-run-all -p test:watch build:watch"
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
    "babel": "5.x.x"
  }
}
`;
