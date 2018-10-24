<template>
  <div class="btns">
    <div class="btn_container">
      <i class="iconfont icon-mobilephone_fill"></i>
      <span class="btn_text">{{whiteBtnName}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      whiteBtnName: String
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .btns
    width 100%
    .btn_container
      margin 0.26667rem auto
      height 1.2rem
      line-height 1.2rem
      text-align center
      color #b4282d
      width 90%
      background-color #fff
      border 2px solid #b4282d
      border-radius .1rem
      display flex
      justify-content center
      align-items center
      span
        font-size .4rem
      .iconfont
        font-size .6rem

</style>
