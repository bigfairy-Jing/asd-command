# 快捷搜索

> 通过默认浏览器进行搜索, 默认使用百度搜索, 之后版本会支持修改默认搜索。 支持多个搜索网址打开。

```shell
$ asd search [options] <word>
```

#### 示例

```shell
$ asd search -g '123' # 通过google搜索123
```

#### options参数, __该命令参数必选__

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -n  |    --npm    |      通过npm搜索  |
|  -b |    --baidu    |   通过baidu搜索 |
|  -t |    --github    |   通过github搜索 |
|  -g |    --google    |   通过google搜索 |
|  -j |    --juejin    |   通过掘金搜索 |
|  -z |    --zhihu    |   通过知乎搜索 |
|  -a |    --all    |   浏览器打开所有以上搜索 |