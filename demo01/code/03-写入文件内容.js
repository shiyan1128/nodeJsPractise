// 导入方式文件系统模块
const fs = require('fs')

// 2.调用fs.writeFile()方法，写入文件的内容
// 参数1：表示文件的存放路径
// 参数2：要写入的内容
// 3.参数3，回调函数
fs.writeFile('./2.txt','abcd',function(err){
    // 2.1如果文件写入成功，则err的值为null
    // 2.2如果文件写入失败，则err的值等于一个 错误对象
    console.log(err)
})