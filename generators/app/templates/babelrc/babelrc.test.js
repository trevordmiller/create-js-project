import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {reactWebAppMock} from './babelrc.mock';
const file = '.babelrc';

describe(file, () => {

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