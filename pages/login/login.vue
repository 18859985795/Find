<template>
	<view>
		<div class='bg'>
			<div class='login-box'>
				<div class='input-box'>
					<div class='input'>
						<image src="@/static/images/用户名.png" style="width: 25px;height: 25px;">
							<input type="text" placeholder="用户名" v-model="username">
					</div>
					<div class='input'>
						<image src="@/static/images/密码.png" style="width: 25px;height: 25px;">
							<input type="password" placeholder="密码" v-model='password'>
					</div>

					<button @click="signIn">登录</button>
				</div>
				<div class='signup'>还没有账户?<text @click="register">注册</text></div>
			</div>
		</div>

	</view>
</template>

<script>
	import eventBus from '@/eventBus.js'
	export default {
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			register(){
				uni.navigateTo({
					url:'./../register/register'
				})
			},
		async signIn(){
				const db = uniCloud.database();
				const res= await db.collection('users').where({username:this.username}).get()
				// console.log(res.result.data[0].username,res.result.data[0].password)
				if(this.username==res.result.data[0].username&&this.password==res.result.data[0].password){
					uni.setStorageSync('Token','15sda6d1sa5#4d5asa')
					eventBus.$emit('getUsers',res.result.data[0])
					uni.showToast({
						title:'登陆成功',
					})
					setTimeout(function(){
						uni.navigateBack()
					},1500)
				}else{
					uni.showToast({
						title:'登陆失败',
						icon:'error'
					})
				}
				
			}
		}
	}
</script>

<style>
	.bg {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('@/static/images/背景.jpeg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 100vh;
	}

	.login-box {
		display: flex;
		justify-content: center;
		align-content: space-around;
		flex-wrap: wrap;
		width: 500rpx;
		height: 800rpx;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 25rpx;
	}

	.input-box {
		width: 300rpx
	}

	.input-box image {
		position: absolute;
		left: 65px
	}
	.input{
		margin-bottom: 20px;
		border-bottom:1px solid white ;
	}
	button{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		color: #fff;
		background: linear-gradient(120deg,#a6c0fe 0%, #2E8B57 100%);
		/* background:linear-gradient(40deg, #99CC33, #FF6666,#336699,#FF0033); */
		width: 80px;
		height: 30px;
		border-radius: 25px;
	}
	text{
		color: aqua;
		text-decoration: underline;
	}
</style>
