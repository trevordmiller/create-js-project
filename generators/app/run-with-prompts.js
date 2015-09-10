import path from 'path';
import {test as helpers} from 'yeoman-generator';

export default function(prompts) {
  before((done) => {
    helpers.run(path.join(__dirname, '../..'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts(prompts)
      .on('end', done);
  });
}
