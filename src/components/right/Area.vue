<template>
    <div class="area">
        <div class="area-header">
            <div>日期</div>
            <div>停机量</div>
            <div>复机量</div>
            <div>复机率</div>
        </div>
        <div class="area-list">
            <div v-for="(item, index) in areaList" :key="index" class="area-content" :class="index % 2 ? 'active' : ''">
                <div>{{ item.date }}</div>
                <div>{{ item.stop }}</div>
                <div>{{ item.start }}</div>
                <div>{{ item.startOdds }}%</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Area',
    data () {
        return {
           areaList: [
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               },
               {
                   date: 'XXX区域',
                   stop: 4322,
                   start: 234,
                   startOdds: 70
               }
           ]
        }
    }
}
</script>

<style lang="less" scoped>
.area {
    position: relative;
    width: 440px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;

    .area-header {
        width: 408px;
        height: 30px;
        background: url("../../assets/img/table-header.png") no-repeat;
        background-size: 100%;
        margin: 8px auto 0;
        font-size: 14px;
        font-weight: 500;
        color: #89C1FF;
        display: flex;
        align-items: center;

        > div {
            width: 25%;
            text-align: center;
        }
    }

    .area-list {
        height: 96px;
        overflow-y: auto;
        margin: 0 auto 8px;

        &::-webkit-scrollbar {
            display: none;
        }

        .area-content {
            width: 408px;
            height: 32px;
            margin: 0 auto;
            font-size: 13px;
            font-weight: 400;
            color: #FFFFFF;
            display: flex;
            align-items: center;

            > div {
                width: 25%;
                text-align: center;
            }

            &.active {
                background: url("../../assets/img/line-bg2.png") no-repeat;
                background-size: 100%;
            }
        }
    }
}
</style>
