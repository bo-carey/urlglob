export const matchUrl = (url: string, query: string): boolean => {
  const regexableQuery = query.replace(/\\\*\\*/, '.*').replace(/([^\\])\*/, '$1[^/]*');
  const regex = new RegExp(regexableQuery);
  return regex.test(url);
};
