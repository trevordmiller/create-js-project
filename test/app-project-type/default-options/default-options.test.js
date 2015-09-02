'use strict';

import path from 'path';
import {assert, test as helpers} from 'yeoman-generator';
import gitignoreMock from './mocks/gitignore.mock';
import packageJsonMock from './mocks/package-json.mock';
import readmeMdMock from './mocks/readme-md.mock';
import editorconfigMock from './mocks/editorconfig.mock';
import eslintrcMock from './mocks/eslintrc.mock';
import travisYmlMock from './mocks/travis-yml.mock';
import ExampleJsMock from './mocks/Example-js.mock';
import ExampleTestJsMock from './mocks/Example-test-js.mock';
import MainJsMock from './mocks/Main-js.mock';
import webpackConfigJsMock from './mocks/webpack-config-js.mock';
import indexHtmlMock from './mocks/index-html.mock';

describe('App project type with default options', () => {

  before(function (done) {
    helpers.run(path.join(__dirname, '../../../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        projectType: 'app',
        projectName: 'object-assign-polyfill',
        projectDescription: 'Object.assign() polyfill',
        authorInfo: 'Sarah Collings <sarahcollings@gmail.com> (www.sarahcollings.com)',
        githubUsername: 'sarahcollings',
        githubRepo: 'object-assign-polyfill'
        // default options for everything else
      })
      .on('end', done);
  });

  describe('.gitignore', () => {

    it('creates a .gitignore', function () {
      assert.file(['.gitignore']);
    });

    it('should have the correct .gitignore contents', () => {
      assert.fileContent('.gitignore', gitignoreMock);
    });
  });

  describe('package.json', () => {

    it('creates a package.json', function () {
      assert.file(['package.json']);
    });

    it('should have the correct package.json contents', () => {
      assert.fileContent('package.json', packageJsonMock);
    });
  });

  describe('README.md', () => {

    it('creates a README.md', function () {
      assert.file(['README.md']);
    });

    it('should have the correct README.md contents', () => {
      assert.fileContent('README.md', readmeMdMock);
    });
  });

  describe('.editorconfig', () => {

    it('creates an .editorconfig', function () {
      assert.file(['.editorconfig']);
    });

    it('should have the correct .editorconfig contents', () => {
      assert.fileContent('.editorconfig', editorconfigMock);
    });
  });

  describe('.eslintrc', () => {

    it('creates an .eslintrc', function () {
      assert.file(['.eslintrc']);
    });

    it('should have the correct .eslintrc contents', () => {
      assert.fileContent('.eslintrc', eslintrcMock);
    });
  });

  describe('.travis.yml', () => {

    it('creates a .travis.yml', function () {
      assert.file(['.travis.yml']);
    });

    it('should have the correct .travis.yml contents', () => {
      assert.fileContent('.travis.yml', travisYmlMock);
    });
  });

  describe('Example.js', () => {

    it('creates an Example.js', function () {
      assert.file(['src/components/Example/Example.js']);
    });

    it('should have the correct Example.js contents', () => {
      assert.fileContent('src/components/Example/Example.js', ExampleJsMock);
    });
  });

  describe('Example.test.js', () => {

    it('creates an Example.test.js', function () {
      assert.file(['src/components/Example/Example.test.js']);
    });

    it('should have the correct Example.test.js contents', () => {
      assert.fileContent('src/components/Example/Example.test.js', ExampleTestJsMock);
    });
  });

  describe('Main.js', () => {

    it('creates an Main.js', function () {
      assert.file(['src/Main.js']);
    });

    it('should have the correct Main.js contents', () => {
      assert.fileContent('src/Main.js', MainJsMock);
    });
  });

  describe('webpack.config.js', () => {

    it('creates a webpack.config.js', function () {
      assert.file(['webpack.config.js']);
    });

    it('should have the correct webpack.config.js contents', () => {
      assert.fileContent('webpack.config.js', webpackConfigJsMock);
    });
  });

  describe('index.html', () => {

    it('creates a index.html', function () {
      assert.file(['src/index.html']);
    });

    it('should have the correct index.html contents', () => {
      assert.fileContent('src/index.html', indexHtmlMock);
    });
  });
});
