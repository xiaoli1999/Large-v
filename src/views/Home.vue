<template>
    <div class="home">
        <Header />
        <div class="main">
            <div class="main-left">
                <Date />
                <Title title="全省" />
                <Tigger />
                <Title title="告警记录" />
                <AlarmLog />
                <Title title="轮播内容" />
                <Swiper />
            </div>
            <div class="main-content"></div>
            <div class="main-right"></div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Title from '../components/Title'
import Date from '../components/left/Date'
import Tigger from '../components/left/Tigger'
import AlarmLog from '../components/left/AlarmLog'
import Swiper from '../components/left/Swiper'

export default {
    name: 'Home',
    components: { Header, Title, Date, Tigger, AlarmLog, Swiper },
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
