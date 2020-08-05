import reqUserInfo from '../../api/userInfo'

interface userInfoState {
  userInfo: any
}

const state: userInfoState = {
  userInfo: {}
}

const mutations = {
  SET_USERINFO: (state: userInfoState, {userInfo}: any) => {
    state.userInfo = userInfo
  },
}

const actions = {
  // 异步在登录时获取用户信息
  async getUserInfo({commit}: any, loginMsg: any) {
    // 发送异步ajax请求
    const result = await reqUserInfo(loginMsg)
    // 提交一个mutation
    const userInfo = result.data
    commit('SET_USERINFO', {userInfo})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

