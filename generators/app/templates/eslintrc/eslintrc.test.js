import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {jsModuleLintingMock, reactWebAppLintingMock} from './eslintrc.mock';
const file = '.eslintrc';

describe(file, () => {

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
});
