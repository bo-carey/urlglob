# @bo-carey/urlglob

A simple yet powerful TypeScript library for URL globbing. Provides an easier alternative to regular expression for URL matching patterns.

## Installation

You can install this library using npm:

```
npm install @bo-carey/urlglob
```

## How to use

First, import the `matchUrl` function from the library:

```typescript
var { matchUrl } = require('@bo-carey/urlglob');
```

The `matchUrl` function takes two arguments:

1. The URL you want to check.
2. The pattern you want to match it with.

Here's an example usage:

```typescript
var doesMatch = matchUrl('http://google.com', 'http://google.*');
console.log(doesMatch); // Prints true or false
```

## Matching symbols

This library supports two types of globbing symbols:

1. `*` : Matches zero or more characters within a single URL section (e.g., domain or path).
2. `**` : Matches zero or more characters across URL sections.

For example, the pattern `http://google.*` would match 'http://google.com' or 'http://google.net', but would not match 'http://google.com/example'.

For more complex patterns or to match across URL sections, you can use `**`. For example, the pattern `http://google.**` would match 'http://google.com', 'http://google.net/example', 'http://google.com/example/example2', and so on.

## Notes

Remember, the patterns are converted to regular expressions behind the scenes, but the advantage of using this library is that the globbing patterns are much simpler to write and understand for common use cases.
