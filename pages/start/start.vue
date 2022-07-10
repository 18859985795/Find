<template>
	<div>
		<div class='contain'>
			<button class="go" @click="go">跳过{{count}}s</button>
			<image src="@/static/images/柴犬.jpg" mode=""></image>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				count:2
			}
		},
		onLoad() {
			this.countDown()
		},
		methods:{
			go(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			countDown(){
				let _this=this
				this.interval=setInterval(function(){
					_this.count--
					if(!_this.count){
						uni.switchTab({
							url:'/pages/index/index'
						})
						clearInterval(_this.interval)
					}
				},1000)
			}
		}
	}
</script>

<style>
	.contain{
		width:100%;
		height:100%
	}
	image{
		width:100%;
		height:100%;
		position: absolute;
		left: 0rpx;
		top: 0rpx;
		z-index: -1;
	}
	.go{
		width:70px;
		height:30px;
		z-index: 9;
		position: absolute;
		left:550rpx;
		top:45rpx;
		border-radius: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		background-color: #c8c8c8;	
	}
</style>