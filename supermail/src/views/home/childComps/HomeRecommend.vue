<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index"> 
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
  .home-recommend {
    display: flex;
    font-size: 12px;

    margin-top: 8px;
    border-bottom: 8px solid #f2f2f2;
    padding-bottom: 25px;
  }

  .recommend-item{
    flex: 1;
    text-align: center;
  }

  .recommend-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 8px;
  }

</style>