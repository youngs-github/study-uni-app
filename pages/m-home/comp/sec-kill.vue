<template>
  <view class="sec-kill-wrapper">
    <view class="title-box">
      <view class="title">某某秒杀</view>
      <!-- 计时器 -->
      <timer :time="secKills.time"></timer>
      <view class="more">
        <text class="text">更多秒杀</text>
        <uni-icon class="icon" color="#fff" type="arrowright"></uni-icon>
      </view>
    </view>
    <view class="list-box">
      <view class="kill-item" v-for="kill in secKills.list" :key="kill.id">
        <image class="image" :src="kill.image" />
        <text class="price">¥ {{ kill.price }}</text>
        <text class="original">¥ {{ kill.original }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import Timer from './timer';

  export default {
    components: { Timer },
    data() {
      return {};
    },
    computed: {
      // 映射store
      ...mapState({
        secKills: (state) => state.home.secKills
      })
    },
    methods: {
      // 映射store
      ...mapActions(['getSecKills'])
    },
    created() {
      // 获取数据
      this.getSecKills();
    }
  };
</script>

<style lang="scss">
  .sec-kill-wrapper {
    margin: 10px;
    border-radius: 6px;
    background-color: #fff;

    .title-box {
      height: 36px;
      display: flex;
      padding: 0 6px;
      align-items: center;
      .title {
        flex: 1 1;
        color: #333;
        display: flex;
        font-size: 15px;
        flex-basis: 56px;
        padding-left: 6px;
      }
      .more {
        flex: 1 1;
        display: flex;
        font-size: 14px;
        flex-basis: 140px;
        align-items: center;
        padding-right: 10px;
        justify-content: flex-end;
        .text {
          color: #fa2c19;
        }
        .icon {
          width: 18px;
          height: 18px;
          display: flex;
          font-size: 18px;
          text-align: center;
          margin-left: 8px;
          align-items: center;
          padding-left: 1px;
          border-radius: 50%;
          justify-content: center;
          background-color: #fa2c19;
        }
      }
    }
    .list-box {
      height: 115px;
      display: flex;
      padding: 0 10px;
    }
    .kill-item {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      .image {
        width: 56px;
        height: 56px;
        border: 1px solid burlywood;
      }
      .price {
        color: #f2270c;
        font-size: 14px;
        margin-top: 10px;
        font-weight: 600;
      }
      .original {
        color: #999;
        font-size: 14px;
        margin-bottom: 10px;
        text-decoration: solid line-through #999;
      }
    }
  }
</style>
