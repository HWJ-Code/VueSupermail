<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() { //组件创建时就去请求数据
      //getHomeMultidata()返回的是promise对象 可以通过.then获取
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list; //将返回的数据保存起来
        this.recommends = res.data.recommend.list; 
        
      })
    }
  
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>