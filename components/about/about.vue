<template>
	<div>
		  <movable-area class="movable-area">
		    <movable-view class="movable-view" direction="all" inertia=true out-of-bounds=true @click="about" @change="move">
				<image src="../../static/images/关于.png" mode='aspectFit'></image>
				关于
		    </movable-view>
		  </movable-area>

	</div>
</template>

<script>
	export default{
		name:'about',
		methods:{
			about(){
				console.log("你好")
				uni.showModal({
					title:'有相关问题请加微信:18859985795'
				})
			}
		}
	} 
</script>

<style>
	  .movable-area{
	    pointer-events:none;// 这个属性设置为none,让所有事件穿透过去
	    z-index: 100;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	  }
	  .movable-view{ 
	  	pointer-events:auto;// 重设为auto,覆盖父属性设置
	    height: 50px;
	    width: 50px;
	    background-color: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		border:1px solid black
	  }
	  image{
		  width:100%;
		  height:100%
	  }

</style>