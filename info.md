## 1.提出问题

日常开发中,我们再coding的时候总是要从开发工具切换到浏览器查询各种自己想要的东西类似
* 翻译
* 天气
* 复制
* 搜索
* 图片压缩
* ....

## 2.解决思路: 利用node + typescript 开发一个命令行工具去让自己的开发变得便捷

## 3.运行asd-commend-test

## 4.前置

1. bin字段用于映射可执行文件的路径，作用类似于添加环境变量

2. #!/usr/bin/env node 系统指明这个文件的解释器是node

3. npm link进行了一个软链的过程，把当前项目软链到nodejs安装目录的node_modules文件夹下的同名文件夹，然后再软链到nodejs安装目录下的同名可执行文件。

4. [ts-node](https://www.npmjs.com/package/ts-node): 使用ts-node去支持TS的Node运行环境

5. [chalk](https://www.npmjs.com/package/chalk)  以修改终端输出字符样式的 npm 包

6. [cheerio](https://cheerio.js.org/) 为服务器特别定制的，快速、灵活、实施的jQuery核心实现.

7. 选用[got](https://www.npmjs.com/package/got)发送请求, [request](https://www.npmjs.com/package/request)包被弃用, 所以选用got包。

8. [commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md) 完整的 node.js 命令行解决方案。

9. [Inquirer](https://github.com/SBoudrias/Inquirer.js#readme) 通用交互式命令行用户界面的集合

10. [ora](https://www.npmjs.com/package/ora) 主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标等

11. 使用gh-pages + github 完成 文档

#### 5.asd-command 一个命令行工具

## Install

__NPM__

```shell
$ npm install asd-command -g
```

__YARN__

```shell
$ yarn global add asd-command
```

#### docs 
* https://bigfairy-jing.github.io/asd-command/



#### 图片处理其他方法可参考 sharp https://www.npmjs.com/package/sharp 

#### 参考文献
* https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html
* https://www.cnblogs.com/cangqinglang/p/14761571.html
* https://emojiterra.com/
* https://github.com/kenshinji/yddict

#### 待增加
https://cloud.tencent.com/developer/article/1867128