var urlglob = require("./url-glob");

var u = new urlglob('*w3schools*/*d/**');

console.log(u.match('https://www.w3schools.com/md/sdfsdf/dfgdfg/'));