import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {lintingMock} from './eslintignore.mock';
const file = '.eslintignore';

describe(file, () => {

  describe('Prompt values: linting', () => {

    runTestGenerator({
      generalExtensions: [
        'linting'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, lintingMock);
    });
  });
});
