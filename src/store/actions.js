import {
  RECEIVE_MSITEDATA,
  RECEIVE_THINGSDATA,
  RECEIVE_CLASSIFYDATA,
} from './mutations-type'

import {
  reqMsiteData,
  reqClassifyData,
  reqThingsData
} from '../api'

export default {
  //1,首页数据的异步请求
  async getMsiteData({commit}, c) {
    const result = await reqMsiteData();
    if (result.code === 0) {
      const msiteData = result.data;
      commit(RECEIVE_MSITEDATA, {msiteData});
      c && c()
    }
  },
  //2，识物页面数据的异步请求
  async getThingsData({commit}) {
    const result = await reqThingsData();
    if (result.code === 0) {
      const thingsData = result.data;
      commit(RECEIVE_THINGSDATA, {thingsData})
    }
  },
  //3，分类页面数据的异步请求
  async getClassData({commit}) {
    const result = await reqClassifyData();
    if (result.code === 0) {
      const classData = result.data;
      commit(RECEIVE_CLASSIFYDATA, {classData})
    }
  },
}
