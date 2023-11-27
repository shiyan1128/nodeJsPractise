const express = require('express')
// 创建一个路由对象
const router = express.Router()



// 在这里挂载对应的路由
router.get('/get',(req,res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用res.send()的方法，向客户端响应处理结果
    res.send({
        status:0, //0表示处理成功，1表示处理失败
        msg:'GET请求成功',
        data:query  //响应给客户端的数据
    })


})

// 定义post接口
router.post('/post',(req,res) => {
    // 通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body
    // 调用res.send()方法，向客户端响应结果
    res.send({
        status:0,
        msg:'POST请求成功',
        data:body
    })
})
// 定义delete接口
router.delete('/delete',(req,res) => {
    res.send({
        status:0,
        msg:'DELETE请求成功',
        
    })
})

// 4.向外导出路由对象
module.exports = router