import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {jsModuleTestingMock} from './index-test.mock';
const file = 'src/index.test.js';

describe(file, () => {

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
});
