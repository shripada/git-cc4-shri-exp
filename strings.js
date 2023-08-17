/**
 * Trims the string by removing white spaces in the beginning and the end
 * @param {string} string
 * @returns trimmed string
 */
function trimString(string) {
  const pattern = /^\s+|\s+$/g;
  return string.replace(pattern, '');
}
function truncateString(string, maxLength) {
  if (string.length > maxLength) {
    return string.substring(0, maxLength) + '...';
  } else {
    return string;
  }
}
