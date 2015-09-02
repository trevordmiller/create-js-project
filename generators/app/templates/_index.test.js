import assert from 'assert';
import example from './index';

describe('example', () => {

  it('should return hello world', () => {
    assert.equal(example(), 'hello world');
  });
});
