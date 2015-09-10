import path from 'path';
import {test as helpers} from 'yeoman-generator';

export default function(promptValues) {
  before((done) => {
    helpers.run(path.join(__dirname, '../..'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts(promptValues)
      .on('end', done);
  });
}
