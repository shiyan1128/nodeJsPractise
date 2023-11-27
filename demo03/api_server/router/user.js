const express = require('express')
const router = express.Router()

// 导入用户处理函数对应模块
const user_handler =require('../router_handler/user')
// 1.导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 2.导入需要验证的规则对象(将获取的对象解构)
const {reg_login_schema} = require('../schema/user')
//注册新用户
router.post('/reguser',expressJoi(reg_login_schema),user_handler.regUser)

// 登录
router.post('/login',expressJoi(reg_login_schema),user_handler.login)




module.exports = router