<template>
  <div>
    <div class="wrap">
      <div class="headerTop">

        <ul class="headerTop_ul">
          <li @click="$router.replace('/msite')">
            <i class="iconfont icon-home"></i></li>
          <li class="secondLi">
            <span>网易严选</span>
          </li>
          <li class="thirdLi">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuche2"></i>
          </li>
        </ul>


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

<style lang="stylus" rel="stylesheet/stylus" scoped>

  @import "../../common/stylus/mixins.styl"
.wrap
  width 100%
  position relative
  .headerTop
    position fixed
    top  0rem
    left 0rem
    width 100%
    background #FAFAFA
    height 1rem
    padding 0.1rem 0.2rem
    box-sizing border-box
    overflow hidden
    z-index 101
    .headerTop_ul
      clearFix()
      display flex
      li
        display inline-block
        padding-bottom .3rem
      .secondLi
        display flex
        justify-content center
        align-items center
        span
          font-size 0.5rem
          font-weight bold
          color #1A1A1A
      .thirdLi
        display flex
        justify-content center
        align-items center
        .icon-gouwuche2
          margin-left 0.4rem
      li
        float left
        flex 1
        .iconfont
          font-size 0.7rem
          color #7e8c8d

</style>
