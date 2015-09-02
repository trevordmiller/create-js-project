'use strict';

import path from 'path';
import {assert, test as helpers} from 'yeoman-generator';
import gitignoreMock from './mocks/gitignore.mock';
import packageJsonMock from './mocks/package-json.mock';
import readmeMdMock from './mocks/readme-md.mock';
import editorconfigMock from './mocks/editorconfig.mock';
import eslintrcMock from './mocks/eslintrc.mock';
import travisYmlMock from './mocks/travis-yml.mock';
import indexJsMock from './mocks/index-js.mock';
import indexTestJsMock from './mocks/index-test-js.mock';

describe('Package project type with default options', () => {

  before(function (done) {
    helpers.run(path.join(__dirname, '../../../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        projectType: 'npm-package-js',
        projectName: 'object-assign-polyfill',
        projectDescription: 'Object.assign() polyfill',
        authorInfo: 'Sarah Collings <sarahcollings@gmail.com> (www.sarahcollings.com)',
        githubUsername: 'sarahcollings',
        editorconfig: true,
        linting: true,
        testing: true,
        continuousIntegration: true
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

  describe('index.js', () => {

    it('creates an index.js', function () {
      assert.file(['src/index.js']);
    });

    it('should have the correct index.js contents', () => {
      assert.fileContent('src/index.js', indexJsMock);
    });
  });

  describe('index.test.js', () => {

    it('creates an index.test.js', function () {
      assert.file(['src/index.test.js']);
    });

    it('should have the correct index.test.js contents', () => {
      assert.fileContent('src/index.test.js', indexTestJsMock);
    });
  });
});
