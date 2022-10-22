<template>
    <div id="map" class="map">
<!--        https://geo.datav.aliyun.com/areas_v2/bound/140000_full.json-->
    </div>
</template>

<script>
import * as echarts from 'echarts'
import { getJson } from '@/api'

export default {
    name: 'Map',
    data () {
        return {
            map: null,
            mapData: null,
            cityName: ''
        }
    },
    async mounted () {
        await this.initData()
        this.initMap()
    },
    methods: {
        async initData () {
            const { data } = await getJson()
            this.mapData = data
        },
        initMap () {
            echarts.registerMap('shanxi', this.mapData)
            const mapDom = document.getElementById('map')
            const myChart = echarts.init(mapDom)
            myChart.clear()
            this.map = myChart

            const option = {
                tooltip: {
                    show: true, // 是否显示提示框组件，包括提示框浮层和 axisPointer。
                    trigger: 'item', // 触发类型。item,axis,none
                    enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，
                    showContent: true, // 是否显示提示框浮层
                    triggerOn: 'click', // 提示框触发的条件(mousemove|click|none)
                    showDelay: 0, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
                    textStyle: {
                        color: 'transparent',
                        fontSize: 12
                    },
                    padding: [0, 0],
                    hideDelay: 2000, // 浮层隐藏的延迟
                    formatter: (o) => `
                                     <div class="tip">
                                        <div>停机量 <span>1234</span></div>
                                        <div>复机量 <span>1234</span></div>
                                        <div>复机率 <span>90%</span></div>
                                        <span></span>
                                    </div>`,
                    // backgroundColor: 'green',  //提示框浮层的背景颜色。
                    // borderColor: "white",  //图形的描边颜色
                    // borderWidth: 2,
                    alwaysShowContent: true,
                    transitionDuration: 1 // 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                },
                series: [{
                    name: 'shanxi',
                    type: 'map',
                    mapType: 'shanxi',
                    zoom: 1,
                    roam: false, // 是否缩放
                    selectedMode: false, // single 表示单选;multiple表示多选 默认flase不选
                    label: {
                        normal: {
                            textStyle: { fontSize: 14, color: '#fff' }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff', // 图形的描边颜色
                            borderWidth: 2, // 描边线宽。为 0 时无描边。
                            borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                            areaColor: '#306CB1', // 图形的颜色 #eee
                            shadowBlur: 8, // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                            shadowColor: '#261D09', // 阴影色
                            shadowOffsetX: 8, // X轴阴影
                            shadowOffsetY: 8, // Y轴阴影

                            label: {
                                show: true,
                                textStyle: {
                                    color: 'white',
                                    fontSize: 14
                                }
                            }
                        },
                        // 鼠标移入时
                        emphasis: {
                            borderColor: '#FFE49C',
                            borderWidth: '4',
                            areaColor: '#5A85A8'
                        }
                    }
                }],
                geo: [
                    {
                        show: true,
                        map: 'shanxi',
                        label: {
                            show: false
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#000',
                                borderWidth: 8, // 设置外层边框
                                borderColor: '#FDD45E'
                            }
                        }
                    },
                    {
                        map: 'shanxi',
                        top: '10%',
                        right: '-0.05%',
                        zlevel: 0,
                        itemStyle: {
                            color: '#134DA5', // 背景
                            borderWidth: '4', // 边框宽度
                            borderColor: '#FFE49C' // 边框颜色
                        }
                    },

                    {
                        map: 'shanxi',
                        top: '10%',
                        right: '-1.3%',
                        zlevel: -3,
                        itemStyle: {
                            color: '#000', // 背景
                            borderWidth: '4', // 边框宽度
                            borderColor: '#000' // 边框颜色
                        }
                    },
                    {
                        map: 'shanxi',
                        top: '10.1%',
                        right: '-1.6%',
                        zlevel: -2,
                        itemStyle: {
                            color: '#1D5DBDaa', // 背景
                            borderWidth: '4', // 边框宽度
                            borderColor: '#1D5DBDaa' // 边框颜色
                        }
                    },
                    {
                        map: 'shanxi',
                        top: '10.2%',
                        right: '-1.9%',
                        zlevel: -1,
                        itemStyle: {
                            color: '#2156A580', // 背景
                            borderWidth: '4', // 边框宽度
                            borderColor: '#2156A580' // 边框颜色
                        }
                    },
                    {
                        map: 'shanxi',
                        top: '10.3%',
                        right: '-2.2%',
                        zlevel: 0,
                        itemStyle: {
                            color: '#11458680', // 背景
                            borderWidth: '4', // 边框宽度
                            borderColor: '#11458680' // 边框颜色
                        }
                    }
                ]
            }
            this.map.setOption(option)

            this.map.on('click', function (res) {
                this.dispatchAction({
                    type: 'downplay',
                    name: this.cityName
                })
                this.dispatchAction({
                    type: 'hideTip',
                    name: this.cityName
                })
                this.cityName = res.name
                // 当前下标高亮
                this.dispatchAction({
                    type: 'highlight',
                    name: this.cityName
                })
                this.dispatchAction({
                    type: 'showTip',
                    name: this.cityName
                })
            })
            // this.map.on('mousemove', function (res) {
            //     console.log(res)
            // })
        }
    }
}
</script>

<style lang="less">
.tip {
    position: relative;
    width: 418px;
    height: 42px;
    background: linear-gradient(270deg, #2F7ABE 0%, #3560A6 56%, #598BFF 100%);
    box-shadow: 0 2px 11px 0 rgba(255,255,255,0.5);
    border: 2px solid;
    border-image: linear-gradient(270deg, rgba(153, 199, 255, 0.95), rgba(161, 207, 255, 0), rgba(185, 213, 255, 1)) 2 2;
    display: flex;
    align-items: center;
    //color: transparent;

    > div {
        flex: 1;
        height: 18px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        border-right: 1px solid #92C0FF;
        cursor: pointer;

        > span {
            color: #FFE06B;
        }
    }

    > div:last-child {
        border: 0;
    }

    //> span {
    //    display: block;
    //    position: absolute;
    //    width: 33px;
    //    height: 37px;
    //    top: -46px;
    //    right: -34px;
    //    z-index: -1;
    //    background: url("../assets/img/map-marker.png") no-repeat;
    //    background-size: 100%;
    //}
}
</style>

<style lang="less" scoped>
.map {
    position: absolute;
    width: 700px;
    height: 800px;
    inset: 0;
    bottom: 240px;
    margin: auto;
    z-index: 100;
}
</style>
