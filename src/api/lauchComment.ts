import service from '../util/service'

const sendComment = (form: any) => {
  let promise: Promise<any> = service({
    url: '/launchComment',
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

export default sendComment
