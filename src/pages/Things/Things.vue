<template>
  <div>
    <HeaderTop></HeaderTop>

    <div class="things_content">

      <!--轮播导航-->
      <div class="banner">
        <ul class="list">
          <li class="item">
            <img src="./images/yanxuan1.jpg" alt="img">
          </li>
          <li class="item">
            <img src="./images/yanxuan2.png" alt="img">
          </li>
          <li class="item">
            <img src="./images/yanxuan4.jpg" alt="img">
          </li>
        </ul>
      </div>

      <!--很多图片轮播-->
  <div class="thing_imgs">
    <ul class="list">
      <li class="item">
        <img src="" alt="img">
        <div class="text">
          <span>严选推荐</span>
        </div>
      </li>
    </ul>
  </div>

      <Split></Split>

      <!--为你推荐-->
      <div class="weini">
        <header class="hd">
          <span>为你推荐</span>
        </header>

        <div class="w_content">
          <!--前三张图片和后三张样式一样 第二张和第三图片一样-->
          <div class="w_imgs">
            <div class="topImg">
            </div>

            <div class="bottomImg">
              <div class="bottomImg1">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="bottomImg2">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>

          </div>

          <div class="w_imgs">
            <div class="topImg">
            </div>

            <div class="bottomImg">
              <div class="bottomImg1">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <div class="bottomImg2">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Split></Split>

<!--十点一刻-->
      <div class="shidian">
        <header class="hd">
          <span>十点一刻</span>
        </header>
        <div class="s_wrap">
          <ul class="list">
            <li class="item">

            </li>
          </ul>
        </div>
      </div>

      <Split></Split>

      <!--严选甄品-->
      <div class="zhenpin">
        <header class="hd">
          <span>严选甄品</span>
        </header>

        <div class="z_top">
          <img src="" alt="">
          <div class="content">

          </div>
        </div>

        <div class="bottomsImmgss1">
          <div class="top1"></div>
          <div class="bottom1"></div>
        </div>
        <div class="bottomsImmgss2">
          <div class="top2"></div>
          <div class="bottom2"></div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    data() {
      return {}
    },
    mounted() {
      let bannerScroll = new BScroll('.banner', {
        click: true,//会派发点击事件 新品首发
        scrollX:true
      });

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .things_content
    width 100%
    overflow hidden
    .banner
      width 100%
      .list
        clearFix()
        width 29rem
        .item
          float left
          padding  .2rem
          box-sizing border-box
          img
            width 670px
            height 385px
            border-radius .2rem



</style>
