<template>
	<view>
		<!-- <image src="../../static/images/bianlidian.png" ></image> -->
		<web-view :src=baikeURL ></web-view>
	</view>
</template>

<script>
	export default {
		name: 'baike',
		data() {
			return {
				baikeURL: '',
			}
		},
		onLoad(option) {
			let _this=this
			// #ifdef APP-NVUE
			const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
			// #endif
			// #ifndef APP-NVUE
			const eventChannel = this.getOpenerEventChannel();
			// #endif
			eventChannel.on('getbaikeURL', function(data) {
				_this.baikeURL = data.data
				_this.baikeURL = "https://" + _this.baikeURL.substr(7)
			})
		},
		methods: {}
	}
</script>

<style>
</style>
