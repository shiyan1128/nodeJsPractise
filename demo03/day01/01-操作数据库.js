// 导入mysql模块
const mysql = require('mysql')
// 建立与MySQL数据库的连接
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'my_db_01'
})
// 检测mysql模块能否正常工作
// db.query('select 1',(err,res) => {
//     if(err) return console.log(err.message)
//     console.log(res)
// })
// 查询user表中所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr,(err,res) => {
//     if(err) return console.log(err.message)
//     // 如果执行的是select查询语句，则执行结果是数组
//     console.log(res)
// })

// // 向user表中新增一条数据
// const user = {username:'Spider-Man',password:'pcc123'}
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users (username,password) value(?,?)'
// // 执行SQL语句
// db.query(sqlStr,[user.username,user.password],(err,res) => {
//     if(err) return console.log(err.message)
//     if(res.affectedRows === 1){
//         console.log('插入数据成功')
//     }
// })


// // 演示插入数据的便捷方式
// const user = {username:'Spider-Man2',password:'pcc4321'}
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users set ?'
// // 执行SQL语句
// db.query(sqlStr,user,(err,res) => {
//     if(err) return console.log(err.message)
//     if(res.affectedRows === 1){
//         console.log('数据插入成功')
//     }
// })


// // 演示如何更新用户信息
// const user = {id:5,username:'aaa',password:'000'}
// // 定义待执行的SQL语句
// const sqlStr = 'update users set username = ?,password = ? where id = ?'
// // 执行SQL语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,res) => {
//     if(err) return console.log(err.message)
//     // 注意：执行了update语句之后，执行的结果也是一个对象，可以通过affectedRows判断是否执行成功
//     if(res.affectedRows === 1){
//         console.log('信息修改成功')
//     }
// })


// // 演示更新用户信息便捷方式
// const user = {id:5,username:'aaaa',password:'0000'}
// // 定义待执行的SQL语句
// const sqlStr = 'update users set ? where id = ?'
// // 执行SQL语句
// db.query(sqlStr,[user,user.id],(err,res) => {
//     if(err) return console.log(err.message)
//     // 注意：执行了update语句之后，执行的结果也是一个对象，可以通过affectedRows判断是否执行成功
//     if(res.affectedRows === 1){
//         console.log('信息修改成功2')
//     }
// })


// // 删除id为5的用户
// // 定义待执行的SQL语句
// const sqlStr = 'delete from users where id = ?'
// // 执行SQL语句
// db.query(sqlStr,5,(err,res) => {
//     if(err) return console.log(err.message)
//     // 注意：执行了delete语句之后，执行的结果也是一个对象，可以通过affectedRows判断是否执行成功
//     if(res.affectedRows === 1){
//         console.log('删除数据成功')
//     }
// })


// 标记删除
const sqlStr = 'update users set status = ? where id = ?'
db.query(sqlStr,[1,4],(err,res) => {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1){
        console.log("删除成功")
    }
})




