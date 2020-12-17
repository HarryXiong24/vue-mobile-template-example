import Mock from 'mockjs'
import { user, captcha, movieList, movieComment } from './data';
import { Random } from 'mockjs';

// 返回登录的接口
Mock.mock('/captcha', 'get', (options: any) => {
  options.headers = {
    captcha: Random.string(16)
  }

  return captcha
})

Mock.mock('/login', 'post', (options: any) => {
  let body = JSON.parse(options.body)

  if (body.username === "harry" && body.password === "123456") {
    return user
  } else {
    return {
      msg: "Incorrect username or password!"
    }
  }

})

Mock.mock('/register', 'post', (options: any) => {
  let body = JSON.parse(options.body)
  console.log(body)
  return {
    success: true,
    msg: "注册成功!"
  }
})

Mock.mock('/movieInfo', 'get', (options: any) => {
  return movieList
})

Mock.mock('/movieComment', 'get', (options: any) => {
  return movieComment
})


// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可