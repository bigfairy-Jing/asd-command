export type SearchAPISKey = 'npm' | 'google' | 'github' | 'baidu';

export type SearchAPIS = {
  [key in SearchAPISKey]: string;
};

const searchAPIS: SearchAPIS = {
  npm: 'https://www.npmjs.com/search?q=',
  google: 'https://www.google.com/search?q=',
  github: 'https://github.com/search?q=',
  baidu: 'https://www.baidu.com/s?wd=',
};

export default searchAPIS;
