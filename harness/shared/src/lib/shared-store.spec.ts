import { sharedStore } from '.';

describe('sharedStore', () => {
  it('should work', () => {
    expect(sharedStore()).toEqual('shared-store');
  });
});
