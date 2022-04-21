import GotFetch from "../../lib/fetch";

import chalk from 'chalk';

import Spinner from 'cli-spinner';

// import isChinese from 'is-chinese';

import urlencode from 'urlencode';

import noCase from 'no-case';

let word = process.argv.slice(3).join(" ");

if(!word){
  console.log('')
}
