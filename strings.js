function trimString(string) {
  const pattern = /^\s+|\s+$/g;
  return string.replace(pattern, '');
}
