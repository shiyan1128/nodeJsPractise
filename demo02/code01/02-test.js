const itheima = require('./itheima-tools/index')


const newDt = itheima.dataFormat(new Date())
console.log(newDt)

console.log("___________________");

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
const str2 = itheima.htmlUnEscape(str)
console.log(str2)
console.log("___________________");
