import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {jsModuleMock, jsModuleTestingMock, jsModuleContinuousIntegrationMock, reactWebAppMock, reactWebAppTestingMock, reactWebAppContinuousIntegrationMock} from './readme.mock';
const file = 'README.md';

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

  describe('Prompt values: js-module, continuousIntegration', () => {

    runTestGenerator({
      projectType: 'js-module',
      generalExtensions: [
        'continuousIntegration'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, jsModuleContinuousIntegrationMock);
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

  describe('Prompt values: react-web-app, continuousIntegration', () => {

    runTestGenerator({
      projectType: 'react-web-app',
      generalExtensions: [
        'continuousIntegration'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppContinuousIntegrationMock);
    });
  });
});
