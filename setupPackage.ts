import fs from 'fs';

function main() {
  fs.copyFileSync('./package.json', './dist/package.json');
  fs.copyFileSync('./README.md', './dist/README.md');
}

main();
