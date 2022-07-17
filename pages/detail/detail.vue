<template>
	<div>
		<uni-card :cover="imageInfo.imageURL">
			<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
			<text class="uni-body">{{imageInfo.description}}</text>
			<view slot="actions" class="card-actions">
				<view class="card-actions-item" @click="actionsClick('分享')">
					<uni-icons type="pyq" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">分享</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('点赞')">
					<uni-icons type="heart" size="18" color="#999" ></uni-icons>
					<text class="card-actions-item-text">点赞</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('评论')">
					<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">评论</text>
				</view>
			</view>
		</uni-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
				avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				},
				imageInfo: {},
				id:''
			}
		},
		onLoad(id) {
			this.id=id.id
		},
		onShow(){
			this.getImageInfo()
		},
		methods: {
			actionsClick(text) {
				uni.showToast({
					title: text,
					icon: 'none'
				})
			},
			async getImageInfo() {
				let _this=this
				const db = uniCloud.database();
				const res = await db.collection('image').where({
					_id: _this.id
				}).get()
				this.imageInfo=res.result.data[0]
			}
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
</style>
