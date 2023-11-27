
// 1.定义格式化时间方法
function dataFormat(dtStr){
    const dt = new Date(dtStr)
    const y = padZero(dt.getFullYear())
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
    return n > 9 ? n : '0' + n
}

// 向外暴露需要的成员
module.exports = {
    dataFormat
}

