<template>
  <div>
    <HeaderTop></HeaderTop>
    <div style="width: 100%;height: 100%;" class="wrapPhoneLo">

      <div class="middleContent">

        <div class="imgWrap">
          <img src="../../common/img/logo.png" alt="">
        </div>

        <div class="texts">
          <div class="topTxt">
            <input type="tel" maxlength="11" placeholder="请输入手机号"
                   @click="isPhoneNember=false"
                   v-model="phoneNember">
          </div>
          <div class="line1"></div>
          <div class="middleTxt" >
            <input type="text" v-model="messageNember" maxlength="8"
                   placeholder="请输入短信验证码">
          </div>
          <div class="btnTxt"  @click="isRightPhone?isPhoneNember=false:isPhoneNember=true" >获取验证码</div>
          <div class="line2"></div>
          <div class="tishiTxt" :class="{active:isPhoneNember}">请输入手机号</div>
          <div class="bottomTxt">
            <div class="left">遇到问题?</div>
            <div class="right">使用密码验证登录</div>
          </div>
        </div>

      </div>

      <div style="width: 100%" @click="isPhoneNember=!isPhoneNember">
        <ButtonRed :redBtnName="'登录'"></ButtonRed>
      </div>

      <div style="width: 100%" @click="$router.replace('/profile')">
        <ButtonWhite :whiteBtnName="'其它登录方式'"></ButtonWhite>
      </div>

      <div class="txt" @click="$router.replace('/phoneregist')">注册账号></div>

    </div>


  </div>
</template>

<script>
  export default {
/*{{isRightPhone?'请输入手机号':'手机号格式错误'}}*/
    data() {
      return {
        // 手机号初始为空，利用v-model双向数据绑定获取input里面的手机号
        phoneNember: '',
        //点击登录和获取验证码时出现提示文本,样式变为active
        isPhoneNember: false, //没有输入手机号时提示输入手机号，默认是false，样式不出现
        messageNember:''
      }
    },
    computed: {
      isRightPhone() {
        return /^1\d{10}$/.test(this.phoneNember);
      },
      isRightMesage() {
        return /^\d{6}$/.test(this.messageNember);
      },
    },
    methods: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapPhoneLo
    display flex
    flex-direction column
    align-items center
    width 100%
    overflow hidden
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
        margin-top: 2rem
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
        .tishiTxt
          height 1rem
          font-size .5rem
          color #b4282d
          display flex
          flex-direction column
          width 461px
          margin-top .2rem
          display none
          &.active
            display block
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

    .txt
      font-size .5rem
      margin-top .2rem
      color #666
</style>
