<template>
	<div>
		<div class='view_main'>
			<image class='image_type' :src=imagePath mode='aspectFit'></image>
			<image class='button_type' src='../../static/images/拍照.png' @click="photograph"></image>
			
			<div class='view_card' v-for='(item,index) in searchResult' :key="index">
				<view >名称：{{item.name}}</view>
				<view>相似度：{{item.score}}</view>
				<image :src='item.baike_info.image_url' mode="aspectFit"></image>
				<view class="baike" @click="toWebView(item.baike_info.baike_url)">百度百科</view>	 
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"discover",
		data(){
			return {
				imagePath:'',
				accessToken:'',
				searchResult:[]
			}
		},
		mounted(){
			this.getAccessToken()
			
		},
		methods:{
			photograph(){
				const Token=uni.getStorageSync("Token")
				if(!Token){
					uni.navigateTo({
						url:'../../pages/login/login'
					})
				}else{
					this.getEncoding()
				}
			},
			getAccessToken(){
				let _this=this
				wx.request({
					url:'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=gAK16plpGY7p5YcIhtwo1vCP&client_secret=BUPXM4Oi4uqpwRIApfGaR8346XdmtBjn&',
					method:'POST',
					success(res){
						_this.accessToken=res.data.access_token
						console.log('get Access Token success!')
					}
				})
			},
			getEncoding(){
				let _this=this
				wx.chooseMedia({
					count:1,
					mediaType:['image'],
					sizeType:['compressed'],
					success(res){
						_this.imagePath=res.tempFiles[0].tempFilePath
						wx.showLoading({
							title:'加载中',
							mask:true
						})
						//将图片转化成base64格式编码
						wx.getFileSystemManager().readFile({
							filePath:_this.imagePath,
							encoding:"base64",
							success(res){
								const discoverUrl=`https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?access_token=${_this.accessToken}`
								wx.request({
									url:discoverUrl,
									method:'POST',
									header:{
										'Content-Type':'application/x-www-form-urlencoded'
									},
									data:{
										image:res.data,
										baike_num:6
									},
									dataType:'json',
									success(res) {
										console.log(res)
										wx.hideLoading()
										_this.searchResult=res.data.result
									},
									fail() {
										wx.showToast({
											title:'忙碌，请稍后再试',
											icon:'none',
											mask:true,
											duration:2000
										})
									}
								})
							},
							fail(res) {
								console.log(res)
							}
						})
					}
				})	
			},
			toWebView(e){
				uni.navigateTo({
					url:'./../baike/baike',
					success(res) {
						res.eventChannel.emit('getbaikeURL',{data:e})
					}
				})
			}
		}
	}
</script>

<style>
	.view_main{
		height:100%;
		width:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.image_type{
		margin-top:20px;
		height: 700rpx;
		width: 90%;
		border-radius: 25rpx;
		/* box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展] [阴影颜色] [投影方式]; */
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
	}
	
	.button_type{
		width:70rpx;
		height:70rpx;
		border-radius: 50%;
		background-color: #c1cfbf;
		margin-top: 10px;
		padding: 10px;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
	}
	
	.view_card{
		margin-top:20px;
		/* height: 200rpx; */
		width: 90%;
		border-radius: 25rpx;
		/* box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展] [阴影颜色] [投影方式]; */
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow:hidden;
	}
	
	.view_card image{
		margin: 10px 0 10px 0 ;
	}
	
	.baike{
		color: aqua;
		text-decoration:underline;
	}
</style>