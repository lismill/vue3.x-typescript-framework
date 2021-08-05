import { ActionContext } from 'vuex'

interface StateProps {
  full: boolean
}

export default {
  state: {
    full: false
  },
  mutations: {
    CHANGE_SCREEN_FULL(state: { full: boolean }): void {
      state.full = !state.full
    }
  },
  actions: {
    changeScreenFull({ commit }: ActionContext<StateProps, ''>): void {
      commit('CHANGE_SCREEN_FULL')
    }
  }
}
