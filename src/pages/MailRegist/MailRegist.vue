<template>
  <div>
    <div class="m_main">

      <div class="m_top">

        <div class="left">
          <input class="leftInput" type="text" placeholder="6-18位字母数字组合"
          >
        </div>
        <div class="right">@163.com</div>
      </div>

      <div class="m_middle">
        <div class="mainInput">
          <input type="text" placeholder="输入验证手机号" maxlength="11">
        </div>
        <div class="number">+86</div>
      </div>
      <div class="m_bottom">
        <i class="iconfont icon-star"></i>
        点此进行验证
      </div>

      <ButtonRed :redBtnName="'下一步'"></ButtonRed>

      <div class="final">
        注册即代表同意《服务条款》和《网易隐私政策》
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m_main
    width: 100%
    display flex
    flex-direction column
    align-items center
    font-size .5rem
    margin-top 2rem
    input
      outline none
    .m_top
      width 90%
      height 1.3rem /*border 2px solid lightgrey
      border-radius .1rem*/
      display flex
      justify-content center
      align-items center
      position relative
      .left
        border 2px solid lightgrey
        border-radius .1rem
        height 1.3rem
        display flex
        justify-content center
        align-items center
        position absolute
        left 0rem
        top 0rem
        width 6rem
        .leftInput
          width 5.6rem
          padding-left .7rem
          box-sizing border-box
      .right
        border 2px solid lightgrey
        border-radius .1rem
        height 1.3rem
        display flex
        justify-content center
        align-items center
        position absolute
        right 0rem
        top 0rem
        width 2.5rem
        font-weight bold
    .m_middle
      width 90%
      height 1.3rem
      border 2px solid lightgrey
      border-radius .1rem
      margin-top .4rem
      display flex
      justify-content center
      align-items center
    .m_bottom
      width 90%
      height 1rem
      background #f2f2f2
      line-height 1rem
      text-align center
      border-radius .1rem
      margin .4rem 0 1rem
      color #666666
      .iconfont
        font-size .5rem

  .final
    font-size .4rem
    height 1rem
    text-align center
    line-height 1rem
    color #45494c
    width 90%
</style>
