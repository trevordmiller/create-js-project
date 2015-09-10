export const jsModuleMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "dist/index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js -s",
    "build:watch": "npm run build -- -w",
    "dev": "npm run build:watch",
    "prepublish": "npm run build"
  },
  "dependencies": {
  },
  "devDependencies": {
    "babel": "5.x.x"
  }
}
`;

export const jsModuleLintingMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "dist/index.js",
  "scripts": {
    "lint": "eslint .",
    "build": "babel src/index.js -o dist/index.js -s",
    "build:watch": "npm run build -- -w",
    "dev": "npm run build:watch",
    "prepublish": "npm run lint && npm run build"
  },
  "pre-commit": [
    "lint"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "pre-commit": "1.x.x",
    "eslint": "1.x.x",
    "babel": "5.x.x"
  }
}
`;

export const jsModuleTestingMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "dist/index.js",
  "scripts": {
    "test": "mocha ./src/**/*.test.js --compilers js:babel/register",
    "test:watch": "npm test -- -w",
    "build": "babel src/index.js -o dist/index.js -s",
    "build:watch": "npm run build -- -w",
    "dev": "npm-run-all -p test:watch build:watch",
    "prepublish": "npm run test && npm run build"
  },
  "pre-commit": [
    "test"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "pre-commit": "1.x.x",
    "npm-run-all": "1.x.x",
    "mocha": "2.x.x",
    "babel": "5.x.x"
  }
}
`;

export const reactWebAppMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "server.js",
  "scripts": {
    "build": "webpack",
    "build:watch": "node server.js",
    "start": "node server.js",
    "dev": "npm run build:watch",
    "prepublish": "npm run build"
  },
  "dependencies": {
  },
  "devDependencies": {
    "babel-core": "5.x.x",
    "babel-loader": "5.1.2",
    "express": "4.13.3",
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

export const reactWebAppLintingMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "server.js",
  "scripts": {
    "lint": "eslint .",
    "build": "webpack",
    "build:watch": "node server.js",
    "start": "node server.js",
    "dev": "npm run build:watch",
    "prepublish": "npm run lint && npm run build"
  },
  "pre-commit": [
    "lint"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "pre-commit": "1.x.x",
    "eslint": "1.x.x",
    "eslint-plugin-react": "3.x.x",
    "babel-core": "5.x.x",
    "babel-loader": "5.1.2",
    "express": "4.13.3",
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

export const reactWebAppTestingMock =
`{
  "name": "project-name",
  "version": "1.0.0",
  "description": "About the project",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/githubusername/project-name.git"
  },
  "author": "First Last <email@wherever.com> (www.website.com)",
  "license": "MIT",
  "keywords": [
  ],
  "main": "server.js",
  "scripts": {
    "test": "mocha ./src/**/*.test.js --compilers js:babel/register",
    "test:watch": "npm test -- -w",
    "build": "webpack",
    "build:watch": "node server.js",
    "start": "node server.js",
    "dev": "npm-run-all -p test:watch build:watch",
    "prepublish": "npm run test && npm run build"
  },
  "pre-commit": [
    "test"
  ],
  "dependencies": {
  },
  "devDependencies": {
    "pre-commit": "1.x.x",
    "npm-run-all": "1.x.x",
    "mocha": "2.x.x",
    "babel-core": "5.x.x",
    "babel-loader": "5.1.2",
    "express": "4.13.3",
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
