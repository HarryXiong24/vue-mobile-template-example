import { Random } from "mockjs";

function produceMovieComment(count: number): Array<any> {
  let res: Array<any> = []

  for(let i = 1; i <= count; i++) {
    let model = {
      name: Random.name(),
      comment: Random.cword(5, 13),
      date: Random.date('yyyy.MM.dd'),
      point: Random.float( 8.5, 9.5, 1, 1)
    }
    res.push(model)
  }

  return res
}

function produceMovieComments(count: number): Array<any> {
  let res: Array<any> = []

  for(let i = 1; i <= count; i++) {
    let model = {
      movieID: i,
      movieComment: produceMovieComment(Random.integer(10, 20))
    }
    res.push(model)
  }

  return res
}

export const movieComments: any = produceMovieComments(30)
