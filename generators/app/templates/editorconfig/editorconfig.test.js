import path from 'path';
import {assert, test as helpers} from 'yeoman-generator';
import editorconfigMock from './editorconfig.mock';

describe('.editorconfig', () => {

  before(function (done) {
    helpers.run(path.join(__dirname, '../..'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        projectType: 'js-module',
        generalExtensions: [
          'editorconfig'
        ]
      })
      .on('end', done);
  });

  it('creates an .editorconfig', function () {
    assert.file(['.editorconfig']);
  });

  it('should have the correct .editorconfig contents', () => {
    assert.fileContent('.editorconfig', editorconfigMock);
  });
});
