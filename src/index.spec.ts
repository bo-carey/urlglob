import { isValidUrl, matchUrl } from './index';

const glob = '*w3schools*/*d/**';
const correctUrl = 'https://www.w3schools.com/md/sdfsdf/dfgdfg/';
const wrongUrl = 'https://www.google.com/md/sdfsdf/dfgdfg/';

describe('matchUrl', () => {
  it('should match url glob patterns', () => {
    expect(matchUrl(correctUrl, glob)).toBe(true);
    expect(matchUrl(wrongUrl, glob)).toBe(false);
  });
});

describe('isValidUrl', () => {
  it('should validate urls', () => {
    expect(isValidUrl(correctUrl)).toBe(true);
    expect(isValidUrl(glob)).toBe(false);
  });
});
