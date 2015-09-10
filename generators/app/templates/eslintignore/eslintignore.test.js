import {assert} from 'yeoman-generator';
import runWithPrompts from '../../run-with-prompts.js';
import {lintingPromptOutput} from './eslintignore.mock';
const file = '.eslintignore';

describe(file, () => {

  describe('Any project type with linting prompt choice', () => {

    runWithPrompts({
      projectType: 'js-module',
      generalExtensions: [
        'linting'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, lintingPromptOutput);
    });
  });
});
