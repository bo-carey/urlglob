export const matchUrl = (url: string, query: string): boolean => {
  const regex = createGlob(query);
  return regex.test(url);
};

export const createGlob = (query: string): RegExp => {
  // First, escape special characters that need to be taken literally in regex
  let regexableQuery = query.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  
  // Convert glob to regex
  regexableQuery = regexableQuery
    .replace(/\*\*/g, '{{DOUBLE_ASTERISK}}')  // First replace ** with a placeholder
    .replace(/\*/g, '[^/]*') // Then replace single asterisk
    .replace(/\/{{DOUBLE_ASTERISK}}\//g, '(\/.*\/|\/)')  // Handle the special /**/ case
    .replace(/{{DOUBLE_ASTERISK}}/g, '.*');  // Replace the placeholder with its regex form
  
  return new RegExp('^' + regexableQuery + '$');
}

