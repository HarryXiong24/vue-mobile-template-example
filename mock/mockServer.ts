import Mock from 'mockjs'
import { loginServer } from './login/loginServer';
import { captchaServer } from './captcha/captchaServer';
import { registerServe } from './register/register';
import { movieListServer } from './movieList/movieListServer';
// import { movieDetailServer } from './movieDetail/movieDetailServer';
import { movieCommentServer } from './movieComment/movieCommentServer';
import { launchMovieServer } from './launchMovie/launchMovieServer';
import { launchCommentServer } from './launchComment/launchCommentServer';
import { heatMapServer } from './heatMap/heatMapServer';
import { lineDataServer } from './lineData/lineDataServer';

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

// 发布电影
Mock.mock('/launchMovie', 'post', launchMovieServer)

// 发布评论
Mock.mock('/launchComment', 'post', launchCommentServer)

// 获取热力图数据
Mock.mock('/heatMap', 'get', heatMapServer)

// 获取线图数据
Mock.mock('/lineData', 'get', lineDataServer)


// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可