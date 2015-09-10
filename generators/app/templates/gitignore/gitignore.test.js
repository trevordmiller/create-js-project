import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {jsModuleMock, reactWebAppMock} from './gitignore.mock';
const file = '.gitignore';

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
});
