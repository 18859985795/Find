<template>
	<div>
		<!-- <view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" next-margin="30px">
				<swiper-item>
					<image src="@/static/images/柴犬.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="@/static/images/柴犬.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">Cfsdfafasdasdsadsadsa</view>
				</swiper-item>
			</swiper>
		</view> -->
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change" autoplay next-margin='30px' circular>
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
					<image :src=item.url mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg'
				},{
					url:''
				}],
				current: 0,
				mode: 'round',
				dotsStyles:{
					bottom:12
				}
			}
		},
		methods:{
			change(e){
				this.current = e.detail.current;
			}
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
	.swiper-box{
		height: 700rpx;
		background-color: transparent;
	}
</style>
