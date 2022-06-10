module.exports = {
  base: '/asd-command/',
  dest: 'docs/dist',
  descrition: '一个致力于沉浸式开发的命令行工具',
  // head: {},
  themeConfig: {
    logo: '/logo.png',
    repo: 'bigfairy-Jing/asd-command',
    repoLabel: '给作者的 Github 点个 star 吧！',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'main',
    editLinkText: '去github帮助我们改善！',
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础介绍',
          collapsable: false,
          children: [
            'start',
          ]
        },
        {
          title: '命令',
          collapsable: false,
          children: [
            'weather',
            'translate',
            'moneyTranslate',
            'imgCompress',
            'copyUltimate',
            'imgTranslate',
            'imgLinkSave',
            'imgInfo',
            'imgClip',
            'createQrcode',
            'search',
            'openBrowser',
            'colorTranslate',
            'randomSelect',
            'createSome',
            'languageChange'
          ]
        }
      ]
    }
  }
};