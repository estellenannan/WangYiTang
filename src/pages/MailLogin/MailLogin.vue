<template>
  <div>
    <HeaderTop></HeaderTop>
    <div style="width: 100%; height: 100%" class="wrapPhoneLo">

      <div class="middleContent">
        <div class="imgWrap">
          <img src="../../common/img/logo.png" alt="">
        </div>
        <div class="texts">

          <div class="topTxt">
            <input type="text"
                   placeholder="邮箱账号">
          </div>
          <div class="line1"></div>
          <div class="middleTxt">
            <input type="text"
                   placeholder="密码">
          </div>
          <div class="line2"></div>
          <div class="tishiTxt active">请输入账号</div>
          <div class="bottomTxt">
            <div class="left" @click="$router.replace('/phoneregist')">注册账号</div>
            <div class="right">忘记密码</div>
          </div>


        </div>
      </div>


      <ButtonRed :redBtnName="'登录'"></ButtonRed>

      <div style="width: 100%" @click="$router.replace('/profile')">
        <ButtonWhite :whiteBtnName="'其它登录方式'"></ButtonWhite>
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
  .wrapPhoneLo
    display flex
    flex-direction column
    align-items center
    width 100%
    input
      font-size .5rem
      outline none
    .middleContent
      width 100%
      .imgWrap
        display flex
        justify-content center
        align-items center
        width 100%
        height 3rem
        img
          width: 2.56rem;
          height: .85333rem
      .texts
        display flex
        flex-direction column
        align-items center
        width 70%
        position relative
        margin-top .6rem
        .topTxt
          height 1rem
          display flex
          flex-direction column
          align-items center
        .line1
          height 2px
          width 9rem
          position absolute
          left 5%
          top .7rem
          background gainsboro
        .middleTxt
          height 1rem
          display flex
          flex-direction column
          align-items center
          margin-top .2rem
        .line2
          height 2px
          width 9rem
          position absolute
          left 5%
          top 1.9rem
          background gainsboro
        .tishiTxt
          height 1rem
          font-size .5rem
          color #b4282d
          display flex
          flex-direction column
          width 461px
          margin-top .2rem
        .bottomTxt
          font-size .4rem
          color #7e8c8d
          display flex
          flex-direction column
          justify-content space-between
          height .5rem
          width 461px
          position relative
          margin .2rem 0 .5rem 0rem
          .right
            position absolute
            right -3rem
            top 0


</style>
