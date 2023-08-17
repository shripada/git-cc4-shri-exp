/**
 * Trims the string by removing white spaces in the beginning and the end
 * @param {string} string
 * @returns trimmed string
 */
function trimString(string) {
  const pattern = /^\s+|\s+$/g;
  return string.replace(pattern, '');
}
