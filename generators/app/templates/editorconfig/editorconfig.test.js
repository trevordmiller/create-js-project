import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {editorConfigMock} from './editorconfig.mock';
const file = '.editorconfig';

describe(file, () => {

  describe('Prompt values: editorConfig', () => {

    runTestGenerator({
      generalExtensions: [
        'editorConfig'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, editorConfigMock);
    });
  });
});