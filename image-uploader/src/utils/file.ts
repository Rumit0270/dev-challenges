export const isValidImage = (file: File) => {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ];
  if (validTypes.indexOf(file.type) === -1) {
    return false;
  }
  return true;
};
