<template>
	<view class="view">
		<map class="map" :markers=markers :longitude=longitude :latitude=latitude show-location :polyline=polyline
			@callouttap='toLocation'></map>
		<upFrame @locationMarkers='getMarkers'></upFrame>
		<about></about>
	</view>

</template>

<script>
	import upFrame from "@/components/upFrame/upFrame.vue"
	import eventBus from '@/eventBus.js'
	import about from '@/components/about/about.vue'
	import {
		qqmapsdk
	} from '@/main.js'
	export default {
		name: 'index',
		data() {
			return {
				markers: [],
				polyline: [],
				longitude: 0,
				latitude: 0,
				tolongitude: 0,
				tolatitude: 0,
				markerId: 0,
				mode:''
			}
		},
		components: {
			upFrame,
			about
		},
		mounted() {
			this.getLocation()
		},
		onShow(){
			this.route()
		},
		methods: {
			getMarkers(data) {
				this.markers = data
			},
			getLocation() {
				let _this = this
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						_this.longitude = res.longitude;
						_this.latitude = res.latitude;
					}
				});
			},
			toLocation(e) {
				uni.navigateTo({
					url:'./../travelmode/travelmode'
				})
				eventBus.$on('choose',(data)=>{
					this.mode=data
				})
				this.polyline=[]
				this.markerId = e.detail.markerId;
				for (var i = 0; i < this.markers.length; i++) {
					// #ifdef MP
					if (this.markers[i].id === this.markerId) {
						this.tolongitude = this.markers[i].longitude
						this.tolatitude = this.markers[i].latitude
					}
					// #endif
				}
				// console.log(this.tolongitude)
				// console.log(this.tolatitude)
				
			},
			route(){
				var _this = this;
				qqmapsdk.direction({
					mode: _this.mode,
					from: {
						latitude: _this.latitude,
						longitude: _this.longitude
					},
					to: {
						latitude: _this.tolatitude,
						longitude: _this.tolongitude
					},
					success: function(res) {
						var ret = res;
						var coors = ret.result.routes[0].polyline,
							pl = [];
						//坐标解压（返回的点串坐标，通过前向差分进行压缩）
						var kr = 1000000;
						for (var i = 2; i < coors.length; i++) {
							coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
						}
						//将解压后的坐标放入点串数组pl中
						for (var i = 0; i < coors.length; i += 2) {
							pl.push({
								latitude: coors[i],
								longitude: coors[i + 1]
							})
						}
						_this.polyline.push({
							points: pl,
							color: '#00ff00',
							width: 4,
							arrowLine:true
						})
					},
				})
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
