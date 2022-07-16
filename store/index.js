import Vue from 'vue'
import vuex from "vuex"
Vue.use(vuex)

export default new vuex.Store({
	state:{
		userData:{}
	},
	mutations:{
		getuserData(state,step){
			state.userData=step
		}
	},
	
}) 
