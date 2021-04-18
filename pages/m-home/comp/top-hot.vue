<template>
  <view class="top-hots-wrapper">
    <swiper
      autoplay
      circular
      :interval="4000"
      indicatorDots
      class="swiper-box"
      @click="onclick"
    >
      <swiper-item class="slider" v-for="item in topHots.list" :key="item.id">
        <image class="image" :src="item.path" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data() {
      return {
        list: []
      };
    },
    computed: {
      // 映射store
      ...mapState({
        topHots: (state) => state.home.topHots
      })
    },
    methods: {
      // 映射store
      ...mapActions(['getTopHots']),
      // 点击事件
      onclick() {
        //
      }
    },
    created() {
      this.getTopHots();
    }
  };
</script>

<style lang="scss">
  .top-hots-wrapper {
    height: 200px;
    padding: 8px;
    box-sizing: border-box;

    .swiper-box {
      height: 100%;
      position: relative;
      .slider {
        border-radius: 4px;
        box-sizing: border-box;
      }
      .image {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-sizing: border-box;
      }
    }
  }
</style>
