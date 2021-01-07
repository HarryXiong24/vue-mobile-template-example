import { Random } from "mockjs";

function produceMovieList(count: number): Array<any> {
  let res: Array<any> = []

  for(let i = 1; i <= count; i++) {
    let model = {
      movieID: i,
      movieName: Random.cword(3, 6),
      movieActors: Random.cword(3, 6) + "等主演",
      movieInfo: "简介: " + Random.cword(10, 13),
      moviePoint: Random.float( 8.5, 9.5, 1, 1),
      movieDetail: Random.cword(40, 80),
      launcher: Random.cname(),
      launchTime: Random.date('yyyy.MM.dd') + " 发布"
    }
    res.push(model)
  }

  return res
}

export const movieList: any = produceMovieList(30)