import { movieComments } from './data';


export const movieCommentServer = (options: any) => {

  let body = JSON.parse(options.body)

  for(let i = 0; i < movieComments.length; i++) {
    if(movieComments[i].movieID === body.ID) {
      return movieComments[i].movieComment
    }
  }
}