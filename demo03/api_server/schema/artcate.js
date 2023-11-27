// 1.导入验证规则的模块
const joi = require('joi')

// 2.定义name和alias的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()


// 3.向外共享验证规则对象
exports.add_cate_schema = {
    body:{
        name,
        alias,
    },
}

