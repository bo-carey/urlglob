import UrlGlob from "./index";

describe('UrlGlob class', () => {
	it('should match url glob patterns', () => {
		const u = new UrlGlob('*w3schools*/*d/**');
		expect(u.match('https://www.w3schools.com/md/sdfsdf/dfgdfg/')).toBe(true);
		expect(u.match('https://www.google.com/md/sdfsdf/dfgdfg/')).toBe(false);
	})
})