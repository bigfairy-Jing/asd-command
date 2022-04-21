interface Regs {
  [key: string]: {
    val: RegExp;
    cn: string;
    en: string;
  };
}

const regs: Regs = {
  img: {
    val: /.+\.(jpg|jpeg|gif|bmp|png)$/,
    cn: '图片正则表达式',
    en: 'regular expression for img',
  },
};

export default regs;
