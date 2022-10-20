<template>
    <div class="tigger">
        <div class="tigger-main">
            <img src="../../assets/img/start-bg.png" alt="">
            <div class="tigger-main-list">
                <div>
                    <img src="../../assets/img/stop.png" alt="">
                    <span>
                        <animate-number from="0" :to="tiggerInfo.stop" duration="1200" />
                    </span>
                </div>
                <div>
                    <img src="../../assets/img/start.png" alt="">
                    <span>
                        <animate-number from="0" :to="tiggerInfo.start" duration="1200" />
                    </span>
                </div>
                <div>
                    <img src="../../assets/img/start-odds.png" alt="">
                    <span>
                        <animate-number from="0" :to="tiggerInfo.startOdds" duration="1200" />%
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tigger',
    data () {
        return {
           tiggerInfo: {
               stop: 4322,
               start: 234,
               startOdds: 70
           }
        }
    }
}
</script>

<style lang="less" scoped>
.tigger {
    position: relative;
    width: 440px;
    height: 278px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .tigger-main {
        position: relative;
        width: 398px;
        height: 216px;
        background: linear-gradient(180deg, #000C1E 0%, #112858 100%);

        > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 0;
        }

        .tigger-main-list {
            position: absolute;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            padding: 0 8px;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > div {

                > img {
                    width: 114px;
                    height: 112px;
                    margin: 36px auto 16px;
                }

                > span {
                    display: block;
                    text-align: center;
                    font-size: 30px;
                    font-family: BebasNeue;
                    color: #FFE961;
                    line-height: 36px;
                    letter-spacing: 1px;
                }
            }
        }
    }
}
</style>
