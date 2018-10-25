import {
  RECEIVE_MSITEDATA,
  RECEIVE_THINGSDATA,
  RECEIVE_CLASSIFYDATA,
} from './mutations-type'

export default {
  [RECEIVE_MSITEDATA](state, {msiteData}) {
    state.msiteData = msiteData
  },
  [RECEIVE_THINGSDATA](state, {thingsData}) {
    state.thingsData = thingsData
  },
  [RECEIVE_CLASSIFYDATA](state, {classData}) {
    state.classData = classData
  }
}
