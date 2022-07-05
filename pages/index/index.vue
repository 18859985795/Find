<template>
	<view class="view">
		<map class="map" :markers=markers :longitude=longitude :latitude=latitude></map>
		<upFrame @locationMarkers='getMarkers'></upFrame>
	</view>

</template>

<script>
	import upFrame from "@/components/upFrame/upFrame.vue"
	export default {
		name: 'index',
		data() {
			return {
				markers: [],
				longitude:0,
				latitude:0
			}
		},
		components: {
			upFrame
		},
		mounted(){
			this.getLocation()
		},
		methods: {
			getMarkers(data) {
				this.markers = data
			},
			getLocation(){
				let _this=this
				uni.getLocation({
					type: 'gcj02',
					success: function (res) {
						_this.longitude=res.longitude;
						_this.latitude=res.latitude;
					}
				});
			}
		},
		
	}
</script>

<style>
	page {
		height: 100%;
	}

	.view {
		height: 100%;
		width: 100%;
	}

	.map {
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
	}
</style>
