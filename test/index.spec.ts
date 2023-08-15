import { createGlob } from '../src/index';

describe('createGlob', () => {

  it('should escape special regex characters', () => {
    const testCases = [
      { query: 'http://example.com/+.?^${}()|[]\\', glob: '^http:\\/\\/example\\.com\\/\\+\\.\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\$' },
      { query: 'http://another.com/**+*', glob: '^http:\\/\\/another\\.com\\/.*\\+[^/]*$' },
    ];
    testCases.forEach(tc => {
      const regex = createGlob(tc.query);
      expect(regex.source).toBe(tc.glob);
    });
  });

  it('should transform single asterisks correctly', () => {
    const testCases = [
      { query: 'http://example.com/*', glob: '^http:\\/\\/example\\.com\\/[^/]*$' },
      { query: 'http://example.com/user/*/details', glob: '^http:\\/\\/example\\.com\\/user\\/[^/]*\\/details$' },
    ];
    testCases.forEach(tc => {
      const regex = createGlob(tc.query);
      expect(regex.source).toBe(tc.glob);
    });
  });

  it('should transform double asterisks correctly', () => {
    const testCases = [
      { query: 'http://example.com/**', glob: '^http:\\/\\/example\\.com\\/.*$' },
      { query: 'http://example.com/user/**/details', glob: '^http:\\/\\/example\\.com\\/user(\\/.*\\/|\\/)details$' },
    ];
    testCases.forEach(tc => {
      const regex = createGlob(tc.query);
      expect(regex.source).toBe(tc.glob);
    });
  });

  it('should differentiate between single and double asterisks', () => {
    const testCases = [
      { query: 'http://example.com/*/path/**', glob: '^http:\\/\\/example\\.com\\/[^/]*\\/path\\/.*$' },
      { query: 'http://example.com/**/*', glob: '^http:\\/\\/example\\.com(\\/.*\\/|\\/)[^/]*$' }, 
    ];
    testCases.forEach(tc => {
      const regex = createGlob(tc.query);
      expect(regex.source).toBe(tc.glob);
    });
  });

  it('should handle the special /**/ case correctly', () => {
    const testCases = [
      { query: 'http://example.com/**/', glob: '^http:\\/\\/example\\.com(\\/.*\\/|\\/)$' },
      { query: 'http://example.com/**/path/', glob: '^http:\\/\\/example\\.com(\\/.*\\/|\\/)path\\/$' },  
    ];
    testCases.forEach(tc => {
      const regex = createGlob(tc.query);
      expect(regex.source).toBe(tc.glob);
    });
  });
});
