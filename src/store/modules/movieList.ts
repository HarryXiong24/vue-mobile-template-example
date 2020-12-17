import reqMovieList from '../../api/movieList';

interface movieListState {
  movieList: any
}

const state: movieListState = {
  movieList: []
}

const mutations = {
  SET_MOVIELIST: (state: movieListState, {movieList}: {movieList: string}) => {
    state.movieList = movieList
  }
}

const actions = {
  async getMovieList({commit}: any) {
    // 发送异步ajax请求
    const result = await reqMovieList()
    const movieList = result.data
    // 提交一个mutation
    commit('SET_MOVIELIST', {movieList})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
