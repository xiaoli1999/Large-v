<template>
    <div class="time">
        <div class="time-header">
            <div>日期</div>
            <div>模型</div>
            <div>优化口径</div>
        </div>
        <div class="time-list">
            <div v-for="(item, index) in timelList" :key="index" class="time-content" :class="index % 2 ? 'active' : ''">
                <div>{{ item.date }}</div>
                <div>{{ item.model }}</div>
                <div>{{ item.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Time',
    data () {
        return {
            timelList: [
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                },
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                },
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                },
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                },
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                },
                {
                    date: '2022-08-16',
                    model: 'BA0101',
                    content: '优化BA口径'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.time {
    position: relative;
    width: 440px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;

    .time-header {
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
            flex: 1;
            text-align: center;
        }
    }

    .time-list {
        height: 96px;
        overflow-y: auto;
        margin: 0 auto 8px;

        &::-webkit-scrollbar {
            display: none;
        }

        .time-content {
            width: 408px;
            height: 32px;
            margin: 0 auto;
            font-size: 13px;
            font-weight: 400;
            color: #FFFFFF;
            display: flex;
            align-items: center;

            > div {
                flex: 1;
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
