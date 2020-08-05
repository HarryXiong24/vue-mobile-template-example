import reqCaptcha from "../../api/captcha"

interface captchaState {
  captcha: string
}

const state: captchaState = {
  captcha: ''
}

const mutations = {
  SET_CAPTCHA: (state: captchaState, {captcha}: {captcha: string}) => {
    state.captcha = captcha
  }
}

const actions = {
  // 异步获取验证码
  async getCaptcha({commit}: any) {
    // 发送异步ajax请求
    const result = await reqCaptcha()
    // 将验证码请求里headers里的captcha值存入sessionStorage
    sessionStorage.setItem("captcha", result.headers.captcha)
    // 处理返回的图片
    const captcha = 'data:image/png;base64,' + 
    btoa( new Uint8Array(result.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    // 提交一个mutation
    commit('SET_CAPTCHA', {captcha})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
