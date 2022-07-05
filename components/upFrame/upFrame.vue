<template>
	<view>
		<view class="upframe" :style="{ top: viewTop + 'px' }">
			<view class="searchbox">
				<!-- 顶部线 -->
				<view class="line"></view>
				<!-- 搜索框 -->
				<view class="search">
					<input class="searchipt" type="text" maxlength="12" placeholder="查找地名,景观,建筑">
					<image src='../../static/images/查找.png' class="searchicon"></image>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: "upFrame",
		data() {
			return {
				viewTop: -200,
			}
		}
	}
</script>

<style>
	.upframe {
		width: 100%;
		height: 200px;
		background-color: #fff8f8;
		position: relative;
		border-radius: 25rpx;
	/* 	top: -200px; */
	}

	.searchbox {
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		height: 4px;
		width: 125rpx;
		background-color: #7e7e7e;
		position: relative;
		top: 4px;
		border-radius: 25rpx;

	}

	.search {
		width: 100%;
		height: 100%;
		background-color: burlywood;
		margin-top: 8px;
		display: flex;
		position: relative;
	}

	.searchipt {
		width: 650rpx;
		height: 84rpx;
		background-color: #e2e2e2;
		border-radius: 25rpx;
		margin: 0 auto;
		margin-top: 6.5px;
		padding-left: 10px;
	}

	.searchicon {
		height:58rpx;
		width:58rpx;
		position: absolute;
		left:84%;
		bottom:27%;
	}
</style>
