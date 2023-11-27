const express = require('express')
const app = express()

// 定义第一个中间件
app.use((req,res,next) => {
    console.log('这是第一个中间件')
    next()
})
// 定义第二个中间件
app.use((req,res,next) => {
    console.log('这是第二个中间件')
    next()
})

// 定义一个路由
app.get('/',(req,res) => {
    res.send('User Page')
})

app.listen(80,() => {
    console.log('http://127.0.0.1')
})