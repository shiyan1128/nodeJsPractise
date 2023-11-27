<!-- 包的说明文档 -->
## 安装
```

npm install itheima-toollss

```

## 导入
```js

const itheima = require('itheima-toollss')

```

## 格式化时间
```js
// 调用dataForm 对时间进行格式化
const newDt = itheima.dataFormat(new Date())
// 结果 2023-07-16 20:19:09
console.log(newDt)

```

## 转义 HTML中的特殊字符串
```js

// 待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = itheima.htmlEscape(htmlStr)
// 转换结果： &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str2)

```
## 还原HTML中的特殊字符
```js

// 待转换的HTML字符串
const str2 = itheima.htmlUnEscape(str)
// 输出结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)

```

## 开源协议
ISC