<template>
	<view>
		<view class="upframe" :style="{ top: viewTop + 'px' }">
			<view class="searchbox">
				<!-- 顶部线 -->
				<view class="line"></view>
				<!-- 搜索框 -->
				<view class="search">
					<input class="searchipt" type="text" maxlength="12" placeholder="查找地名,景观,建筑" @input="onKeyInput">
					<view @click="search" >
						<image src='../../static/images/查找.png' mode="aspectFill" class="searchicon"></image>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {qqmapsdk} from '@/main.js'
	export default {
		name: "upFrame",
		data() {
			return {
				viewTop: -200,
				inputValue:'',
				markers:[]
			}
		},
		methods:{
			onKeyInput(e){
				this.inputValue=e.target.value
			},
			search(){
				var _this = this;
				console.log('sdads'),
				qqmapsdk.search({
					keyword: this.inputValue,
					success: function(res) {
						console.log(res);
						for(var i=0;i<res.data.length;i++){
							_this.markers.push({
								id:res.data[i].id - 0,
								latitude:res.data[i].location.lat,
								longitude:res.data[i].location.lng,
								callout:{
									content:res.data[i].title,
									display:'BYCLICK',
									borderRadius:8,
									borderWidth:8
								},
								iconPath:"../../static/images/地点.png",
								alpha:0.5,
								width:45,
								height:45
							})
						}
						_this.$emit('locationMarkers',_this.markers)
					},
					fail: function(res) {
						console.log(res);
					},
				});
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
	
</style>
