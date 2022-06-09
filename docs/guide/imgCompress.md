# 图片压缩

> 使用tinypng（无损压缩）和 nodeimages （有损压缩）两种方式，自动识别图片文件 文件夹类型 进行单个或者批量压缩。

```shell
$ asd  imgcp [options] <inPath> <outPath>
```

### options参数

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -tin  |    --tinypng    |      使用tinypng压缩  |
|  -images  |    --nodeimages    |   使用nodeimages |

### inPath

> 图片路径 或者文件夹路径

### outPath

> 图片输出路径，__必须存在该路径__

