<template>
  <div>
    <div class="wrap">
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
          <div class="list">
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
            <div class="item">
              <img src="./images/yancuan1.png" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">222篇文章</div>
              <div class="text">
                <span>严选推荐</span>
              </div>
            </div>
          </div>
        </div>

        <Split></Split>

        <!--为你推荐-->
        <div class="weini">
          <div class="hd">
            <span>为你推荐</span>
          </div>

          <div class="w_content">
            <!--前三张图片w_imgs和后三张样式一样 第二张和第三图片一样-->
            <div class="w_imgs">

              <div class="topImg">
                <img src="./images/yanxuan4.jpg" alt="">
                <div class="twoTxt">
                  <div class="txt1">
                    <span class="xx1">严选新中式厨房</span>
                    <span class="xx2">7.9元起</span>
                  </div>
                  <div class="txt2">百款餐厨好货，打造梦想厨房</div>
                </div>
              </div>


              <div class="middleImg">
                <div class="left">
                  <div class="avatar">
                    <img src="./images/touxiang.png" alt="img">
                    <span>海外组：童童</span>
                  </div>
                  <div class="mTxt">那些寒冷的哈哈哈哈哈哈哈</div>
                  <div class="bTxt">低至7折</div>
                </div>
                <div class="right">
                  <img style="width: 280px;height: 272px;"
                       src="./images/yanxuan1.jpg" alt="img">
                </div>
              </div>

              <div class="bottomImg">
                <div class="left"></div>
                <div class="right"></div>
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
      let thingImgsScroll = new BScroll('.thing_imgs', {
        click: true,//会派发点击事件 很多图片轮播
        scrollX: true,
      });

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    position relative
    width 100%
    .things_content
      width 100%
      overflow hidden
      font-size .5rem
      position absolute
      top: 1
      left: 0
      .banner
        width 100%
        margin-bottom .5rem
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

      .thing_imgs
        width 100%
        .list
          overflow hidden
          height 210px
          .item
            width 164px
            margin 0 .2rem
            float left
            height 210px
            position relative
            display flex
            flex-direction column
            justify-content center
            align-items center
            .topTxt
              position absolute
              top 0px
              left 0px
              color: #ffffff
              background #7e8c8d
              font-size .35rem
              width: 100%
              height .5rem
              line-height .5rem
              text-align center
              opacity .3
            .text
              font-size .4rem
              color gray

      .weini
        width 100%
        .hd
          width 100%
          height 1.6rem
          line-height 1.6rem
          text-align center
        .w_content
          width 100%
          display flex
          justify-content center
          align-items center
          .topImg
            border 1px solid lightgray
            border-radius: .10667rem .10667rem 0 0
            height 7.7rem
            img
              width: 688px
              height 386px
              margin-bottom .3rem
            .twoTxt
              color #7e8c8d
            .txt2
              font-size .37rem
              margin-top .5rem
          .middleImg
            display flex
            justify-content center
            align-items center
            width 9.2rem
            height 3.6266rem
            border 1px solid lightgray
            margin .5rem 0
            .left
              display flex
              align-items center
              flex-direction column
              .avatar
                display flex
                justify-content center
                align-items center
                span
                  font-size .3rem



</style>
