<template>
    <div class="tab-bar-item"  @click="itemClick">
        <div v-if="!isActive"><slot name='tab-bar-img'></slot></div>
        <div v-else><slot name='tab-bar-img-active'></slot></div>
        <div :style="activeStyle"><slot name='tab-bar-text'></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: "#f00",
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) != -1
            },
            activeStyle() {
                return this.isActive ? { color:this.activeColor } : ""
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        cursor: pointer;
    }

    .tab-bar-item img {
        height: 24px;
        width: 24px;
    }
</style>