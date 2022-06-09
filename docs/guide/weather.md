# 天气查询

> 使用高德API完成改命令，支持全国所有地区天气实时 和 [今天，明天，后天，大后天] 天气查询，并可设置系统地区。

```shell
$ asd tq [options] [code]
```

或  

```shell
$ asd weather [options] [code]
```

### options参数

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -b  |    --base    |      查询实时天气  |
|  -a  |    --all    |   默认值:查询今天，明天，后天，大后天 天气  |
|  -fc  |    --findcode    |      查询全国地区code码  |
|  -s  |    --setsystem    |     通过code码设置系统地区  |

__code 为高德天气地区 [城市编码](https://lbs.amap.com/api/webservice/download)__


### 示例

##### 查询 [今天，明天，后天，大后天] 天气
![tq1](/asd-command/tq1.gif)

##### 查询实时天气
![tq2](/asd-command/tq2.gif)

##### 搜索天气 code码
![tq3](/asd-command/tq3.gif)

##### 通过天气code码设置系统天气
![tq4](/asd-command/tq4.gif)
