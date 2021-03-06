import service from '../util/service'

const reqMovieList = () => {
  let promise: Promise<any> = service({
    url: '/movieList',
    method: 'get',
  })

  return new Promise<any>( function (resolve, reject) {
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

export default reqMovieList
