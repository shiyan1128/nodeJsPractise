const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    // 定义一个字符串，包含中文的内容
    const str = `您请求的URL地址是${req.url},请求的method类型为 ${req.method}`
    // 使用utf8的编码格式 ，res.setHeader()方法
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // res.end()将内容响应给客户端
    res.end(str)
})
server.listen(8083, () => {
    console.log('server running at http://127.0.0.1:8083');
})