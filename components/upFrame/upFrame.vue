<template>
	<view>
		<view class="upframe" :style="{ top: viewTop + 'px' }" @touchstart="touchStart" @touchmove="touchMove"
			@touchend="touchEnd">
			<view class="searchbox">
				<!-- 顶部线 -->
				<view class="line"></view>
				<!-- 搜索框 -->
				<view class="search">
					<input class="searchipt" type="text" maxlength="12" placeholder="查找地名,景观,建筑" @input="onKeyInput">
					<view @click="search">
						<image src='../../static/images/查找.png' mode="aspectFill" class="searchicon"></image>
					</view>
				</view>
			</view>
			<!-- 搜索附近 -->
			<view class='search_guide'>
				<view class="title">
					搜索附近
				</view>
				<view class="divide"></view>
				<view class="guide">
					<view class="guidez" hover-class="guidez-hover" @click="searchKW1">
						<image src='../../static/images/jiayouzhan.png' mode="aspectFit"></image>
						加油站
					</view>
					<view class="guidez" hover-class="guidez-hover" @click="searchKW2">
						<image src='../../static/images/jiudian.png' mode="aspectFit"></image>
						酒店
					</view>
					<view class="guidez" hover-class="guidez-hover" @click="searchKW3">
						<image src='../../static/images/meishi.png' mode="aspectFit"></image>
						美食
					</view>
					<view class="guidez" hover-class="guidez-hover" @click="searchKW4">
						<image src='../../static/images/bianlidian.png' mode="aspectFit"></image>
						便利店
					</view>
				</view>
			</view>
			<!-- 最近搜索 -->
			<view class="search_recent">
				<view class="title">
					最近搜索
				</view>
				<view class="divide"></view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		qqmapsdk
	} from '@/util/map.js'
	export default {
		name: "upFrame",
		data() {
			return {
				viewTop: -200,
				inputValue: '',
				markers: [],
				touchPoint: []
			}
		},
		methods: {
			touchStart(e) {
				this.touchPoint = [e.touches[0].pageX, e.touches[0].pageY]
			},
			touchMove(e) {
				var curPoint = [e.touches[0].pageX, e.touches[0].pageY]
				var addValue = Math.abs(curPoint[1] - this.touchPoint[1]) * 1.05
				//-60在下面，-200在上面
				//向下拖
				if (curPoint[1] >= this.touchPoint[1]) {
					if (this.viewTop >= -60) {
						return
					}
					var resTop = this.viewTop + addValue
					this.viewTop = resTop
				} else {
					//向上拖
					if (this.viewTop <= -200) {
						return
					}
					var resTop = this.viewTop - addValue
					this.viewTop = resTop
				}
				this.touchPoint[1] = curPoint[1]
			},
			touchEnd(e) {
				if (this.viewTop <= -110) {
					while (this.viewTop > -200) {
						this.viewTop = this.viewTop - 1.8
					}
				} else {
					while (this.viewTop < -60) {
						this.viewTop = this.viewTop + 1.8
					}
				}
			},
			onKeyInput(e) {
				this.inputValue = e.target.value
			},
			search() {
				var _this = this;
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					// console.log(Token)
					this.markers = []
					qqmapsdk.search({
						keyword: this.inputValue,
						success: function(res) {
							console.log(res);
							for (var i = 0; i < res.data.length; i++) {
								_this.markers.push({
									id: res.data[i].id - 0,
									latitude: res.data[i].location.lat,
									longitude: res.data[i].location.lng,
									callout: {
										content: res.data[i].title,
										display: 'BYCLICK',
										borderRadius: 8,
										borderWidth: 8
									},
									iconPath: "../../static/images/地点.png",
									alpha: 0.5,
									width: 45,
									height: 45
								})
							}
							_this.$emit('locationMarkers', _this.markers)
						},
						fail: function(res) {
							console.log(res);
						},
					});
				}

			},
			searchKW1() {
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					this.inputValue = '加油站'
					this.search()
				}

			},
			searchKW2() {
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					this.inputValue = '酒店'
					this.search()
				}

			},
			searchKW3() {
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					this.inputValue = '美食'
					this.search()
				}

			},
			searchKW4() {
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					this.inputValue = '便利店'
					this.search()
				}

			},

		}
	}
</script>

<style>
	.upframe {
		width: 100%;
		height: 200px;
		background-color: #fff8f8;
		position: relative;
		border-radius: 25rpx;
		/* 	top: -200px; */
	}

	.searchbox {
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		height: 4px;
		width: 125rpx;
		background-color: #7e7e7e;
		position: relative;
		top: 4px;
		border-radius: 25rpx;

	}

	.search {
		width: 100%;
		height: 100%;
		/* background-color: burlywood; */
		margin-top: 8px;
		display: flex;
		position: relative;
	}

	.searchipt {
		width: 570rpx;
		height: 84rpx;
		background-color: #e2e2e2;
		border-radius: 25rpx;
		margin: 0 auto;
		margin-top: 6.5px;
		padding-left: 8px;
	}

	.searchicon {
		height: 58rpx;
		width: 58rpx;
		position: absolute;
		left: 91%;
		bottom: 27%;
	}

	.search_guide {
		width: 100%;
		height: 220rpx;
		/* background-color: #55ffff; */
	}

	.title {
		font-size: 13px;
		font-weight: 200;
		padding-left: 20px;
		padding-top: 3px;
	}

	.divide {
		width: 700rpx;
		height: 1px;
		background-color: #d4d4d4;
		margin-left: 45rpx;
		margin-top: 5px
	}

	.guide {
		margin-top: 5px;
		width: 100%;
		height: 70px;
		/* background-color: #ffaaff; */
		display: flex;
		justify-content: space-around;
		font-size: 13px
	}

	.guidez {
		margin-top: 5px;
		width: 24%;
		height: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	image {
		width: 40%;
		height: 60%
	}

	.guidez::after {
		/* content: "";
		width:1px;
		height: 35px;
		background-color: #7e7e7e;
		position: relative;
		top: -33px;
		right:-39px */
	}

	.guidez-hover {
		position: relative;
		top: 3rpx;
		box-shadow: 0px 0px 4px #bbbec4 inset;
	}
</style>
