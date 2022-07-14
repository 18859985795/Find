<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
				activeColor="#00aaff"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<div class='swiper-box'></div>
				<Swiper></Swiper>
			</view>
			<view v-show="current === 1">
				<div class='swiper-box'></div>
				<Swiper></Swiper>
			</view>
		</view>
		
		<view class="btn">
			<button type="primary">分享</button>
		</view>
		
	</view>
</template>

<script>
	import Swiper from "@/components/Swiper/Swiper.vue"
	export default {
		data() {
			return {
				items: ['最新', '最热'],
				current: 0
			}
		},
		components: {
			Swiper
		},
		methods: {
			onClickItem(e) {
			 if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style>
	
	.uni-common-mt {
		margin-top: 15px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		text-align: center;
	}
	.swiper-box{
		/* height: 400rpx; */
		margin-top: 50rpx;
		width: 610rpx;
		background-color: #580999;
	}
	
	.btn{
		position: absolute;
		bottom: 55rpx;
		left:255rpx;
		width: 250rpx;
		
	}
	.btn button {
		background-color: #00aaff;
		border-radius: 25rpx
	}
</style>
