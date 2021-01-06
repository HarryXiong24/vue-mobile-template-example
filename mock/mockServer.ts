import Mock from 'mockjs'
import { loginServer } from './login/loginServer';
import { captchaServer } from './captcha/captchaServer';
import { registerServe } from './register/register';
import { movieListServer } from './movieList/movieListServer';
// import { movieDetailServer } from './movieDetail/movieDetailServer';
import { movieCommentServer } from './movieComment/movieCommentServer';

// 返回登录的接口
Mock.mock('/captcha', 'get', captchaServer)

// 登录
Mock.mock('/login', 'post', loginServer)

// 注册
Mock.mock('/register', 'post', registerServe)

// 获取电影列表
Mock.mock('/movieList', 'get', movieListServer)

// 获取电影详细信息
// Mock.mock('/movieDetail', 'get', movieDetailServer)

// 获取电影评论
Mock.mock('/movieComment', 'get', movieCommentServer)


// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可