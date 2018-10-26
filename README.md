自己根据vue做的网易项目发现的注意问题：
1，$rem=750/10rem在mixin里面设置变量
在webpack.base里面设置
{
  test:/\.styl$/,
  loader:'style-loader!css-loader!stylus-loader',
  include: []
}
2,基本都用a标签包裹
要注意要标签宽度不要超出，要不然会有空白
3，浮动的问题无法解决
.things_content
  width 100%
  overflow hidden//给最大的容器加
  .banner
    width 29rem
    .list//ul
      clearFix()
      .item//li
        float left
        margin .2rem
        img
          width 670px
          height 385px

4，better-scroll的滑动问题
<!--11个词语长屏滑动-->
<div class="hdScorllX" >//长度750
  <div class="list">//长度2222多
    <div class="hdScorllItem" v-for="(headCate,index) in msiteData.headCateList" :key="index">
      <span :class="{active:current===index}" @click="currentIndex(index)">{{headCate.name}}</span>
    </div>
  </div>
</div>
滑动包裹的容器不对，内容要撑开容器宽度
let BScrollCiyu = new BScroll('.hdScorllX', {

5,注册的二级路由没有显示
一级路由里面加上
<router-view></router-view>
就可以了


6，input 默认样式去除 outline none
7,轮播图片居中 swiper space-between 设间距

8,
&.active//记住！！！！&后面是个点
  display block

9.
<input type="tel" maxlength="11" placeholder="请输入手机号"

10，给同在一行的文字溢出的部分在第二行，两行上下产生间距，设置line-height即可


11:  :key="index<=3" 可控制遍历回来的数量
   第二种方法在getters里面截取

spPinpai(state) {
  return state.msiteData.tagList.splice(0,4)
},

12,flex-shrink属性
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
.item {
  flex-shrink: <number>; /* default 1 */
}


如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效


