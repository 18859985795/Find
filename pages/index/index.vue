<template>
	<view class="view">
		<map class="map"></map>
		<upFrame></upFrame>
	</view>
		
</template>

<script>
	import upFrame from "@/components/upFrame/upFrame.vue"
	export default {
		name: 'index',
		data() {
			return {
				
			}
		},
		components:{upFrame},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	.view{
		height: 100%;
		width: 100%;
	}
	.map{
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
	}
</style>
