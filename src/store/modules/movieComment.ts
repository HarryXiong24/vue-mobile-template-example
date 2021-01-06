import reqMovieComment from '../../api/movieComment';

interface movieCommentState {
  movieComment: any
}

const state: movieCommentState = {
  movieComment: []
}

const mutations = {
  SET_MOVIELIST: (state: movieCommentState , {movieComment}: {movieComment: string}) => {
    state.movieComment = movieComment
  }
}

const actions = {
  async getMovieComment({commit}: any, movieID: any) {
    // 发送异步ajax请求
    const result = await reqMovieComment(movieID)
    const movieComment = result.data
    console.log(movieComment)
    // 提交一个mutation
    commit('SET_MOVIELIST', {movieComment})
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
