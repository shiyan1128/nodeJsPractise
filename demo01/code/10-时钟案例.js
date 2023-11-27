// 1.1导入fs模块
const fs = require('fs')
// 1.2导入path模块
const path = require('path')

// 1.3 定义正则表达式 ，分别匹配 <style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'./10-index.html'),'utf8',function(err,dataStr){
    // 读取失败
    if(err){
        return console.log(('读取文件失败'+err.message))
    }
    // console.log(dataStr)
    // 读取成功，调用对应的三个方法，分别拆解出css，js，html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1定义处理css样式的方法、
function resolveCSS(htmlStr) {
    // 3.2使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)
    // 3.3将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // 3.4调用fs.writeFlie()方法，将提取的样式，写入到10-index.css的文件中
    fs.writeFile(path.join(__dirname,'./10-index.css'),newCSS,function(err){
        if(err) return console.log(('写入样式文件失败'+err.message))
        console.log('写入样式文件成功')

    })
}

// 4.1定义处理JS脚本的方法
function resolveJS(htmlStr){
    // 通过正则，提取对应的<script></script>标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3将提取出来的内容做进一步处理
    const newJS =  r2[0].replace('<script>','').replace('</script>','')
    // 4.4将处理的结果，写入到10-index.js文件中
    fs.writeFile(path.join(__dirname,'./10-index.js'),newJS,function(err){
        if(err) return console.log(('写入JavaScript脚本失败'+err.message))
        console.log('写入JS脚本成功')
    })
}

// /5.1定义处理HTML结构的方法
function resolveHTML(htmlStr){
    // 5.2 将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./10-index.css" />').replace(regScript,'<script src="./10-index.js"></script>')
    // 5.3 写入10-index.html文件
    fs.writeFile(path.join(__dirname,'./10-index.html'),newHTML,function(err){
        if(err) console.log('写入HTML页面失败'+err.message)
        console.log('写入HTML页面成功')
    })

}