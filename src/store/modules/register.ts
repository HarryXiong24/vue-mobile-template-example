import reqRegisterInfo from '../../api/register';

interface registerState {
  registerInfo: string
}

const state: registerState = {
  registerInfo: ''
}

const mutations = {
  SET_REGISTERINFO: (state: registerState, {registerInfo}: {registerInfo: string}) => {
    state.registerInfo = registerInfo
  }
}

const actions = {
  // 异步获取验证码
  async getRegisterInfo({commit}: any, register: any) {
    // 发送异步ajax请求
    const result = await reqRegisterInfo(register)
    // 处理返回的图片
    const registerInfo = result.data
    // 提交一个mutation
    commit('SET_REGISTERINFO', {registerInfo})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
