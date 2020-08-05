/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import User from './user.json'

// 返回登录的接口
Mock.mock('/Login', {code:0, data: User})
Mock.mock('/Login', {code:0, data: User})


// 用例Mock.mock('/info', {code:0, data: data.info})
// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可