import reqMovieDetail from '../../api/movieDetail';

interface movieDetailState {
  movieDetail: any
}

const state: movieDetailState = {
  movieDetail: {}
}

const mutations = {
  SET_MOVIELIST: (state: movieDetailState , {movieDetail}: {movieDetail: string}) => {
    state.movieDetail = movieDetail
  }
}

const actions = {
  async getMovieDetail({commit}: any, movieID: any) {
    // 发送异步ajax请求
    const result = await reqMovieDetail(movieID)
    const movieDetail = result.data
    console.log(movieDetail)
    // 提交一个mutation
    commit('SET_MOVIELIST', {movieDetail})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
