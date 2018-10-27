/*
* 截取品牌品牌制造商直供，只要4个
* */
/*
包含n个get计算属性的方法
* */
export default {
  spPinpai(state) {
    if(!state.msiteData.tagList) return ;
    return state.msiteData.tagList.splice(0,4)
  },
}
