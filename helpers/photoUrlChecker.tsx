export const photoUrlChecker = (url: string) => {
  let permission: boolean = false;

  if (
    url.includes('images.pexels.com') ||
    url.includes('images.unsplash.com') ||
    url.includes('res.cloudinary.com') ||
    url.includes('www.pexels.com') ||
    url.includes('images.remotePatterns') ||
    url.includes('randomuser.me')
  ) {
    return true;
  }
  return false;
};
