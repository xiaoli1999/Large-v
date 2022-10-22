<template>
    <div class="suggest">
        防诈建议
    </div>
</template>

<script>
export default {
    name: 'Suggest',
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.suggest {
    position: relative;
    width: 440px;
    height: 200px;
    background: linear-gradient(180deg, rgba(50,72,92,0) 0%, rgba(67,123,225,0.15) 100%);
    border: 1px solid;
    border-image: linear-gradient(270deg, rgba(156, 170, 193, 0), rgba(94, 149, 255, 1), rgba(156, 170, 193, 0)) 1 1;
}
</style>
