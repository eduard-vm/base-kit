import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import IUser from '../models/User'
import { getUsersList, getUser } from '../../api/user'
import User from '../models/User'

export interface IUserState {
  currentUser: null | IUser;
  usersList: IUser[];
}

export const namespace = 'user'

export const state = (): IUserState => ({
  currentUser: null,
  usersList: [],
})

const actions: ActionTree<IUserState, any> = {
  async getUsersList({ commit }): Promise<IUser[]> {
    const users = await getUsersList<IUser>()
    const usetsList = users.map(u => new User(u))
    commit(MutationType.SET_USERS_LIST, usetsList)
    return usetsList
  },
  async getUserById({ state, commit }, id: number) {
    try {
      let user = state.usersList.find(u => u.id === id)
      if (!user) {
        const userRes = await getUser<IUser>(id)
        user = new User(userRes)
      }
      commit(MutationType.SET_CURRENT_USER, user)
      return user
    } catch (ex) {
      console.error(ex)
    }
  }
}

export const MutationType = {
  SET_USERS_LIST: 'SET_USERS_LIST',
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const mutations: MutationTree<IUserState> = {
  [MutationType.SET_USERS_LIST] (state, list: IUser[]): void {
    state.usersList = list
  },
  [MutationType.SET_CURRENT_USER] (state, user: IUser): void {
    state.currentUser = user
  },
}

const getters: GetterTree<IUserState, any> = {
  currentUser: ({ currentUser }) => currentUser,
  usersList: ({ usersList }) => usersList
}

export default () => ({
  state,
  actions,
  mutations,
  getters,
  namespaced: true
})
