import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {continuousIntegrationLintingMock, continuousIntegrationTestingMock, continuousIntegrationContinuousDeploymentMock} from './travis.mock';
const file = '.travis.yml';

describe(file, () => {

  describe('Prompt values: continuousIntegration, linting', () => {

    runTestGenerator({
      generalExtensions: [
        'continuousIntegration',
        'linting'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, continuousIntegrationLintingMock);
    });
  });

  describe('Prompt values: continuousIntegration, testing', () => {

    runTestGenerator({
      generalExtensions: [
        'continuousIntegration',
        'testing'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, continuousIntegrationTestingMock);
    });
  });

  describe('Prompt values: continuousIntegration, continuousDeployment', () => {

    runTestGenerator({
      generalExtensions: [
        'continuousIntegration',
        'continuousDeployment'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, continuousIntegrationContinuousDeploymentMock);
    });
  });
});
