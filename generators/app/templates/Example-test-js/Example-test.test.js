import {assert} from 'yeoman-generator';
import runTestGenerator from '../../run-test-generator.js';
import {reactWebAppTestingMock} from './Example-test.mock';
const file = 'src/components/Example/Example.test.js';

describe(file, () => {

  describe('Prompt values: react-web-app', () => {

    runTestGenerator({
      projectType: 'react-web-app',
      generalExtensions: [
        'testing'
      ]
    });

    it('should create the file', () => {
      assert.file([file]);
    });

    it('should have correct file contents', () => {
      assert.fileContent(file, reactWebAppTestingMock);
    });
  });
});
