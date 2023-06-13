# @bo-carey/urlglob

Typescript library for url globing.
Easier than regex string matching patterns for urls.

## Installation

```
npm install @bo-carey/urlglob
```

## How to use :

```javascript
var { matchUrl } from '@bo-carey/urlglob';
matchUrl('http://google.com.eg', '**');
```

## Matching symbols :

1. '\*' : maching zero or more characters
2. '\*\*' : matching zero or more url part (e.g /example/)
