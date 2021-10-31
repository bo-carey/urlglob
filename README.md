# urlglob-ts

Typescript library for url globing.
Easier than regex string matching patterns for urls.\

## Installation

```
npm install urlglob-ts
```

## How to use :

```javascript
var UrlGlob = require('urlglob-ts');
var urlGlob = new UrlGlob('**');
urlGlob.match('http://google.com.eg'); // take a url and returns true or false
```

## Matching symbols :

1. '\*' : maching zero or more characters
2. '\*\*' : matching zero or more url part (e.g /example/)
