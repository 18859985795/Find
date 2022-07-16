<template>
	<div>
		<view class="contain">
			<view class="example-body">
				<uni-file-picker limit="1" title="选择图片" @success="getImageURL"></uni-file-picker>
			</view>
			<view class="des">
				描述
			</view>
			<uni-easyinput type="textarea" v-model="imageData.description" placeholder="请输入内容"></uni-easyinput>
			<button class='btn' @click="upload">上传</button>
		</view>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageData:{
					username:"",
					imageURL:"",
					star:0,
					description:""
				},
				userdata:{}
			}
		},
		onShow(){
			this.getUserData()
			this.imageData.username=this.userdata.nickname
		},
		methods: {
			getImageURL(e) {
				this.imageData.imageURL=e.tempFiles[0].url
			},
			upload(){
				const db = uniCloud.database();
				db.collection('image').add(this.imageData).then(e=>{
					uni.showToast({
						title:"上传成功"
					})
					setTimeout(function(){
						uni.navigateBack()
					},1500)
				})
				console.log(this.imageData)
			},
			getUserData(){
				this.userdata=this.$store.state.userData
			}
		}
	}
</script>

<style>
	.contain {
		margin: 20px;
		margin-top: 10px;
	}

	,
	.example-body {
		/* padding: 10px; */
		padding-top: 0;
	}

	.des {
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.btn{
		margin-top: 120px;
		background-color: #00aaff;
		color: white;
	}
</style>
