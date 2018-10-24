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
            <div class="text1">严选原创设计系列</div>
            <div class="text2">用设计点亮生活的光</div>
          </div>
        </div>

        <div class="bottomsImmgss">
          <div class="top1">
            <div class="left1">
              <div class="txt1">严选按摩器</div>
              <div class="txt2">揭开每一款</div>
            </div>
            <div class="right1">
              <img src="" alt="">
            </div>
          </div>

          <div class="bottom1">
            <div class="left2">
              <div class="txt1">严选按摩器</div>
              <div class="txt2">揭开每一款</div>
            </div>
            <div class="right2">
              <img src="" alt="">
            </div>
          </div>
        </div>

      </div>
      <Split></Split>

      <!--严选LOOK-->
      <div class="T_look">
        <img src="" alt="">
        <div class="content">

        </div>
      </div>
      <!--更多精彩 整个背景为灰色-->
      <div class="T_more">
        <div class="line"></div>
        <div class="txtM">更多精彩</div>
      </div>
      <!--多个重复的 整个背景为灰色-->
      <div class="T_manyBigImg">
        <div class="T_wrapImg">
          <div class="T_mImg">
            <img src="" alt="">
            <div class="txt">
              严选原创设计
            </div>
          </div>
          <Split></Split>
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
        scrollX: true,
       /* snapLoop: true,//是否可以无缝循环轮播
        bounce: true //是否启用回弹动画效果*/
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
          padding .2rem
          box-sizing border-box
          img
            width 670px
            height 385px
            border-radius .2rem


</style>
