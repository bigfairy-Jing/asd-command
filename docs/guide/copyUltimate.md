# 选择复制

> 将本地图片或者网络图片转换为base64，并调用到系统的复制粘贴板。

```shell
$ asd copy <word> <opt>
```

#### options参数, __该命令参数必选__

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -bn  |    --bynumber    |    选择复制通过数字  |
|  -be  |    --byexpre    |   选择复制通过表达式 |

#### opt
> 选择复制的内容,可以通过数字,以及表达式,表达式与css nth-child(exp),相同,但是不支持even和odd,可以使用2n 2n+1 代替.

#### 示例

##### 数字选择复制
![1](/asd-command/copy1.gif)

##### 表达式选择复制
![2](/asd-command/copy2.gif)