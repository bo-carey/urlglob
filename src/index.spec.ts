import UrlGlob from './index';

describe('UrlGlob class', () => {
  it('should match url glob patterns', () => {
    const glob = new UrlGlob('*w3schools*/*d/**');
    expect(glob.match('https://www.w3schools.com/md/sdfsdf/dfgdfg/')).toBe(true);
    expect(glob.match('https://www.google.com/md/sdfsdf/dfgdfg/')).toBe(false);
  });
});
