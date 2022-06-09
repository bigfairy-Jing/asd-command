export type SearchAPISKey = 'npm' | 'google' | 'github' | 'baidu' | 'juejin' | 'zhihu';

export type SearchAPIS = {
  [key in SearchAPISKey]: string;
};

const searchAPIS: SearchAPIS = {
  npm: 'https://www.npmjs.com/search?q=',
  google: 'https://www.google.com/search?q=',
  github: 'https://github.com/search?q=',
  baidu: 'https://www.baidu.com/s?wd=',
  juejin: 'https://juejin.cn/search?query=',
  zhihu: 'https://www.zhihu.com/search?type=content&q=',
};

export default searchAPIS;
