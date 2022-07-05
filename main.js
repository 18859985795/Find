import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

import QQMapWX from '@/static/qqmap-wx-jssdk.js'
// 实例化API核心类
const qqmapsdk = new QQMapWX({
	key: '453BZ-HCT63-QPJ3E-32G6S-ZRGQ6-HSBXO'
})
export {qqmapsdk}
