export const matchUrl = (url: string, query: string): boolean => {
  const regexableQuery = query.replace(/\*/g, '[^\\s]*');
  const regex = new RegExp(regexableQuery);
  return regex.test(url);
};
