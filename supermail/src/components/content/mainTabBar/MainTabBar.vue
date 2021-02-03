<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#ff5777">
            <!-- 在dom或者url中使用项目别名 需要加~ -->
            <img slot="tab-bar-img" src="~assets/image/tabbar/home.svg" alt="">
            <img slot="tab-bar-img-active" src="~assets/image/tabbar/home_active.svg" alt="">
            <span slot="tab-bar-text" class="tabbar-text">首页</span>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#ff5777">
            <img slot="tab-bar-img" src="~assets/image/tabbar/category.svg" alt="">
            <img slot="tab-bar-img-active" src="~assets/image/tabbar/category_active.svg" alt="">
            <span slot="tab-bar-text" class="tabbar-text" >分类</span>
        </tab-bar-item>
        <tab-bar-item path="/shopcart" activeColor="#ff5777">
            <img slot="tab-bar-img" src="~assets/image/tabbar/shopcart.svg" alt="">
            <img slot="tab-bar-img-active" src="~assets/image/tabbar/shopcart_active.svg" alt="">
            <span slot="tab-bar-text" class="tabbar-text">购物车</span>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#ff5777">
            <img slot="tab-bar-img" src="~assets/image/tabbar/profile.svg" alt="">
            <img slot="tab-bar-img-active" src="~assets/image/tabbar/profile_active.svg" alt="">
            <span slot="tab-bar-text" class="tabbar-text">我的</span>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    // 在js中使用项目别名 不需要加~ 
    import TabBar from 'components/common/tabBar/TabBar'
    import TabBarItem from 'components/common/tabBar/TabBarItem'
    export default {
        name: 'MainTabBar',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>

</style>