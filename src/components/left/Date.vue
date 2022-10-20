<template>
    <div class="date">
        <div class="date-list">
            <div v-for="(item, index) in dateList" :key="index" class="date-item" @click="dateIndex = index">
                <img v-if="index === dateIndex" src="../../assets/img/date-active.png" alt="">
                <img v-else src="../../assets/img/date.png" alt="">
                <span>{{ item.name }}</span>
            </div>
        </div>
        <img src="../../assets/img/date-bottom.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Date',
    data () {
        return {
            dateIndex: 0,
            dateList: [
                { name: '日', value: 'day' },
                { name: '周', value: 'week' },
                { name: '月', value: 'month' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.date {
    position: relative;
    padding-bottom: 24px;

    .date-list {
        display: flex;
        justify-content: center;
        align-items: center;

        .date-item {
            position: relative;
            cursor: pointer;

            > img {
                display: block;
                width: 118px;
                height: auto;
            }

            > span {
                position: absolute;
                width: 100%;
                height: 24px;
                text-align: center;
                inset: 0;
                margin: auto;
                z-index: 10;
                font-size: 24px;
                font-weight: 600;
                color: #FFFFFF;
            }
        }

        .date-item:nth-child(2) {
            margin-inline: 20px;
        }
    }

    > img {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 440px;
        height: 50px;
    }
}
</style>
