import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface IPost {
  id: number;
  title: string;
  body: string;
  authorId: number;
}

export interface IPostState {
  currentPost: null | IPost;
  postsList: IPost[];
}

export const namespace = 'post'

export const state = (): IPostState => ({
  currentPost: null,
  postsList: [],
})

const actions: ActionTree<IPostState, any> = {
  getPostList({ commit }): IPost[] {
    const list: Array<IPost> = [
      { id: 1, title: 'Статья 1', body: 'Текст статьи 1', authorId: 1 },
      { id: 2, title: 'Статья 2', body: 'Текст статьи 2', authorId: 2 },
      { id: 3, title: 'Статья 3', body: 'Текст статьи 3', authorId: 3 },
      { id: 4, title: 'Статья 4', body: 'Текст статьи 4', authorId: 4 },
      { id: 5, title: 'Статья 5', body: 'Текст статьи 5', authorId: 5 },
    ]
    commit(MutationType.SET_POSTS_LIST, list)
    return list
  }
}

export const MutationType = {
  SET_POSTS_LIST: 'SET_POSTS_LIST'
}

const mutations: MutationTree<IPostState> = {
  [MutationType.SET_POSTS_LIST](state, list: IPost[]) {
    state.postsList = list
  }
}

const getters: GetterTree<IPostState, any> = {
  postsList: ({ postsList }) => postsList
}

export default () => ({
  state,
  actions,
  mutations,
  getters,
  namespaced: true
})
