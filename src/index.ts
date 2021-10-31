const matchBeginning = (str: string, query: string): boolean => {
  return str.lastIndexOf(query, 0) === 0;
};

const validateUrl = (url: string) => {
  if (!matchBeginning(url, 'http://') && !matchBeginning(url, 'https://')) {
    return false;
  }
  let startPosition = 0;
  if (matchBeginning(url, 'http://')) {
    startPosition = 7;
  } else {
    startPosition = 8;
  }
  const noProtocolUrl = url.substring(startPosition);
  const urlParts = noProtocolUrl.split('/');
  return urlParts.length > 0;
};

const tokenize = (url: string) => {
  let startPosition = 0;
  if (matchBeginning(url, 'http://')) {
    startPosition = 7;
  } else if (matchBeginning(url, 'https://')) {
    startPosition = 8;
  }
  const noProtocolUrl = url.substring(startPosition);
  const urlParts = noProtocolUrl.split('/');
  return urlParts;
};

const checkEqualsWithGlobing = (patternString: string, actualString: string) => {
  const patternStringTokens: string[] = [];
  let current = '';
  for (let x = 0; x < patternString.length; x++) {
    if (patternString[x] === '*') {
      patternStringTokens.push(current);
      patternStringTokens.push('*');
      current = '';
    } else {
      current += patternString[x];
    }
  }
  if (current !== '') {
    patternStringTokens.push(current);
  }

  let j = 0;
  for (let i = 0; i < patternStringTokens.length; i++) {
    if (patternStringTokens[i] === '*') {
      let isMatched = false;
      do {
        if (i + 1 === patternStringTokens.length) {
          return true;
        }
        while (j < actualString.length && actualString[j] !== patternStringTokens[i + 1][0]) {
          j++;
        }
        if (
          actualString.substring(j, j + patternStringTokens[i + 1].length) ===
          patternStringTokens[i + 1]
        ) {
          j += patternStringTokens[i + 1].length;
          i++;
          isMatched = true;
          break;
        }
        j++;
      } while (j < actualString.length);

      if (!isMatched) {
        return false;
      }
    } else {
      if (
        patternStringTokens[i] !== actualString.substring(j, j + patternStringTokens[i].length)
      ) {
        return false;
      }
      j += patternStringTokens[i].length;
    }
  }
  if (j !== actualString.length) {
    return false;
  }
  return true;
};

const removeEmptyStrings = (array: string[]): string[] => {
  return array.filter((i) => i?.length !== 0);
};

export default class UrlGlobFun {
  patternUrlTokens: string[];
  constructor(url: string) {
    this.patternUrlTokens = removeEmptyStrings(tokenize(url.trim()));
  }
  match(url: string) {
    if (!validateUrl(url.trim())) {
      throw new Error('Invalid pattern url');
    }
    const urlTokens = tokenize(url.trim());
    removeEmptyStrings(urlTokens);
    let i = 0,
      j = 0;
    while (i < this.patternUrlTokens.length && j < urlTokens.length) {
      if (this.patternUrlTokens[i] === '*' || this.patternUrlTokens[i] === urlTokens[j]) {
        i++;
        j++;
      } else if (this.patternUrlTokens[i] === '**') {
        if (i + 1 === this.patternUrlTokens.length) {
          return true;
        }
        while (
          j < urlTokens.length &&
          !checkEqualsWithGlobing(this.patternUrlTokens[i + 1], urlTokens[j])
        )
          j++;

        i++;
      } else if (this.patternUrlTokens[i] !== urlTokens[j]) {
        if (!checkEqualsWithGlobing(this.patternUrlTokens[i], urlTokens[j])) {
          return false;
        }
        i++;
        j++;
      }
    }
    if (i !== this.patternUrlTokens.length || j !== urlTokens.length) {
      return false;
    }
    return true;
  }
}
