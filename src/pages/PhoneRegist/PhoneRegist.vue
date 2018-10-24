<template>
  <div>
    <HeaderTop></HeaderTop>

    <div style="width: 100%;height: 100%;" class="wrapPhoneLo">

      <div class="middleContent">

        <div class="txtWrap">
          手机号注册
        </div>

        <div class="texts">

          <div class="topTxt">
            <input type="text"
                   placeholder="请输入手机号">
          </div>
          <div class="line1"></div>
          <div class="middleTxt">
            <input type="text"
                   placeholder="请输入短信验证码">
          </div>
          <div class="btnTxt">获取验证码</div>

          <div class="line2"></div>
          <div class="bottomTxt">请输入密码</div>
          <div class="line3"></div>


        </div>
      </div>


      <ButtonRed :redBtnName="'注册'"></ButtonRed>


      <div class="txt" @click="$router.replace('/mailregist')">邮箱账号注册></div>

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
      .txtWrap
        display flex
        justify-content center
        align-items center
        width 100%
        height 2rem
        color gray
        font-size .6rem
        margin-bottom 1.5rem
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
        .btnTxt
          width 2rem
          height .8rem
          font-size .35rem
          color gray
          background #ffffff
          border-radius .15rem
          border 1px solid gray
          line-height .8rem
          text-align center
          position absolute
          left 7.2rem
          top 1rem
        .line2
          height 2px
          width 9rem
          position absolute
          left 5%
          top 1.9rem
          background gainsboro
        .bottomTxt
          height 1rem
          font-size .5rem
          color gray
          display flex
          flex-direction column
          width 461px
          margin-top .2rem
        .line3
          height 2px
          width 9rem
          position absolute
          left 5%
          top 3.1rem
          background gainsboro
    .txt
      font-size .5rem
      margin-top .2rem
</style>
