import qrCode from 'qrcode';
import { formatLink } from '../../lib/utils';

const createQrcode = (url: string) => {
  url = process.argv[2];
  const qrCodeUrl = formatLink(url);
  qrCode.toString(qrCodeUrl, (err, str)=> {
    if(err) {
      console.log(err)
      return;
    }
    console.log(str);
  })
}

export default createQrcode;