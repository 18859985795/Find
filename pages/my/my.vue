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
				<text>简介：一条修勾</text>
			</view>
		</view>
		<view class="contain">
			<view class="function-box1">
				<view class="line1">
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-xiangce" size="30"></uni-icons>
						<text>我的相册</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-shoucang" size="30"></uni-icons>
						<text>赞/收藏</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-liulanjilu" size="30"></uni-icons>
						<text>浏览记录</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-caogaoxiang" size="30"></uni-icons>
						<text>草稿箱</text>
					</view>
				</view>
				<view class="line1">
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-wodeqianbao" size="30"></uni-icons>
						<text>我的钱包</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-wodedingdan" size="30"></uni-icons>
						<text>我的订单</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-chuangzuozhongxin" size="30"></uni-icons>
						<text>创作中心</text>
					</view>
					<view class="option-box">
						<uni-icons custom-prefix="iconfont" type="icon-guanggao" size="30"></uni-icons>
						<text>广告中心</text>
					</view>
				</view>
			</view>
			<view class="function-box2">
				<view class="line1">
					<view class="application-box">
						<view class="application-text">
							<text class='notes1'>用户任务中心</text>
							<text class='notes2'>今日待领650积分</text>
						</view>
						<uni-icons custom-prefix="iconfont" type="icon-renwu" size="30"></uni-icons>
					</view>
					<view class="application-box">
						<view class="application-text">
							<text class='notes1'>渔场预测</text>
							<text class='notes2'>收集稀有生物拼图</text>
						</view>
						<uni-icons custom-prefix="iconfont" type="icon-yuchangyuce" size="30" class='icon1'></uni-icons>
					</view>
				</view>
				<view class="line1">
					<view class="application-box">
						<view class="application-text">
							<text class='notes1'>每日签到</text>
							<text class='notes2'>每日赚0.1元</text>
						</view>
						<uni-icons custom-prefix="iconfont" type="icon-qiandao" size="30"></uni-icons>
					</view>
					<view class="application-box">
						<view class="application-text">
							<text class='notes1'>高赞赏博文</text>
							<text class='notes2'>用积分赞赏博主</text>
						</view>
						<uni-icons custom-prefix="iconfont" type="icon-wenzhang" size="30" class='icon1'></uni-icons>
					</view>
				</view>


			</view>
			<view class="function-box3">
				<view class="money">
					<text>我的钱包</text>
					<view class="details">
						<text>查看详细</text>
						<uni-icons type="forward" size="12"></uni-icons>
					</view>
				</view>
				<view class="quota">
					<view class="quota-box">
						<text>2.31万</text>
						<text>可借额度</text>
					</view>
					<view class="quota-box">
						<text>2.84%</text>
						<text>官方理财</text>
					</view>
					<view class="quota-box">
						<text>5万</text>
						<text>信用卡</text>
					</view>
					<view class="quota-box">
						<text>****</text>
						<text>金融额度</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my",
		data() {
			return {
				userdata: {}
			}
		},
		onReady() {

		},
		onShow() {
			this.userdata = this.$store.state.userData
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style>
	.page {
		margin: 20rpx;
	}

	.info-box {
		display: flex;
	}

	.info-box image {
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}

	.text-box {
		margin-left: 30rpx;
	}

	.text-box .name1 {
		text-decoration: underline;
		color: #55ffff
	}

	.text-box text {
		font-size: 12px;
	}

	.contain {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.function-box1 {
		width: 700rpx;
		height: 400rpx;
		background-color: #f3f3f3;
		margin-top: 40rpx;
		border-radius: 25rpx;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
	}

	.line1 {
		display: flex;
	}

	.option-box {
		background-color: transparent;
		width: 175rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.option-box uni-icons {
		margin-top: 30rpx;
	}

	.option-box text {
		margin-top: 4px;
		font-size: 10px;
	}

	.function-box2 {
		width: 700rpx;
		height: 250rpx;
		background-color: #f3f3f3;
		margin-top: 40rpx;
		border-radius: 25rpx;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
	}

	.application-box {
		height: 125rpx;
		width: 350rpx;
		/* background-color: #1e34ff; */
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}
	.application-text{
		display: flex;
		flex-direction: column;
		margin-left: 15px;
		margin-right: 10px;
	}
	/* .application-text text{
		font-size: 13px
	} */
	.notes1{
		font-size: 14px;
		margin-bottom: 5px;
	}
	
	.notes2{
		font-size: 9px;
		color: #ff5500;
	}
	
	.application-box uni-icons{
		position: absolute;
		left:300rpx
	}
	
	.application-box uni-icons.icon1{
		position: absolute;
		left: 600rpx;
	}
	
	.function-box3 {
		width: 700rpx;
		height: 200rpx;
		background-color: #f3f3f3;
		margin-top: 40rpx;
		border-radius: 25rpx;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
	}
	.money{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.money text:nth-child(1){
		font-size: 16px;
		margin-top: 5px;
		margin-left: 10px;
	}
	
	.money .details text{
		color: #969696;
		font-size: 11px;
	}
	
	.money .details uni-icons{
		margin-right: 5px;
	}
	
	
	.quota{
		display: flex;
		justify-content: space-around;
		/* align-items: center; */
	}
	
	.quota-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 8px;
	}
	
	.quota-box text:nth-child(2){
		margin-top: 5px;
		font-size: 11px
	}
</style>
