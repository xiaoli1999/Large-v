<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    data () {
        return {}
    },
    mounted () {
        document.title = '大屏数据可视化'
    }
}
</script>

<style lang="less">
#app {
    position: relative;
}
</style>
