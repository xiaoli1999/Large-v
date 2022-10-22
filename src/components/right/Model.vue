<template>
    <div id="model" class="model">
    </div>
</template>

<script>
import * as echarts from '_echarts@5.4.0@echarts'

export default {
    name: 'Model',
    data () {
        return {
            modelChart: null
        }
    },
    mounted () {
        this.initModelChart()
    },
    methods: {
        initModelChart () {
            const mapDom = document.getElementById('model')
            const myChart = echarts.init(mapDom)
            myChart.clear()
            this.modelChart = myChart

            const option = {
                legend: {
                    itemHeight: 12, itemWidth: 12,
                    data: [
                        {
                            name: '停机量',
                            icon: 'rect',
                            textStyle: { color: '#fff' },
                            itemStyle: { color: '#4FA5FB' }
                        },
                        {
                            name: '复机量',
                            icon: 'rect',
                            textStyle: { color: '#fff' },
                            itemStyle: { color: '#F8B83D' }
                        },
                        {
                            name: '复机率',
                            textStyle: { color: '#fff' },
                            itemStyle: { color: '#52C6FF' }
                        }
                    ],
                    right: '15%',
                    top: '5%',
                    textStyle: { fontSize: '12', color: '#fff' }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid: {
                    top: '20%',
                    left: '4%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['模型一', '模型二', '模型三', '模型四', '模型五'],
                        nameTextStyle: {
                            color: '#fff'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#f4f4f4'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'blue',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: { show: false },
                        axisLabel: {
                            show: true,
                            color: '#ABB0B8'
                        }
                    },
                    {
                        min: 0, // 最小百分比
                        max: 100, // 最大百分比
                        type: 'value',
                        // name: '单位（%）',
                        nameGap: 35,
                        nameTextStyle: { color: '#666666' },
                        axisTick: { show: false },
                        axisLabel: {
                            show: true,
                            interval: 0, // 使x轴文字显示全
                            color: '#ABB0B8',
                            formatter: '{value}%' // y轴数值，带百分号
                        },
                        axisLine: { show: false, lineStyle: { color: '#ABB0B8' } },
                        splitLine: { show: true, lineStyle: { type: 'dashed', color: '#f7f8fa20' } }
                    }
                ],
                series: [
                    {
                        name: '停机量',
                        type: 'bar',
                        data: [250, 320, 200, 180, 120],
                        barWidth: 10, // 柱状图的宽度
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0, // 右
                                y: 0, // 下
                                x2: 0, // 左
                                y2: 1, // 上
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(96,112,128,0.1)' // 70% 处的颜色
                                    },
                                    {
                                        offset: 0,
                                        color: '#4FA7FF ' // 0% 处的颜色
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: '复机量',
                        type: 'bar',
                        data: [150, 225, 240, 275, 75],
                        barWidth: 10, // 柱状图的宽度
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0, // 右
                                y: 0, // 下
                                x2: 0, // 左
                                y2: 1, // 上
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgba(89,66,31,0.25)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0,
                                        color: '#FFBD3E ' // 70% 处的颜色
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: '复机率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [80, 98, 80, 84, 75],
                        itemStyle: {
                            color: '#52C6FF'
                        }
                    }
                ]
            }
            this.modelChart.setOption(option)
        }
    }
}
</script>

<style lang="less" scoped>
.model {
    position: relative;
    width: 440px;
    height: 208px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;
}
</style>
