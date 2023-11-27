// 这是包的入口文件

// 导入相应 的包
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')


// 向外暴露需要的成员
module.exports = {
    ...date,
    ...escape
}