import path from 'path';
import {assert, test as helpers} from 'yeoman-generator';
import allPrompts from '../../all-prompts';
import gitignoreMock from './mocks/gitignore.mock';
import packageJsonMock from './mocks/package-json.mock';
import readmeMdMock from './mocks/readme-md.mock';
import editorconfigMock from './mocks/editorconfig.mock';
import eslintrcMock from './mocks/eslintrc.mock';
import travisYmlMock from './mocks/travis-yml.mock';
import ExampleJsMock from './mocks/Example-js.mock';
import ExampleTestJsMock from './mocks/Example-test-js.mock';
import indexJsMock from './mocks/index-js.mock';
import webpackConfigJsMock from './mocks/webpack-config-js.mock';
import babelrcMock from './mocks/babelrc.mock';
import serverJsMock from './mocks/server-js.mock';
import indexHtmlMock from './mocks/index-html.mock';

describe('App project type with default options', () => {

  before(function (done) {
    allPrompts.projectType = 'react-web-app',
    helpers.run(path.join(__dirname, '../../../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts(allPrompts)
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

  describe('index.js', () => {

    it('creates an index.js', function () {
      assert.file(['src/index.js']);
    });

    it('should have the correct index.js contents', () => {
      assert.fileContent('src/index.js', indexJsMock);
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

  describe('.babelrc', () => {

    it('creates a .babelrc', function () {
      assert.file(['.babelrc']);
    });

    it('should have the correct .babelrc contents', () => {
      assert.fileContent('.babelrc', babelrcMock);
    });
  });

  describe('server.js', () => {

    it('creates a server.js', function () {
      assert.file(['server.js']);
    });

    it('should have the correct server.js contents', () => {
      assert.fileContent('server.js', serverJsMock);
    });
  });

  describe('index.html', () => {

    it('creates a index.html', function () {
      assert.file(['index.html']);
    });

    it('should have the correct index.html contents', () => {
      assert.fileContent('index.html', indexHtmlMock);
    });
  });
});
