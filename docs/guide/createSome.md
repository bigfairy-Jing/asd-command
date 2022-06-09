# 生成随机

> 支持生成限值大小随机数,唯一ID, 时间戳, 指定长度随机字母, 随机颜色.

# 快捷搜索

> 通过默认浏览器进行搜索, 默认使用百度搜索, 之后版本会支持修改默认搜索。 支持多个搜索网址打开。

```shell
$ asd cs [options] [optStr]
```

#### options参数, __该命令参数必选__

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -r  |    --random    |      生成随机数 optStr 可传入限值最大值  |
|  -id |    --uniqueid    |   生成唯一id |
|  -tt |    --timestamp    |   生成时间戳 |
|  -rl |    --randomletter    |   生成随机长度字母,默认10, optStr可传入长度 |
|  -rp |    --randomphone    |   生成随机手机号 |
|  -rh |    --randomhue    |   生成随机颜色 |

#### 示例

```shell
$ asd cs -rl 123 # 生成长度为123的字母
# KaFUoFaNvjgFdkqNdtMofqkIflxExqRuYTTFOolbbYFqUOLQPtdwITbUNxGcnkfrFcEoRJMwHuXOqVSUnrMCLNViLvFqLdhCCdLoKfNKuDOEwsMbXEsxdhtDUGP
```