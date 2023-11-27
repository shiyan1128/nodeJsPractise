// 这是路由处理函数

// 导入数据库操作模块
const db = require('../db/index')

// 获取文章分类列表的处理函数
exports.getArtCates = (req,res) => {
    // res.send('ok')
    // 定义查询分类列表数据的SQL语句
    const sql = `select * from ev_article_cate where is_delete = 0 order by id asc`
    // 调用db.query执行SQL语句
    db.query(sql,(err,results) => {
        if(err) return res.cc(err)
        res.send({
            status:0,
            message:'获取文章分类数据成功',
            data:results
        })
    })
}

// 新增文章分类的函数
exports.addArticleCates = (req,res) => {
    res.send('ok')
}