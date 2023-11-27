const express = require('express')
const app = express()

//1.定义路由
app.get('/',(req,res) => {
    // 1.1认为制造错误
    throw new Error('服务器内部发生错误了')
    res.send('Home Page')
})
// 2.定义错误级别中间件捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next) => {
    console.log('发生了错误：'+err.message)
    res.send('Error:'+err.message)
})

app.listen(80,() => {
    console.log('http://127.0.0.1')
})