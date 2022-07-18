<template>
	<view class="page">
		<view class="info-box">
			<image src="@/static/images/狗.jpg" mode=""></image>
			<view class="text-box">
				<view class="name1" v-if='userdata.nickname===undefined?true:false' @click="toLogin">
					未登录
				</view>
				<view class="name2" v-else>
					{{userdata.nickname}}
				</view>
				<text>简介:XXXXXXXXXXX</text>
			</view>
		</view>
		<view class="contain">
			<view class="function-box">
				
			</view>
			<view class="function-box">
				
			</view>
			<view class="function-box">
				
			</view>
		</view>
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
			toLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>
	.page{
		margin: 20rpx;
	}
	.info-box{
		display: flex;
	}
	.info-box image{
		width: 50px;
		height:50px;
		border-radius: 25px;
	}
	
	.text-box{
		margin-left: 30rpx;
	}
	.text-box .name1{
		text-decoration:underline;
		color:#55ffff
	}
	.text-box text{
		font-size: 12px;
	}
	
	.contain{
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.function-box{
		width: 700rpx;
		height: 300rpx;
		background-color: #d8d8d8;
		margin-top: 40rpx;
		border-radius: 25rpx;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
	}
</style>