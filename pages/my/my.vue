<template>
	<view class="">
		{{userdata.username}}
	</view>
</template>

<script>
	import eventBus from '@/eventBus.js'
	export default {
		name: "my",
		data(){
			return {
				userdata:{}
			}
		},
		onShow(){
			this.getUserData()
		},
		methods:{
			getUserData(){
				let _this=this
				eventBus.$on('getUsers',(data)=>{
					_this.userdata=data
				})
			}
		}
	}
</script>

<style>
</style>