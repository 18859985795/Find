<template>
	<view class="">
		{{userdata.nickname}}
	</view>
</template>

<script>
	export default {
		name: "my",
		data(){
			return {
				userdata:{}
			}
		},
		onReady() {
			
		},
		onShow(){
			this.userdata=this.$store.state.userData
		},
		methods:{
		}
	}
</script>

<style>
</style>