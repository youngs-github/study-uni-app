<template>
  <view class="quick-nav-wrapper">
    <swiper indicatorDots class="swiper-box">
      <swiper-item
        class="swiper-item"
        v-for="swiper in quickNavs.list"
        :key="swiper.id"
      >
        <view class="item" v-for="item in swiper.list" :key="item.id">
          <image class="image" :src="item.image" />
          <text class="text">{{ item.name }}</text>
        </view>
      </swiper-item>
    </swiper>
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
        quickNavs: (state) => state.home.quickNavs
      })
    },
    methods: {
      // 映射store
      ...mapActions(['getQuickNavs'])
    },
    created() {
      this.getQuickNavs();
    }
  };
</script>

<style lang="scss">
  .quick-nav-wrapper {
    height: 200px;
    box-sizing: border-box;
    margin-bottom: -10px;

    .swiper-box {
      height: 100%;
      box-sizing: border-box;
    }

    .swiper-item {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: flex-start;
      padding-bottom: 20px;

      .item {
        gap: 0;
        width: 20%;
        height: 50%;
        display: flex;
        flex-direction: column;
      }

      .image {
        width: 45px;
        height: 45px;
        margin: 8px auto;
      }
      .text {
        color: #666;
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>
