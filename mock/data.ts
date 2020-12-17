import { Random } from 'mockjs';
import svg from './img/captcha.svg'

export const captcha = svg

export const user = {
  success: true,
  token: 'admin',
  user: {
    name: Random.cname(),
    age: Random.integer(20, 50)
  }
}

export const movieList: any = [
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
  {
    movieID: 1,
    movieName: "金刚川",
    movieActors: "邓超、吴京、张译主演",
    movieInfo: "让你重温那个激荡磅礴的岁月",
    moviePoint: 9.2,
  },
]

export const movieComment: any = [
  {
    name: "爱江山",
    comment: "实在编不下去了,哈哈哈哈哈哈",
    date: "2020.11.5",
    point: 9.4
  },
  {
    name: "爱美人",
    comment: "我们去看电影，最近有部烂片上映，又有吐槽的了",
    date: "2020.11.8",
    point: 9.1
  },
  {
    name: "潇洒还帅呢",
    comment: "哇去实在编不下去，这就是个demo",
    date: "2020.11.8",
    point: 9.4
  },
  {
    name: "LOL",
    comment: "人生苦短，必须性感",
    date: "2020.11.10",
    point: 9.3
  },
]
