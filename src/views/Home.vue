<template>
    <div class="home">
        <Header />
        <div class="main">
            <div class="main-left"></div>
            <div class="main-content"></div>
            <div class="main-right"></div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    name: 'Home',
    components: { Header },
    data () {
        return {

        }
    },
    created () {

    },
    async mounted () {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    min-width: 1920px;
    min-height: 1080px;
    overflow: hidden;
    background: url("../assets/img/bg.png") center no-repeat;
    background-size: 100%;

    .main {
        width: 100%;
        height: 940px; // 1080 - 140
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;

        .main-left,
        .main-right {
            min-width: 440px;
            height: 100%;
            border: 1px solid #469221;

        }

        .main-content {
            flex: 1;
        }
    }
}
</style>
