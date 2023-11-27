const http = require('http')
const server = http.createServer()
// req是请求对象，包含了与客户端相关的数据
server.on('request',(req,res) => {
    // req.url 是客户端请求的url地址
    const url = req.url
    // req.method 是客户端请求的类型
    const method = req.method
    console.log(method)
    const str = `Your request url is ${url},and request method is ${method}`
    console.log(str)

    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
})
server.listen(8083, () => {
    console.log('server running at http://127.0.0.1:8083')
})