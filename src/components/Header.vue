<template>
    <div class="header">
        <img src="../assets/img/logo.png" alt="">
        <span>XXXXXX可视化</span>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="less" scoped>
.header {
    min-width: 1920px;
    height: 140px;
    display: flex;
    justify-content: center;
    background: url("../assets/img/header.png") center no-repeat;
    background-size: 100% 100%;
    font-size: 36px;
    color: #FFFFFF;
    line-height: 50px;
    text-shadow: 0 0 10px #105ED9;
    overflow: hidden;

    > img {
        width: 124px;
        height: 37px;
        margin-right: 33px;
        margin-top: 22px;
    }

    > span {
        margin-top: 20px;
        font-family: AlimamaShuHeiTi;
    }
}
</style>
