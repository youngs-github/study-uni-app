const baseurl =
  'https://www.fastmock.site/mock/2e10db04847afcadd078e88a3dc098f6/rn-api';

// 主页接口
// 查询热门推荐商品
export const getTopHots = async () => {
  const [err, { data, statusCode }] = await uni.request({
    url: `${baseurl}/hots`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return [];
};

// 查询快速导航对象
export const getQuickNav = async () => {
  const [err, { data, statusCode }] = await uni.request({
    url: `${baseurl}/quick-nav`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return [];
};

// 查询秒杀商品对象
export const getSecKills = async () => {
  const [err, { data, statusCode }] = await uni.request({
    url: `${baseurl}/sec-kill`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return {
    list: [],
    time: {
      text: '',
      stamp: 0
    }
  };
};

// 查询更多秒杀商品
export const getMoreKills = async () => {
  const [err, { data, statusCode }] = await uni.request({
    url: `${baseurl}/more-kill`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return {
    span_2: [],
    span_4: []
  };
};

// 查询为你推荐商品
export const getRecFloors = async () => {
  const [err, { data, statusCode }] = await uni.request({
    url: `${baseurl}/rec-floor`
  });
  if (statusCode >= 200 && statusCode < 300) {
    return data;
  }
  return [];
};
