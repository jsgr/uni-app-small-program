import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"
import state from "./state"

Vue.use(Vuex)

const store = new Vuex.Store({
	mutations,
	actions,
	getters,
	state
})

export default store
