<template>
  <view class="cart-wrapper">
    <button type="primary" @click="onclick">选择图片</button>
    <!-- 结果 -->
    <view class="result">
      <view class="item" v-for="(item, i) in list" :key="i">
        <p>关键字：{{ item.keyword }}</p>
        <p>得分：{{ item.score }}</p>
      </view>
    </view>
  </view>
</template>

<script>
  const access_token =
    '24.4ff8e81a734a2b7598f98830a40f6876.2592000.1620307132.282335-23941567';
  export default {
    data() {
      return {
        list: []
      };
    },
    methods: {
      // 点击事件
      onclick() {
        // 选取图片，限1张
        uni.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: ({ tempFiles: [file] }) => {
            // 转码
            this.encode(file);
          }
        });
      },
      // 转成base64
      encode(file) {
        //#ifdef MP-WEIXIN
        uni.getFileSystemManager().readFile({
          encoding: 'base64',
          filePath: file.path,
          success: ({ data }) => {
            this.classify(data);
          }
        });
        //#endif
        //#ifdef H5
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onloadend = ({ target: { result } }) => {
          // 调用查询接口
          this.classify(result);
        };
        //#endif
      },
      // 分析图片
      async classify(image) {
        const [
          err,
          {
            data: { result }
          }
        ] = await uni.request({
          url: `https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token=${access_token}`,
          data: {
            image
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        this.list = result;
      }
    }
  };
</script>

<style lang="scss">
  .cart-wrapper {
    height: 100%;

    .result {
      margin-top: 15px;
      .item {
        height: 46px;
        display: flex;
        padding: 0 20px;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
</style>
