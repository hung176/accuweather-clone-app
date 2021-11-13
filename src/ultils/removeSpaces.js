export const removeSpaces = (string) => {
  if (!string) return;

  const lowerCase = string.toLowerCase();
  return lowerCase.replace(/ /g, '-');
};