<template>
  <div>


    <div>
      <HeaderTop></HeaderTop>
      <div class="content">

        <div class="P_img">
          <img src="../../common/img/logo.png" alt="img">
        </div>

        <!--两个btn组件-->
        <div style="width:100%" @click="$router.replace('/phonelogin')">
          <ButtonRed :redBtnName="'手机号码登录'" ></ButtonRed>
        </div>
        <div style="width:100%" @click="$router.replace('/MailLogin')">
          <ButtonWhite :whiteBtnName="'邮箱账号登录'"></ButtonWhite>
        </div>


        <div class="P_small" @click="$router.replace('/phoneregist')">
          手机号快捷注册>
        </div>


      </div>
    </div>





  </div>
</template>

<script>


  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
  .content
    width 100%
    height 16.533rem
    overflow hidden
    background #ebebeb
    display flex
    flex-direction column
    align-items center
    position relative
    .P_img
      text-align center
      padding-top 2.133rem
      padding-bottom 2.133rem
      img
        width 3.573rem
        height 1.2rem

    .P_small
      color: #333;
      font-size .4rem
      text-align center
      width 90%
      margin-top .2rem

</style>
