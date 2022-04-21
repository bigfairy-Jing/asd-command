import chalk from 'chalk';

export default (text: string) => {
  let formatStr = text;
  let randomNum = 1;
  if (text.indexOf('[') !== -1 && text.indexOf(']') !== -1) {
    const reg = /\[(.+?)\]/g;
    formatStr = text.match(reg).toString().slice(1, -1);
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
