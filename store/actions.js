import * as types from "./mutation-types"

// 加载状态
export const loading = function({
	commit
}) {
	commit(types.LOADING)
}