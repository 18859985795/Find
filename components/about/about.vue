<template>
	<div>
		  <movable-area class="movable-area">
		    <movable-view class="movable-view" direction="all">
		    </movable-view>
		  </movable-area>

	</div>
</template>

<script>
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
	    background: red;
	  }

</style>