import APIS, { SearchAPISKey } from './config';
import openBrowser from '../openBrowser';
import { CMD } from '../../lib/commonType';

export default (val: string, cmd: CMD) => {
  const keys = Object.keys(cmd);

  let searchTypes = (keys.length > 0 ? keys : ['baidu']) as SearchAPISKey[];

  if (keys.includes('all')) {
    searchTypes = Object.keys(APIS) as SearchAPISKey[];
  }

  return Promise.all(
    searchTypes.map(async type => {
      const searchUrl = `${APIS[type]}${val}`;
      await openBrowser(searchUrl);
    })
  );
};
