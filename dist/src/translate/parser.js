"use strict";
// 代码参考来自 https://github.com/kenshinji/yddict
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
exports.default = (function (isChinese, body) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    var $ = cheerio_1.default.load(body);
    var result = '';
    var sentenceSample = '';
    if (isChinese) {
        $('div.trans-container > ul')
            .find('p.wordGroup')
            .each(function (i, elm) {
            result += $(this).text().replace(/\s+/g, ' ');
        });
    }
    else {
        $('div#phrsListTab > div.trans-container > ul')
            .find('li')
            .each(function (i, elm) {
            result += $(this).text().replace(/\s+/g, ' ') + '\n';
        });
        $('#bilingual ul li')
            .find('p')
            .each(function (i, elm) {
            if ($(this).attr('class') !== 'example-via') {
                sentenceSample += $(this).text().trim() + '\n';
            }
        });
    }
    // phrase or sentence
    if (result === '') {
        result =
            $('div#webPhrase > p.wordGroup').text() !== ''
                ? $('div#webPhrase > p.wordGroup').text()
                : $('div#fanyiToggle > div.trans-container > p:nth-child(2)').text();
    }
    // phonetic
    result =
        $('div#phrsListTab > h2.wordbook-js > div.baav > span').text().replace(/\s+/g, ' ') +
            '\n\n' +
            result +
            '\n' +
            sentenceSample;
    return result;
});
//# sourceMappingURL=parser.js.map