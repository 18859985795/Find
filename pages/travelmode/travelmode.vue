<template>
	<div>
		<view class="flex">
			<view class="mode" hover-class="mode-hover" @click="driving">
				驾车
				<image src='../../static/images/driving.png' mode="scaleToFill"></image> 
			</view>
			<view class="mode" hover-class="mode-hover" @click="walking">
				步行
				<image src='../../static/images/walking.png' mode="scaleToFill"></image>
			</view> 
		</view>
		<view class="flex">
			<view class="mode" hover-class="mode-hover" @click="bicycling">
				骑行
				<image src='../../static/images/bicycling.png' mode="scaleToFill"></image>
			</view>
			<view class="mode" hover-class="mode-hover" @click="transit">
				公交
				<image src='../../static/images/transit.png' mode="scaleToFill"></image>
			</view> 
		</view>
		
	</div>
</template>

<script>
	import eventBus from '@/eventBus.js'
	export default {
		name: "travelmode",
		data() {
			return {
			}
		},
		methods:{
			driving(){
				eventBus.$emit('choose','driving')
				uni.navigateBack({
					
				})
			},
			walking(){
				eventBus.$emit('choose','walking')
				uni.navigateBack({
					
				})
			},
			bicycling(){
				eventBus.$emit('choose','bicycling')
				uni.navigateBack({
					
				})
			},
			transit(){
				eventBus.$emit('choose','transit')
				uni.navigateBack({
					
				})
			}
		},
	}
</script>

<style>
	.flex{
		display: flex;
	}
	.mode{
		width: 375rpx;
		height:375rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 150%
	}
	.mode-hover{
	  position: relative;
	  top: 3rpx;
	  box-shadow:0px 0px 15px #bbbec4 inset;
	}
	image{
		width:50%;
		height:50%;
		margin-top: 10px;
	}
	

</style>