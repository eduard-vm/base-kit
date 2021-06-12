import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import IProduct from '../models/Product'

export interface IProductState {
  currentProduct: null | IProduct
}

export const namespace = 'product'

export const state = (): IProductState => ({
  currentProduct: null
})

const actions: ActionTree<IProductState, any> = {
  getProduct({ commit }, slug: string) {
    console.log('@getProduct')
    commit('setProduct', {
      slug: 'product1',
      name: 'Продукт 1',
      id: 1,
      image: '',
      price: 90,
      oldPrice: 100
    })
  }
}
const mutations: MutationTree<IProductState> = {
  setProduct(state, product: IProduct): void {
    state.currentProduct = product
  }
}
const getters: GetterTree<IProductState, any> = {
  currentProduct: ({ currentProduct }) => currentProduct
}

export default () => ({
  state,
  actions,
  mutations,
  getters,
  namespaced: true
})
