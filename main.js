import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import utils from './utils'
import config from './config'
import ajax from './ajax'
import store from "./store"

import globalMixin from "./mixin"
import * as filters from "./utils/filters.js"

Vue.mixin(globalMixin)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false

// 举例：在vue文件夹中通过 this.$config.api接口调用config的属性
Vue.prototype.$config = config
Vue.prototype.$ajax = ajax
Vue.prototype.$utils = utils
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
