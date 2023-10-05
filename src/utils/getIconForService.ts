export const getIconForService = (imageName: string, src: string) => {
  const allowedImageNames = ['cursor', 'targetSmall', 'cursorTurget'];
  return allowedImageNames.includes(imageName) ? src : '';
};
