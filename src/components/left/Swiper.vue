<template>
    <div class="Swiper">
        <Carousel :value="0">
            <CarouselItem>
                <div class="item table">
                    <div class="table-row row1">
                        <div class="table-col1">管控方式</div>
                        <div class="line-h"></div>
                        <div class="table-col2">大数据未关停原因</div>
                        <div class="line-h"></div>
                        <div class="table-col3">计数</div>
                        <div class="line-h"></div>
                        <div class="table-col4">后续建议</div>
                    </div>
                    <div class="table-row row2">
                        <div class="table-col1">目前大数据平台无法通过模型优化解决</div>
                        <div class="line-h"></div>
                        <div class="table-col2">
                            <div style="height: 39px;">有话单，但无诈骗用户行为特征</div>
                            <p class="line-w"></p>
                            <div style="height: 20px;">无话单</div>
                            <p class="line-w"></p>
                            <div style="height: 39px;">通话行为正常，未达模型阈值，且重复度高</div>
                        </div>
                        <div class="line-h"></div>
                        <div class="table-col3">
                            <div style="height: 39px;">11</div>
                            <p class="line-w"></p>
                            <div style="height: 20px;">4</div>
                            <p class="line-w"></p>
                            <div style="height: 39px;">1</div>
                        </div>
                        <div class="line-h"></div>
                        <div class="table-col4">暂时无法处理</div>
                    </div>
                    <div class="table-row row3">
                        <div class="table-col1">疑似营销行为</div>
                        <div class="line-h"></div>
                        <div class="table-col2">大规模市内通话</div>
                        <div class="line-h"></div>
                        <div class="table-col3">4</div>
                        <div class="line-h"></div>
                        <div class="table-col4">建议建立营销模型，对符合条件的用户进行管控</div>
                    </div>
                    <div class="line-w"></div>
                    <div class="table-row row3">
                        <div class="table-col1">可通过模型优化解决</div>
                        <div class="line-h"></div>
                        <div class="table-col2">疑似呼转涉诈号码</div>
                        <div class="line-h"></div>
                        <div class="table-col3">2</div>
                        <div class="line-h"></div>
                        <div class="table-col4">完善呼转模型，建议基于心灵的呼转模型</div>
                    </div>
                    <div class="line-w"></div>
                    <div class="table-row row3">
                        <div class="table-col1">CRM白名单用户</div>
                        <div class="line-h"></div>
                        <div class="table-col2">大数据正常扫出、crm未关停（白名单）</div>
                        <div class="line-h"></div>
                        <div class="table-col3">1</div>
                        <div class="line-h"></div>
                        <div class="table-col4">疑似误举报</div>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="item">123321举报号码</div>
            </CarouselItem>
            <CarouselItem>
                <div class="item">公安侦办号码</div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>

export default {
    name: 'Swiper',
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.Swiper {
    width: 440px;
    height: 252px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;

    /deep/ .ivu-carousel-dots-inside {
        bottom: -3px;
    }

    .item {
        width: 420px;
        height: 236px;
        margin: 4px auto 12px;
        background: #5e95ff33;
        line-height: 15px;
    }

    .table {
        box-sizing: border-box;
        border: .5px solid #f4f4f480;
        border-radius: 4px;
        font-size: 12px;

        .line-w {
            width: 100%;
            height: 1px;
            background: #f4f4f480;
        }

        .line-h {
            width: 1px;
            height: 100%;
            background: #f4f4f480;
        }

        .table-row {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: .5px solid #f4f4f480;

            .table-col1 {
                width: 100px;
            }

            .table-col2 {
                width: 130px;
            }

            .table-col3 {
                width: 46px;
            }

            .table-col4 {
                flex: 1;
            }
        }

        .row1 {
            height: 36px;

            > div {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            > div {
                line-height: 36px;
                text-align: center;
                font-size: 13px;
                color: #fff;
                font-weight: 600;
                letter-spacing: 1px;
            }
        }

        .row2 {
            height: 100px;

            > div {
                text-align: center;
                color: #fff;
                font-weight: 500;
            }

            .table-col2,
            .table-col3 {
                > div {
                    padding: 0 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        .row3 {
            height: 32px;
            color: #fff;
            border: 0;

            div {
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;

                div {
                    border-bottom: .5px solid #f4f4f480;
                }
            }
        }
    }
}
</style>
