<template>
    <div class="alarm">
        <div class="alarm-header">
            <div>日期</div>
            <div>停机量</div>
            <div>复机量</div>
            <div>复机率</div>
        </div>
        <div class="alarm-content">
            <div>{{ alarmList[0].date }}</div>
            <div>{{ alarmList[0].stop }}</div>
            <div>{{ alarmList[0].start }}</div>
            <div>{{ alarmList[0].startOdds }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlarmLog',
    data () {
        return {
           alarmList: [
               {
                   date: '8-01',
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
.alarm {
    position: relative;
    width: 440px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;

    > div {
        display: flex;
        align-items: center;

        > div {
            width: 25%;
            text-align: center;
        }
    }

    .alarm-header {
        width: 408px;
        height: 30px;
        background: url("../../assets/img/table-header.png") no-repeat;
        background-size: 100%;
        margin: 8px auto;
        font-size: 14px;
        font-weight: 500;
        color: #89C1FF;
    }

    .alarm-content {
        width: 408px;
        height: 51px;
        background: url("../../assets/img/line-bg3.png") no-repeat;
        background-size: 100%;
        margin: 8px auto 16px;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
    }
}
</style>
