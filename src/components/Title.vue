<template>
    <div class="title">
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    width: 440px;
    height: 44px;
    background: url("../assets/img/title.png") no-repeat;
    background-size: 100%;
    margin: 8px auto;

    > div {
        font-size: 18px;
        font-family: AlimamaShuHeiTi;
        color: #FFFFFF;
        background: linear-gradient(180deg, #FFFFFF 0%, #7BC7FF 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left: 39px;
        padding-top: 6px;
    }
}
</style>
