<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="用户名" name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入用户名"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="text" v-model="formData.password" placeholder="请输入密码"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="昵称" name="nickname">
				<uni-easyinput type="text" v-model="formData.nickname" placeholder="请输入昵称"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="手机号" name="phone">
				<uni-easyinput type="text" v-model="formData.phone" placeholder="请输入手机号"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<uni-easyinput type="text" v-model="formData.email" placeholder="请输入邮箱"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">Submit</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username: '',
					password: '',
					nickname: '',
					phone: '',
					email: '',
					score:0
				},
				rules: {
					username: {
						rules: [{
								require: true,
								errorMessage: '请输入用户名'
							},
							{
								minLength: 3,
								maxLength: 10,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					password: {
						rules: [{
								require: true,
								errorMessage: '请输入密码'
							},
							{
								minLength: 6,
								maxLength: 15,
								errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					nickname: {
						rules: [{
							require: true,
							errorMessage: '请输入昵称'
						}, {
							minLength: 1,
							maxLength: 7,
							errorMessage: '昵称长度在 {minLength} 到 {maxLength} 个字符',
						}]
					},
					phone: {
						rules: [{
							format: 'number',
							errorMessage: '请输入正确的手机号'
						}]
					},
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱'
						}]
					}

				}
			}
		},
		methods: {
			submit(form) {
				let _this=this
				this.$refs.form.validate().then(res => {
					const db = uniCloud.database();
					db.collection('users').add(_this.formData).then(e=>{
						uni.showToast({
							title:"注册成功"
						})
						setTimeout(function(){
							uni.navigateBack()
						},1500)
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
				
			}
		}
	}
</script>

<style>
</style>
