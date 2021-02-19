<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    /* 防止被压缩 只显示一个 剩下的通过轮播
      在flex容器中，当空间不够的时候，flex-shrink不为0的元素会被压缩 
    */
    flex-shrink: 0; 
  }

  .slide img {
    width: 100%;
  }
</style>