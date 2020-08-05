import service from '../util/service'

const reqCaptcha = () => {
  let promise: Promise<any> = service({
    url: 'http://121.89.223.235:8081/captcha',
    method: 'get',
    responseType: 'arraybuffer'
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

export default reqCaptcha