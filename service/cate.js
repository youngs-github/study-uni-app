import Taro from '@tarojs/taro';

import { isWeApp } from '../util/index';

// 查询商品分类
export const getCategories = async () => {
  if (isWeApp()) {
    const { result } = await Taro.cloud.callFunction({
      name: 'getCategory',
      data: {
        a: 1,
        b: 2
      }
    });
    console.log('云函数调用完成：', result);
    return result;
  } else {
    const { data, statusCode } = await Taro.request({
      url:
        'https://www.fastmock.site/mock/2e10db04847afcadd078e88a3dc098f6/rn-api/categories'
    });
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    }
  }

  return [];
};

// 查询商品分类详情
export const getCategoryLink = async (id) => {
  const { data, statusCode } = await Taro.request({
    url:
      'https://www.fastmock.site/mock/2e10db04847afcadd078e88a3dc098f6/rn-api/category-link?id=' +
      id
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return [];
};
