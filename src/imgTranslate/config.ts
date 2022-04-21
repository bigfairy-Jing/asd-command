export const getBase64ImgType = (str: string): string | undefined => {
  const typeMaps: {
    [key: string]: string;
  } = {
    '/9j': '.jpg',
    iVB: '.png',
    Qk0: '.bmp',
    SUk: '.tiff',
    JVB: '.pdf',
    UEs: '.ofd',
  };
  return typeMaps[str.slice(0, 3)] || '.png';
};
