<template>
  <div>
    <div class="wrap">
      <HeaderTop></HeaderTop>

      <div class="things_content">

        <!--轮播导航-->
        <div class="banners">
          <ul class="list" v-if="thingsData.banner">
            <li class="item" :key="index"
                v-for="(ba,index) in thingsData.banner ">
              <img :src="ba.picUrl" alt="img">
            </li>
          </ul>
        </div>

        <!--很多图片轮播-->
        <div class="thing_imgs">
          <div class="list" ref="imgW">
            <div class="item" :key="index"
                 v-for="(columnss,index) in thingsData.column ">
              <img :src="columnss.picUrl" style="width: 164px;height: 164px;" alt="img">
              <div class="topTxt">{{columnss.articleCount}}</div>
              <div class="text">
                <span>{{columnss.title}}</span>
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
                <img :src="thingsData.recommendOne.picUrl" alt="">
                <div class="twoTxt">
                  <div class="txt1">
                    <span class="xx1">{{thingsData.recommendOne.title}}</span>
                    <span class="xx2">9.9元起</span>
                  </div>
                  <div class="txt2">{{thingsData.recommendOne.subTitle}}</div>
                </div>
              </div>
              <div class="middleImg">
                <div class="left">
                  <div class="avatar">
                    <img style="width: 46px;height: 46px;"
                         :src="thingsData.recommendThree.avatar" alt="img">
                    <span>{{thingsData.recommendThree.nickname}}</span>
                  </div>
                  <div class="mTxt">{{thingsData.recommendThree.title}}</div>
                  <div class="bTxt">陆续发回评价说，很满意，踩着温润又不磨脚。</div>
                </div>
                <div class="right">
                  <img style="width: 280px;height: 272px;"
                       :src="thingsData.recommendThree.picUrl" alt="img">
                </div>
              </div>
              <div class="middleImg">
                <div class="left">
                  <div class="avatar">
                    <img style="width: 46px;height: 46px;"
                         :src="thingsData.recommendTwo.avatar" alt="img">
                    <span>{{thingsData.recommendTwo.nickname}}</span>
                  </div>
                  <div class="mTxt">{{thingsData.recommendTwo.title}}</div>
                  <div class="bTxt">{{thingsData.recommendTwo.subTitle}}</div>
                </div>
                <div class="right">
                  <img style="width: 280px;height: 272px;"
                       :src="thingsData.recommendTwo.picUrl" alt="img">
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
            <div class="list" ref="listWidth">
              <div class="item" :key="index"
                   v-for="(shiD,index) in thingsData.tenfifteen">
                <img src="./images/liaot.png" alt="">
                <div class="content">
                  <div class="title">今日话题</div>
                  <div class="name">{{shiD.title}}</div>
                  <div class="desc">{{shiD.desc}}</div>
                  <div class="avatars">
                    <img style="width: 48px;height: 48px;border-radius: 50%"
                         :src="shiD.participantAvatar[0]" alt="img">
                    <img style="width: 48px;height: 48px; border-radius: 50%"
                         :src="shiD.participantAvatar[1]" alt="img">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Split></Split>

        <!--严选甄品-->
        <div class="weini">
          <div class="hd">
            <span>严选甄品</span>
          </div>

          <div class="w_content">
            <div class="w_imgs">
              <div class="topImg">
                <img :src="thingsData.zhenOne.picUrl" alt="img">
                <div class="twoTxt">
                  <div class="txt1">
                    <span class="xx1">{{thingsData.zhenOne.title}}</span>
                  </div>
                  <div class="txt2">{{thingsData.zhenOne.subTitle}}</div>
                </div>
              </div>

              <div class="middleImg">
                <div class="left">
                  <div class="mTxt">{{thingsData.zhenThree.title}}</div>
                  <div class="bTxt">{{thingsData.zhenThree.subTitle}}</div>
                </div>
                <div class="right">
                  <img style="width: 280px;height: 272px;"
                       :src="thingsData.zhenThree.picUrl" alt="img">
                </div>
              </div>
              <div class="middleImg">
                <div class="left">
                  <div class="mTxt">大英博物馆周边商品</div>
                  <div class="bTxt">英式温柔，带给你冬天的清新</div>
                </div>
                <div class="right">
                  <img style="width: 280px;height: 272px;"
                       src="./images/yanx5.jpg" alt="img">
                </div>
              </div>
            </div>
          </div>

        </div>
        <Split></Split>

        <!--严选LOOK-->
        <div class="T_look">
          <div class="hd">
            <span>严选LOOk</span>
          </div>
          <img style="width: 100%;height: 1000px"
               src="./images/look.jpg" alt="img">
          <div class="content">
            <div class="avatar">
              <img style="width: 46px;height: 46px;"
                   :src="thingsData.yxLook.avatar" alt="img">
              <span>{{thingsData.yxLook.nickname}}</span>
            </div>
            <div class="text">
              棉花的味道柔软服贴，连喵儿也喜欢抢先占地盘儿，过段时间就可以用了
            </div>
          </div>
        </div>

        <!--更多精彩 整个背景为灰色-->
        <div class="T_more">
          <div class="line"></div>
          <div class="txtM">更多精彩</div>
        </div>

        <!--重复性图片-->
        <div class="moreImg">
          <div class="imgWrap">
            <div class="imgB">
              <img style="width: 642px;height: 360px;"
                   src="./images/ahahha.jpg" alt="img">
            </div>
            <div class="text">这些爆款就是好</div>
          </div>
        </div>
        <div class="moreImg">
          <div class="imgWrap">
            <div class="imgB">
              <img style="width: 642px;height: 360px;"
                   src="./images/yanxuan4.jpg" alt="img">
            </div>
            <div class="text">这些爆款就是好</div>
          </div>
        </div>
        <div class="moreImg">
          <div class="imgWrap">
            <div class="imgB">
              <img style="width: 642px;height: 360px;"
                   src="./images/ahahha.jpg" alt="img">
            </div>
            <div class="text">这些爆款就是好</div>
          </div>
        </div>
        <div class="moreImg">
          <div class="imgWrap">
            <div class="imgB">
              <img style="width: 642px;height: 360px;"
                   src="./images/ahahha.jpg" alt="img">
            </div>
            <div class="text">这些爆款就是好</div>
          </div>
        </div>
        <div class="moreImg">
          <div class="imgWrap">
            <div class="imgB">
              <img style="width: 642px;height: 360px;"
                   src="./images/ahahha.jpg" alt="img">
            </div>
            <div class="text">这些爆款就是好</div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'


  export default {

    computed: {
      ...mapState(['thingsData'])
    },
    mounted() {
      this.$store.dispatch('getThingsData', () => {
        this.$nextTick(() => {
          new BScroll('.banners', {
            click: true,//会派发点击事件 头部导航
            scrollX: true,
            snapLoop: true,//是否可以无缝循环轮播
            bounce: true //是否启用回弹动画效果
          });
        })
      });
    },
    watch: {
      thingsData(value) {
        this.$nextTick(() => {
          let wImg = this.$refs.imgW;
          let itemW = 164;
          let spaces = 20;
          let countWidth = (itemW * 9 + spaces * 8) + 'px';
          wImg.style.width = countWidth;
          new BScroll('.thing_imgs', {
            click: true,//会派发点击事件 很多图片轮播
            scrollX: true,
          });

          let lWith = this.$refs.listWidth;
          let itemWith = 580;
          let space = 37.5;
          let cWidth = (itemWith * 4 + space * 3) + 'px';
          lWith.style.width = cWidth;
          new BScroll('.s_wrap', {
            click: true,//会派发点击事件 十点一刻轮播
            scrollX: true,
          });
        })
      }
    },

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
      top: 1rem
      left: 0
      .banners
        width 100%
        margin-bottom .3rem
        margin-top .15rem
        .list
          clearFix()
          width 38rem
          .item
            float left
            padding .2rem
            box-sizing border-box
            &:nth-child(1)
              margin-left .4rem
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
              font-size .35rem
              color gray
              margin .2rem 0
              white-space nowrap
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
              .txt1
                margin-left .4rem
              .txt2
                margin-left .4rem
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
              width 5.44rem
              .avatar
                display flex
                justify-content center
                align-items center
                margin-left -2rem
                img
                  border-radius 50%
                  margin-right .1rem
                span
                  font-size .3rem
                  color #7e8c8d
              .mTxt
                color #7e8c8d
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                margin .4rem 0rem 0.3rem
                margin-left -.3rem
                width 328px
              .bTxt
                color #7e8c8d
                font-size .35rem
      .shidian
        width 100%
        .hd
          width 100%
          height 1.6rem
          line-height 1.6rem
          text-align center
        .s_wrap
          width: 100%
          margin-bottom .5rem
          .list
            height 5.5rem
            overflow hidden
            .item
              width: 7.74rem
              height 5.5rem
              position relative
              float left
              margin-left .5rem
              .content
                position absolute
                top .4rem
                left 1rem
                width 6rem
                display flex
                flex-direction column
                .title
                  line-height 1rem
                  text-align center
                .name
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  margin .3rem 0 .4rem
                .desc
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  font-size .35rem
                  color gray
                .avatars
                  margin-top .5rem
      .T_look
        width 100%
        .hd
          width 100%
          height 1.6rem
          line-height 1.6rem
          text-align center
        .content
          display flex
          flex-direction column
          margin-left .2rem
          margin-top .3rem
        .avatar
          display flex
          justify-content center
          margin-left -7rem
          margin-bottom .4rem
        .avatar > img
          border-radius 50%
        .avatar > span
          margin-left .1rem
          font-size .4rem
          color #666666
        .text
          width 9.2rem
          color #7f7f7f
          font-size .37rem
          margin-bottom 1rem
          line-height: 1.6
      .T_more
        background #f2f2f2
        width 100%
        height 1.6rem
        display flex
        justify-content center
        align-items center
        position relative
        .line
          width 9.2rem
          margin 0 auto
          height 1px
          background gainsboro
        .txtM
          color #7e8c8d
          position absolute
          top 0.55rem
          z-index 5
      .moreImg
        background #f2f2f2
        padding-bottom .5rem
        .imgWrap
          background #ffffff
          padding: .32rem
          .imgB
            margin-left .4rem
          .text
            margin-left .4rem
            margin-top .2rem
            font-size .3733rem
            color #666666


</style>
