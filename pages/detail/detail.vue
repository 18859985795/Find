<template>
	<div>
		<uni-card :cover="imageInfo.imageURL">
			<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
			<text class="uni-body">{{imageInfo.description}}</text>
			<view slot="actions" class="card-actions">
				<view class="card-actions-item" @click="actionsShare">
					<uni-icons type="pyq" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">分享</text>
				</view>
				<view class="card-actions-item" @click="actionsSupport">
					<uni-icons type="heart" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">点赞{{imageInfo.star}}</text>
				</view>
				<view class="card-actions-item" @click="actionsComment">
					<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">评论</text>
				</view>
			</view>
		</uni-card>

		<view class="example-body">
			<view class="tag-view">
				<uni-tag :inverted="true" text="评论" />
			</view>
		</view>

		<view v-for="(item,index) in imageInfo.comment" :key="index">
			<uni-card :extra=imageInfo.date :title="item">
			</uni-card>
		</view>



		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="评论内容" value="" placeholder="请输入内容"
				@confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
			<uni-popup-share></uni-popup-share>
		</uni-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageInfo: {},
				id: ''
			}
		},
		onLoad(id) {
			this.id = id.id
		},
		onShow() {
			this.getImageInfo()
		},
		methods: {
			async getImageInfo() {
				let _this = this
				const db = uniCloud.database();
				const res = await db.collection('image').where({
					_id: _this.id
				}).get()
				this.imageInfo = res.result.data[0]
			},
			actionsShare() {
				this.$refs.share.open()
			},
			actionsSupport() {
				let _this = this
				const db = uniCloud.database();
				db.collection('image').doc(_this.id).update({
					star: _this.imageInfo.star + 1
				}).then(e => {
					_this.imageInfo.star++
					uni.showToast({
						title: "点赞成功"
					})
					setTimeout(function() {
						uni.hideToast()
					}, 1500)
				})
			},
			actionsComment() {
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '评论成功'
				})
				let _this = this
				const db = uniCloud.database();
				db.collection('image').doc(_this.id).update({
					comment: _this.imageInfo.comment.push(val)
				})
				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 1000)
			},
		}
	}
</script>

<style>
	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}

	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}

	.example-body {
		margin-left: 40rpx;
	}
</style>
