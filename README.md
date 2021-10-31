# urlglob-ts

Typescript library for url globing.
Easier than regex string matching patterns for urls.\

## Installation

```
npm install urlglob-ts
```

## How to use :

```javascript
var { matchUrl } from 'urlglob-ts';
matchUrl('http://google.com.eg', '**');
```

## Matching symbols :

1. '\*' : maching zero or more characters
2. '\*\*' : matching zero or more url part (e.g /example/)
