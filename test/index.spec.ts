import { matchUrl } from '../src/index';

describe('matchUrl', () => {
  it('should match url glob patterns', () => {
    const glob = '*w3schools*/*d/**';
    const correctUrl = 'https://www.w3schools.com/md/sdfsdf/dfgdfg/';
    const wrongUrl = 'https://www.google.com/md/sdfsdf/dfgdfg/';

    expect(matchUrl(correctUrl, glob)).toBe(true);
    expect(matchUrl(wrongUrl, glob)).toBe(false);
  });

  it('should differentiate between single and double asterisks', () => {
    const singleAsteriskGlob = 'http://google.*';
    const doubleAsteriskGlob = 'http://google.**';

    const urlWithSection = 'http://google.com/example';
    const urlWithoutSection = 'http://google.com';

    expect(matchUrl(urlWithSection, singleAsteriskGlob)).toBe(false);
    expect(matchUrl(urlWithoutSection, singleAsteriskGlob)).toBe(true);

    expect(matchUrl(urlWithSection, doubleAsteriskGlob)).toBe(true);
    expect(matchUrl(urlWithoutSection, doubleAsteriskGlob)).toBe(true);
  });
});
