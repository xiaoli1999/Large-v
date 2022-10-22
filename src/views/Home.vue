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
            <div class="main-content">
                <img class="map-wrap" src="../assets/img/map-wrap.png" alt="">
                <img class="map-bottom" src="../assets/img/map-bottom.png" alt="">
                <Map />
            </div>
            <div class="main-right">
                <Title title="区县纬度" style="margin-top: 0" />
                <Area />
                <Title title="时间轴展示" />
                <Time />
                <Title title="模型纬度" />
                <Model />
                <Title title="防诈建议" />
                <Suggest />
            </div>
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

import Map from '../components/Map'

import Area from '../components/right/Area'
import Time from '../components/right/Time'
import Model from '../components/right/Model'
import Suggest from '../components/right/Suggest'

export default {
    name: 'Home',
    components: { Header, Title, Date, Tigger, AlarmLog, Swiper, Map, Area, Model, Time, Suggest },
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
            //border: 1px solid #469221;

        }

        .main-content {
            position: relative;
            flex: 1;
            height: 100%;

            .map-wrap {
                position: absolute;
                width: 994px;
                height: 540px;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
            }

            .map-bottom {
                position: absolute;
                width: 646px;
                height: 405px;
                bottom: 60px;
                left: calc(50% - 323px);
            }
        }
    }
}
</style>
