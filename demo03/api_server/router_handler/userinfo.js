// 导入数据库操作模块
const { result } = require('@hapi/joi/lib/base')
const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')


// 获取用户信息的处理模块
exports.getUserInfo = (req,res) => {
    // res.send('ok')
    // 定义查询用户信息的SQL语句
    const sql = `select id,username,nickname,email,user_pic from ev_users where id = ?`
    // 调用db.query() 执行SQL语句
    // 只要身份认证成功(Token解析成功)，express-jwt会自动挂载用户信息user到req上
    db.query(sql,req.user.id,(err,results) => {
        //执行SQL语句失败
        if(err) return req.cc(err)
        // 执行SQL语句成功，但是查询的结果可能为空
        if(results.length !== 1) return res.cc('用户信息获取失败')
        // 用户信息获取成功
        res.send({
            status:0,
            message:'获取用户信息成功',
            data:results[0]
        })
    })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req,res) => {
    // res.send('ok')
    // 定义待执行的SQL语句
    const sql = 'update ev_users set ? where id = ?'
    // 调用db.query()执行SQL语句并传递参数
    db.query(sql,[req.body,req.body.id],(err,results) => {
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('更新用户信息失败')
        res.send({
            status:0,
            message:'更新用户信息成功',
        })
    })
}

// 更新密码的处理函数
exports.updatePassword = (req,res) => {
    // res.send('ok')
    const sql = 'select * from ev_users where id = ?'
    db.query(sql,req.user.id,(err,results) => {
        if(err) return res.cc(err)
        if(results.length !== 1){
            res.cc('用户不存在')
        }
        // 判断用户输入的密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd,results[0].password)
        if(!compareResult) return res.cc('旧密码错误')
        // 更新数据库中密码
        const sql = 'update ev_users set password = ? where id = ?'
        // 对新密码进行加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd,10)
        db.query(sql,[newPwd,req.user.id],(err,results) => {
            if(err) return res.cc(err)
            if(results.affectedRows !== 1){
                res.cc('更新密码失败')
            }
            res.send({
                status:0,
                message:'更新密码成功',
            })
        })
    })
}

// 更新用户头像的处理函数
exports.updateAvatar = (req,res) => {
    // res.send('ok')
    // 1.定义更新头像的SQL语句
    const sql = `update ev_users set user_pic = ? where id = ?`
    db.query(sql,[req.body.avatar,req.user.id],(err,results) => {
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('更换头像失败')
        res.cc('更换头像成功',0)
    })
}