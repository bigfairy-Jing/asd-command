module.exports = {
  // base: '/asd',
  // dest: 'docs/dist',
  // descrition: '一个致力于沉浸式开发的命令行工具',
  // head: {},
  // themeConfig: {},
  themeConfig: {
    logo: '/logo.png',
    repo: 'bigfairy-Jing/asd-command',
    docsDir: 'docs',
    editLinks: true,
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
            'install',
          ]
        },
        {
          title: '使用命令',
          collapsable: false,
          children: [
            'weather',
          ]
        }
      ]
    }
  }
};