import {assert} from 'yeoman-generator';
import runWithPrompts from '../../run-with-prompts.js';
import {editorConfigPromptOutput} from './editorconfig.mock';
const file = '.editorconfig';

describe(file, () => {

  describe('Any project type with editorConfig prompt choice', () => {

    runWithPrompts({
      projectType: 'js-module',
      generalExtensions: [
        'editorConfig'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, editorConfigPromptOutput);
    });
  });
});
