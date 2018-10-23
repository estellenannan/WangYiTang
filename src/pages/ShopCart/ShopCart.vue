<template>

    <div class="shopCart">


      <div class="header">
        <span>购物车</span>
      </div>

      <div class="content">
        <ul class="shopCart_ul">
          <li>
            <i class="iconfont icon-star"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont icon-star"></i>
            <span>48小时快速退款</span>
          </li>
          <li>
            <i class="iconfont icon-star"></i>
            <span>
              满88元免邮费
            </span>
          </li>
        </ul>
        <div class="shopCart-main">
          <div class="shopCart-img">
            <img src="./images/cart.png" alt="cart">
          </div>
          <span>亲，去添加点什么吧</span>
          <div class="btn" @click="$router.replace('/profile')">登录</div>

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
  .shopCart
    width 100%
    height 100%
    background #eee
    /*z-index 100*/
    .header
      width 100%
      height 1.333rem
      background #ffffff
      text-align center
      line-height 1.333rem
      font-size 0.5rem
    .content
      /*background #eee*/
      width 100%
      /*height 80%*/
      .shopCart_ul
        clearFix()
        padding 0.267rem
        display flex
        justify-content space-around
        flex-flow nowrap
        li
          clearFix()
          float left
          /*flex 1*/
          .iconfont
            float left
            font-size 0.32rem
          span
            float left
            font-size 0.32rem
            color  #7e8c8d
      .shopCart-main
        display flex
        flex-direction column
        align-items center
        justify-content center
        background #eee
        width 100%
        height 15rem
        clearFix()
        position relative
        .shopCart-img
          width 4rem
          height 4rem
          position absolute
          top 2.6667rem
          left 0
          right 0
          bottom 0
          margin 0 auto
          img
            width 100%
            height 100%
        .btn
          background #b4282d
          width 6.6667rem
          height 1.333rem
          border-radius 0.133rem
          color #ffffff
          font-size 0.373rem
          text-align center
          line-height 1.333rem
        span
          font-size 0.4267rem
          color #7e8c8d
          padding-bottom 0.533rem
</style>
