import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {jsModuleMock, jsModuleLintingMock, jsModuleTestingMock, reactWebAppMock, reactWebAppLintingMock, reactWebAppTestingMock} from './package.mock';
const file = 'package.json';

describe(file, () => {

  describe('Prompt values: js-module', () => {

    runTestGenerator({
      projectType: 'js-module'
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, jsModuleMock);
    });
  });

  describe('Prompt values: js-module, linting', () => {

    runTestGenerator({
      projectType: 'js-module',
      generalExtensions: [
        'linting'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, jsModuleLintingMock);
    });
  });

  describe('Prompt values: js-module, testing', () => {

    runTestGenerator({
      projectType: 'js-module',
      generalExtensions: [
        'testing'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, jsModuleTestingMock);
    });
  });

  describe('Prompt values: react-web-app', () => {

    runTestGenerator({
      projectType: 'react-web-app'
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppMock);
    });
  });

  describe('Prompt values: react-web-app, linting', () => {

    runTestGenerator({
      projectType: 'react-web-app',
      generalExtensions: [
        'linting'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppLintingMock);
    });
  });

  describe('Prompt values: react-web-app, testing', () => {

    runTestGenerator({
      projectType: 'react-web-app',
      generalExtensions: [
        'testing'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppTestingMock);
    });
  });
});
