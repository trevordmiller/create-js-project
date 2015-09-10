import {assert} from 'yeoman-generator';
import runWithPrompts from '../../run-with-prompts.js';
import {reactWebAppPromptOutput} from './babelrc.mock';
const file = '.babelrc';

describe(file, () => {

  describe('react-web-app project type with any other prompt choices', () => {

    runWithPrompts({
      projectType: 'react-web-app'
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppPromptOutput);
    });
  });
});
