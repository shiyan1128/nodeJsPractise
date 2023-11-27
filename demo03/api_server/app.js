// 导入express
const express = require('express')
// 创建服务器的实例对象
const app = express()
// const joi = require('@hapi/joi')
const joi = require('joi')

// 导入并配置cors中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件,注意：这个中间件，只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended:false}))

// 一定要在路由之前，封装res.cc函数
app.use((req,res,next) => {
    // status默认值为1，表示失败的情况
    // err的值，可能是一个错误对象，也有可能是一个错误描述的字符串
    res.cc = function(err,status=1){
        res.send({
            status,
            message:err instanceof Error? err.message : err
        })
    }
    next()
})

// 一定要在路由之前配置解析Token的中间件
const expressJwt = require('express-jwt')
const config = require('./config')
app.use(expressJwt({
    secret:config.jwtSecreKey
}).unless({path:[/^\/api/]})) //api的请求接口不需要身份认证



// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)
// 导入并使用用户信息的路由模块
const userinfoRouter = require('./router/userinfo.js')
app.use('/my',userinfoRouter)
// 导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article',artCateRouter)


// 定义错误级别的中间件
app.use((err,req,res,next) => {
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 这是身份认证失败后的错误
    if(err.name === 'UnauthorizedError') return res.cc('身份验证失败')
    // 未知错误
    res.cc(err)
})


// 启动服务器
app.listen(3007,() => {
    console.log('api server running at http://127.0.0.1:3007')
})





