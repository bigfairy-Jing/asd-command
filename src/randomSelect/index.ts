import chalk from 'chalk';

export default (text: string) => {
  let formatStr = text;
  let randomNum = 1;
  const reg = /\[(.+?)\]/g;
  const matchs = text.match(reg);
  // 存在中括号的情况 例如  18 [吃饭 不吃饭]
  if (matchs && matchs.length) {
    formatStr = matchs.toString().slice(1, -1);
    randomNum = Number.isInteger(+text.split(/\s+/)[0]) ? +text.split(/\s+/)[0] : 1;
  }
  const randomArr = formatStr.split(/\s+/);
  const len = randomArr.length;
  const showStr = new Array(randomNum)
    .fill('')
    .map(() => {
      return `
          ${randomArr[Math.floor(Math.random() * len)]}`;
    })
    .reduce((prev, next) => prev + next);

  console.log(chalk.green(showStr));
};
