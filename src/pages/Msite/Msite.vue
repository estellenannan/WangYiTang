<template>
  <div class="wrap">
    <div class="msite">

      <!--固定头部为以后滑动做准备-->
      <div class="msite_fixed">
        <!--头部-->
        <div class="msite_header">
          <a href="javascript:;">网易严选</a>
          <div class="msite_right">
            <span><i class="iconfont icon-sousuo"></i></span>
            <span class="placeholder">搜索商品，共16762款好物</span>
          </div>
        </div>

        <!--11个词语长屏滑动-->
        <div class="hdScorllX" >
          <div class="list">
            <div class="hdScorllItem" v-for="(headCate,index) in msiteData.headCateList" :key="index">
              <span :class="{active:current===index}" @click="currentIndex(index)">{{headCate.name}}</span>
            </div>
          </div>
        </div>

      </div>

      <div class="msite_content">
        <!--轮播图-->
        <div class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/1.jpg" alt="lunbo">
              </div>
              <div class="swiper-slide">
                <img src="./images/3.jpg" alt="lunbo">
              </div>
              <div class="swiper-slide">
                <img src="./images/4.jpg" alt="lunbo">
              </div>
              <div class="swiper-slide">
                <img src="./images/7.jpg" alt="lunbo">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <!--轮播图下面的3个服务-->
        <div class="msite_indexServicePolicy">
          <ul class="msite_ulService">
            <li v-for="(service,index) in msiteData.policyDescList" :key="index">
              <a href="javascript:;">
                <i class="iconfont icon-heart"></i>
                <span>{{service.desc}}</span>
              </a>
            </li>

          </ul>

        </div>

        <!--品牌制造商直供-->
        <div class="m_pinpai">
          <header class="m_pinpaiTitle">
            <a href="javascript:;">
              <span>品牌制造商直供</span>
              <i class="iconfont icon-right"></i>
            </a>
          </header>

          <div class="m_pinpaiMain">
            <ul class="m_pinpaiMainUl" v-if="spPinpai">
              <li class="item" :key="index"
                  v-for="(tagPinpai,index) in spPinpai">
                <a href="javascript:;">
                  <div class="content">
                    <h4>{{tagPinpai.name}}</h4>
                    <div class="text">
                      <span>{{tagPinpai.floorPrice}}元起</span>
                    </div>
                    <span>上新</span>
                  </div>
                  <img :src="tagPinpai.appListPicUrl" alt="img">
                </a>
              </li>
            </ul>

          </div>

        </div>

        <!--新品首发-->
        <div class="m_xinpin">

          <header class="xinpin_hd newItemList">
            <a href="javascript:;" class="wrap">
              <span class="txts">新品首发</span>
              <div class="all">
                <span class="txt">查看全部</span>
                <i class="iconfont icon-right"></i>
              </div>
            </a>
          </header>

          <!--横屏滑动-->
          <div class="m_goodGrid">
              <ul class="xinpin_wrap">
                <li class="item" :key="index"
                    v-for="( newItem,index) in msiteData.newItemList">
                  <a href="javascript:;" class="good">
                    <div class="hd">
                      <img :src="newItem.listPicUrl" alt="img">
                    </div>
                    <div class="name">
                      <span>{{newItem.name}}</span>
                    </div>
                    <div class="jiesao">
                      <span>{{newItem.simpleDesc}}</span>
                    </div>
                    <div class="price">
                      <span>￥{{newItem.retailPrice}}</span>
                    </div>
                  </a>
                </li>
              </ul>

          </div>

        </div>

        <Split></Split>

        <!--严选限时购-->
        <div class="xianshigou">
          <div class="left">
            <span class="left1">严选限时购</span>
            <div class="spans">
              <span class="secs">00</span>
              <span class="colon">:</span>
              <span class="secs">00</span>
              <span class="colon">:</span>
              <span class="secs">00</span>
            </div>
            <span class="left2">下一场18：00开始</span>
          </div>
          <div class="right">
            <img src="./images/yanxuan3.png" alt="img">
          </div>
        </div>
        <Split></Split>

        <!--福利社-->
        <div class="fulishe">
          <img src="./images/yanxuan6.jpg" alt="img6">
        </div>

        <Split></Split>

        <!--  专题精选-->
        <div class="zhuanti">
          <header class="hd">
            <span>专题精选</span>
            <span><i class="iconfont icon-right"></i></span>
          </header>

          <div class="zhuanti_wrap">
            <ul class="list">
              <li class="item" :key="index"
                  v-for="(topicZhuanti,index) in msiteData.topicList">
                <img :src="topicZhuanti.itemPicUrl" alt="img">
                <div class="top">
                  <span>{{topicZhuanti.title}}</span>
                </div>
                <div class="bottom">
                  <span>{{topicZhuanti.subtitle}}</span>
                </div>
              </li>

            </ul>
          </div>

        </div>
        <Split></Split>

        <!--居家好物-->
       <div class="m_jujia">
         <div class="jujia" :key="index"
              v-for="(cateJujia,index) in msiteData.cateList">
           <header class="hdju">
             <span>{{cateJujia.name}}</span>
           </header>

           <div class="content">
             <ul class="list">
               <li class="item" :key="index"
                   v-for="(ItemJujia,index) in cateJujia.itemList"
               >
                 <img :src="ItemJujia.listPicUrl" alt="img">
                 <div class="top">
                   <span>{{ItemJujia.simpleDesc}}</span>
                 </div>
                 <div class="middle">
                   <span>{{ItemJujia.name}}</span>
                 </div>
                 <div class="bottom">
                   <span>￥{{ItemJujia.retailPrice}}</span>
                 </div>
               </li>
             </ul>
           </div>
           <div class="line">

           </div>
         </div>
       </div>


        <Split></Split>

      </div>


    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper';
  import BScroll from 'better-scroll';
  import {mapState,mapGetters} from 'vuex'

  export default {
    data() {
      return {
        current:0,//这是11个长词语的默认值
      }
    },
    computed:{
      ...mapState(['msiteData']),
      ...mapGetters(['spPinpai'])
    },
    mounted() {
      this.$store.dispatch('getMsiteData',() =>{
        this.$nextTick(()=>{
          let BScrollCiyu = new BScroll('.hdScorllX', {
            click: true,//会派发点击事件 词语
            scrollX:true
          });
        })
      });





    },
    watch:{
      msiteData(value){
        this.$nextTick(()=>{
          let xinpinWrap = new BScroll('.m_goodGrid', {
            click: true,//会派发点击事件 新品首发
            scrollX:true
          });
          let lunBoSwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项  //轮播图
            pagination: { // 如果需要分页器
              el: '.swiper-pagination',
            },
          });
          let zhuantiWrap = new BScroll('.zhuanti_wrap', {
            click: true,//会派发点击事件 专题
            scrollX:true
          });
        })

      }
    },
    methods:{
      currentIndex(index){
        this.current=index;//词语的点击事件
      }

    }

  }
  /*#b4282d*/
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height 100%
    background #ffffff
    position relative
    /*box-sizing border-box*/
    overflow hidden
    .msite_fixed
      position fixed !important
      left 0
      top 0
      z-index 10
      background #ffffff
      width 100%
      box-sizing border-box
      /*height 2rem*/
      .msite_header
        width 100%
        /*height 1.1rem*/
        font-size 0.4rem
        display flex
        justify-content space-between
        align-items center
        padding .213rem .4rem
        box-sizing border-box
        a
          font-size .5rem
          color black
          /*background lightgoldenrodyellow*/
          display inline-block
        .msite_right
          padding 0rem .7rem
          border-radius .1rem
          height .746rem
          font-size .373rem
          background-color #ededed /*margin-right .3rem
          margin-left .3rem*/
          display flex
          justify-content center
          align-items center
          .iconfont
            font-size .5rem
            margin-right .1rem
          .placeholder
            color #666666
      .hdScorllX
        width 100%
        overflow hidden
        background #ffffff
        display flex
        .list
          display flex
          flex-shrink 0
          flex-flow row nowrap
          .hdScorllItem
            display flex
            justify-content space-between
            align-items center
            flex-shrink 0
            span
              /*width 1.1rem*/
              text-align center
              flex-shrink 0
              flex-wrap nowrap
              font-size .4rem
              margin 0 .7rem
              border-bottom 3px solid #ffffff
              padding 0 0 0.1rem 0
              &.active
                border-bottom 3px solid #b4282d
                color #b4282d
    .msite_content
      margin-top 123px
      .msite_nav
        /*bottom-border-1px(#e4e4e4)*/
        height 400px
        width 100%
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              img
                width 100%
                height 100%
      .msite_indexServicePolicy
        font-size .32rem
        /*background lightblue*/
        .msite_ulService
          width 100%
          height .96rem
          padding 0 .4rem
          display flex
          align-items center
          justify-content space-around
          box-sizing border-box
          .iconfont
            color #b4282d
      .m_pinpai
        width 100%
        /*background lightpink*/
        .m_pinpaiTitle
          display flex
          align-items center
          justify-content: center;
          height: 1.46667rem;
          font-size: .42667rem
          .iconfont
            font-size .4rem
        .m_pinpaiMain
          padding 0rem 0.01rem
          box-sizing border-box
          .m_pinpaiMainUl
            position relative
            .item
              display inline-block;
              position relative
              margin-bottom .10667rem
              width 4.2rem
              height 3.14667rem
              overflow hidden
              background-color #f4f4f4
              /*margin-right -.15rem*/
              box-sizing border-box
              &:nth-child(1)
                margin-left .5rem
              &:nth-child(3)
                margin-left .5rem
              &:nth-child(2)
                margin-left .5rem
              &:nth-child(4)
                margin-left .5rem
              a
                width 100%
                height 100%
                font-size .4rem
                .content
                  position absolute
                  left 0
                  top 0
                  padding .26667rem 0 0 .26667rem
                  width 100%
                  z-index 4
                  font-weight bold
                  color grey
                  box-sizing border-box
                  h4
                    margin-bottom .1rem
                  .text
                    margin-bottom .2rem
                img
                  width 100%
                  height 100%


      .m_xinpin
        width 100%
        .xinpin_hd
          height 3.46667rem
          margin-bottom .42667rem
          position relative
          display flex
          justify-content center
          align-items center
          background-size 10rem 3.46667rem
          &.newItemList
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
          &.popularItemList
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
          .wrap
            display block
            text-align center
            font-size .48rem
            color #8BA0B6
            .txts
              font-size .6rem
            .all
              position relative
              margin .21333rem auto 0
              width 3.2rem
              height .74667rem
              font-size .37333rem
              line-height .74667rem
              background #D8E5F1
              padding .2rem .6rem
              text-align center
              .txt
                font-size .5rem
              .iconfont
                font-size .5rem
        .m_goodGrid
          margin-bottom .6rem
          .xinpin_wrap
            clearFix()
            width 35rem
            .item
              width 3.733rem
              margin-left .4rem
              float left
              .good
                display block
                width 3.733rem
                .hd
                  width 280px
                  height 280px
                  img
                    background-color: #f4f4f4;
                    width 280px
                    height 280px
                .name
                  margin .1rem 0
                  font-size .5rem
                  span
                    display inline-block
                    width 3.73333rem
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden
                .jiesao
                  font-size .4rem
                  margin-bottom .1rem
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  span
                    display inline-block
                    width 3.73333rem
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden
                .price
                  color #b4282d
                  font-size .4rem
                  margin-bottom .1rem

      .xianshigou
        width 100%
        padding .4rem .53333rem .4rem .74667rem
        margin-bottom .26667rem
        height 5.06667rem;
        /*background: #fff;*/
        box-sizing border-box
        display flex
        .left
          display flex
          flex 1
          flex-direction column
          padding-top 1.06667rem
          .left1
            font-size .5rem
            margin-bottom .32rem
            color #333
            letter-spacing .16rem
          .spans
            display inline-block
            overflow hidden
            width 4rem
            font-size .6rem
            color #ffffff
            margin-bottom .32rem
            .colon
              color #333
              font-size .4rem
              width .26667rem
              text-align center
              font-weight 700
            .secs
              line-height .74667rem
              text-align: center
              width 1rem
              height 1rem
              font-size .5rem
              color #fff
              border-radius .05333rem
              background #444
          .left2
            font-size .4rem
        .right
          background: #fff
          width 4.26667rem
          height 4.26667rem
          position relative

      .zhuanti
        overflow hidden
        .hd
          height 1rem
          line-height 1rem
          font-size .5rem
          text-align center
          .iconfont
            font-size .4rem
            margin-left -.2rem
        .zhuanti_wrap
          /*width auto*/
          .list
            width 28rem
            overflow hidden
            clearFix()
            .item
              float left
              width 7.66667rem
              margin-left .3rem
              box-sizing border-box
              img
                width 575px
                height 322px
              .top
                font-size .5rem
                margin-bottom -.3rem
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
              .bottom
                display inline-block
                width 100%
                font-size .4rem
                color gray
                overflow hidden
                white-space nowrap
                text-overflow ellipsis

      .m_jujia
        margin-bottom .3rem
        /*border-bottom .3rem  solid lightgrey*/
        .jujia
          width 100%
          .hdju
            height 1rem
            line-height 1rem
            font-size .5rem
            text-align center
            background #ffffff
          .content
            width 100%
            .list
              width 100%
              clearFix()
              height 520px
              .item
                width 50%
                padding-left .2rem
                box-sizing border-box
                overflow hidden
                float left
                img
                  width 345px
                  height 345px
                  background-color #f4f4f4
                .top
                  font-size .4rem
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  background #F1ECE2
                  width 345px
                  text-align center
                  line-height 1rem
                  height 1rem
                  margin-bottom .1rem
                  color #9F8A60
                .middle
                  font-size .45rem
                  margin-bottom .1rem
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                .bottom
                  color #b4282d
                  font-size .45rem
                  margin-bottom .1rem

          .line
            height  20px
            background-color #f4f4f4

</style>
