import types from "./mutation-types"

const matutaions = {
  // 加载中
  [types.LOADING] (state) {
    state.loading = !state.loading
  },
}

export default matutaions
