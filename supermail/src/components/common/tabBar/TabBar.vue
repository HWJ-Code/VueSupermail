
<template>
    <div id="tabBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        components: {

        }
    }
</script>

<style>
    #tabBar {
        display: flex;
        height: 49px;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: center;
    }
</style>