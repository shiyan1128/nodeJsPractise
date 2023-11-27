// 定义转译HTML字符的函数
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|&|"/g,(match) => {
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 还原HTML字符串的函数
function htmlUnEscape(str){
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g,(match) => {
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

// 向外暴露需要的成员
module.exports = {
    htmlEscape,
    htmlUnEscape
}