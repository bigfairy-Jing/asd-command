# 金额转换

#### 声明

__该命令仅供参考，不作为商业用途，汇率为每日更新一次，仅供日参考，不作为实时汇率参看。__

> 使用[ExchangeRate-API](https://www.exchangerate-api.com/docs/overview)完成该命令，支持查询汇率，输入金额计算，选择国家计算，选择货币计算。

```shell
$ asd  money [options] [translateStr]
```

### options参数

| name |       alias     |          desc       |
| :--: | :-------------: | :---------------------: |
|  -sct  |    --selectcountry    |      通过国家选择  |
|  -scr  |    --selectcurrency    |   通过货币选择 |
|  -showcode  |    --showcode    |    展示所有货币码  |
|  -showcodecurrency  |    --showcurrency    |     展示所有国家对应货币码  |
|  -b  |    --bycode    |     通过货币码-连接转换  |


### 示例

##### 通过国家选择
![1](/asd-command/money1.gif)

##### 通过货币码-连接转换
![2](/asd-command/money2.gif)

