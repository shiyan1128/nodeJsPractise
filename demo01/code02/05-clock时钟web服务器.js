// 1.1导入http模块
const http = require('http')
// 1.2带入fs模块
const fs = require('fs')
// 1.3导入path模块
const path = require('path')

// 2.1创建web服务器
const server = http.createServer()
// 2.2监听web服务器
server.on('request',(req,res) => {
    // 3.1获取到客户端请求的url
    const url = req.url
    // 3.2把请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname,url)
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'/clock',url)
    }


    // 4.1根据映射过来的文件路径读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        if(err) return res.end('404 Not found.')
        res.end(dataStr)

    })

})
// 2.3启动服务器
server.listen(8083,() => {
    console.log('server running at http://127.0.0.1:8083')
})









