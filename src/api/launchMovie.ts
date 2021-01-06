import service from '../util/service'

const launchMovie = (form: any) => {
  let promise: Promise<any> = service({
    url: '/launchMovie',
    method: 'post',
    data: form,
  })

  return new Promise<any>( function (resolve, reject) {
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
      console.log(error)
    })
  })
}

export default launchMovie
