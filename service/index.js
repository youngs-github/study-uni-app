import Taro from '@tarojs/taro';

const baseurl =
  'https://www.fastmock.site/mock/2e10db04847afcadd078e88a3dc098f6/rn-api';

// 查询搜索历史及热门
export const getSearchInfo = async () => {
  const { data, statusCode } = await Taro.request({
    url: `${baseurl}/search-info`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return {};
};

// 根据关键字进行搜索
export const getSearchList = async () => {
  const { data, statusCode } = await Taro.request({
    url: `${baseurl}/search-list`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return await data;
  }
  return [];
};
