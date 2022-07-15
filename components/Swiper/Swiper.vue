<template>
	<div>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change" autoplay circular>
				<swiper-item v-for="(item ,index) in info" :key="info._id" @click="toDetail">
					<view class="swiper-item">
						<image :src=item.imageURL mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</div>
</template>

<script>
	export default {
		props:['ImageURL'],
		data() {
			return {
				info: [],
				current: 0,
				mode: 'round',
				dotsStyles: {
					bottom: 12
				}
			}
		},
		watch:{
			ImageURL(curVal,oldVal){
				if(curVal){
					this.info=curVal
				}
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			toDetail() {
				var _this = this;
				const Token = uni.getStorageSync("Token")
				if (!Token) {
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				} else {
					uni.navigateTo({
						url:'../../pages/detail/detail'
					})
				}
			},
			
		}
	}
</script>

<style>
	/* .uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 700rpx;
	} */
	.swiper-box {
		height: 700rpx;
		background-color: transparent;
	}
</style>
