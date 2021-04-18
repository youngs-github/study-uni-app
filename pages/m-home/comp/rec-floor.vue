<template>
  <view class="rec-floor-wrapper">
    <view class="margin-box" v-for="item in recFloors.list" :key="item.id">
      <view class="item-box">
        <!-- 图片 -->
        <view class="image-box">
          <image class="image" :src="item.image" />
        </view>
        <!-- 详情 -->
        <view class="text-box">{calcIcon(f)}</view>
        <!-- 价格 -->
        <view class="price-box">
          <text class="price">¥ {{ item.price }}</text>
          {pa}
          <text class="similar">看相似</text>
        </view>
        <!-- 会员 -->
        <view class="source-box">{{ item.source }}</view>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      // 映射store
      ...mapState({
        recFloors: (state) => state.home.recFloors
      })
    },
    methods: {
      // 映射store
      ...mapActions(['getRecFloors'])
    },
    created() {
      // 获取数据
      this.getRecFloors();
    }
  };
</script>

<style lang="scss">
  .rec-floor-wrapper {
    flex: 1 1 auto;
    margin: 10px 5px;
    display: flex;
    flex-wrap: wrap;
    .margin-box {
      width: 50%;
      height: 285px;
      padding: 0 5px;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
    .item-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .image-box {
      width: 100%;
      height: 186px;
      position: relative;
      .image {
        width: 100%;
        height: 100%;
        border: 1px solid burlywood;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
    .text-box {
      padding: 10px;
      position: relative;
      .icon {
        color: #fff;
        display: inline-block;
        padding: 0 3px;
        transform: scale(0.8);
        font-size: 14px;
        text-align: center;
        line-height: 16px;
        border-radius: 2px;
        vertical-align: top;
        background-color: #ff0000;
      }
      .text {
        height: 28px;
        display: -webkit-box;
        overflow: hidden;
        font-size: 14px;
        word-break: break-all;
        line-height: 16px;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .price-box {
      position: relative;
      line-height: 24px;
      .price {
        color: #fa2c19;
        font-size: 16px;
        font-weight: bold;
        padding-left: 10px;
      }
      .paicon {
        color: #fa2c19;
        border: 1px solid #fa2c19;
        height: 16px;
        padding: 0 5px;
        font-size: 14px;
        text-align: center;
        line-height: 14px;
        margin-top: 2px;
        margin-left: 10px;
        border-radius: 6px;
        vertical-align: baseline;
      }
      .similar {
        top: 5px;
        color: #808080;
        float: right;
        padding: 4px 10px;
        position: relative;
        font-size: 14px;
        text-align: center;
        background-color: #f0f2f5;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    .source-box {
      position: relative;
      line-height: 24px;
      .source {
        color: #232326;
        font-size: 12px;
        font-weight: bold;
        padding-left: 10px;
      }
      .icon {
        color: #d9cf7e;
        height: 16px;
        display: inline-block;
        padding: 3px 5px 0;
        transform: scale(0.6);
        font-size: 14px;
        text-align: center;
        line-height: 14px;
        border-radius: 3px;
        background-color: #232326;
      }
    }
  }
</style>
