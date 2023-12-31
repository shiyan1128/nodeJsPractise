const express = require('express')
const app = express()


// 这是定义全局中间件的简化形式
app.use((req,res,next) => {    
    // 获取到请求到达服务器的世界
    const time = Date.now()
    // 为req对象挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = time
    next()
})

app.get('/',(req,res) => {
    res.send('Home page' + req.startTime)
})
app.get('/user',(req,res) => {
    res.send('User page.' + req.startTime)
})

app.listen(80,() => {
    console.log('http://127.0.0.1')
})