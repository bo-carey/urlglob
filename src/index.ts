const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const isValidUrl = (url: string) => urlRegex.test(url);

export const matchUrl = (url: string, query: string): boolean => {
  if (!isValidUrl(url)) throw 'URL is invalid';
  const regexableQuery = query.replace(/\*/g, '[^\\s]*');
  const regex = new RegExp(regexableQuery);
  return regex.test(url);
};
