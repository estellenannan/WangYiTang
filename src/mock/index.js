/*
* 模拟后台数据
* */


import Mock from 'mockjs'
import MsiteData from './data/datahome.json'
import ClassifyData from './data/datafenlei.json'
import ThingsData from './data/datashiwu.json'

Mock.mock('/msitedata', {
  code: 0,
  data: MsiteData
});
Mock.mock('/classifydata', {
  code: 0,
  data: ClassifyData
});
Mock.mock('/thingsdata', {
  code: 0,
  data: ThingsData
});


/*
*
* import Mock from 'mockjs'

import home_data from './mock/home_data.json'
import shiwu_data from './mock/shiwu_data.json'
import {categoryL1List} from './mock/category_data.json'

 const category_data = categoryL1List;

Mock.mock('/home_data',{code:0,data:home_data});
Mock.mock('/shiwu_data',{code:0,data:shiwu_data});
Mock.mock('/category_data',{code:0,data:category_data});
* */
