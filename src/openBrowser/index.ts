import open from 'open';
import { formatLink } from '../../lib/utils';

export default async (link: string) => {
  link = formatLink(link);
  open(link);
};
