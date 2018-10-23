/*
*
* 多个请求接口
* */


import ajax from './ajax'
export const reqMsiteData = () => ajax('/msitedata');
export const reqClassifyData = () => ajax('/classifydata');
export const reqThingsData = () => ajax('/thingsdata');

/*// const API='/api';
const API='';

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(API+'/position/' + geohash);*/
