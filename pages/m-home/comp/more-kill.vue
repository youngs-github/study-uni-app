<template>
  <view class="more-kill-wrapper">
    <view class="row-box">
      <!-- 两列结构 -->
      <view class="span_2" v-for="item in moreKills.span_2" :key="item.id">
        <view class="span_2_title">
          <text class="main-title">{{ item.name }}</text>
          <text class="meta-title">{{ item.meta }}</text>
        </view>
        <view class="span_2_images">
          <image
            class="image"
            v-for="image in item.images"
            :src="image.image"
            :key="image.id"
          />
        </view>
      </view>
    </view>
    <view class="row-box">
      <!-- 四列结构 -->
      <view class="span_4" v-for="item in moreKills.span_4" :key="item.id">
        <view class="span_4_title">
          <text class="main-title">{{ item.name }}</text>
          <text class="meta-title">{{ item.meta }}</text>
        </view>
        <view class="span_4_images">
          <image
            class="image"
            v-for="image in item.images"
            :src="image.image"
            :key="image.id"
          />
        </view>
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
        moreKills: (state) => state.home.moreKills
      })
    },
    methods: {
      // 映射store
      ...mapActions(['getMoreKills'])
    },
    created() {
      // 获取数据
      this.getMoreKills();
    }
  };
</script>

<style lang="scss">
  .more-kill-wrapper {
    height: 265px;
    margin: 10px;
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    background-color: #fff;
    .row-box {
      flex: 1 1 50%;
      display: flex;
      padding: 5px 12px;
    }
    .span_2 {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
    }
    .span_4 {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
    }
    .span_2_title {
      display: flex;
      font-size: 16px;
      flex-direction: column;
    }
    .main-title {
      font-weight: 600;
    }
    .meta-title {
      color: #666771;
      font-size: 14px;
    }
    .span_2_images {
      display: flex;
      padding: 10px 0;
      flex-grow: 1;
      justify-content: center;
      .image {
        width: 66px;
        height: 66px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .span_4_title {
      display: flex;
      font-size: 16px;
      margin-top: 5px;
      flex-direction: column;
    }
    .span_4_images {
      display: flex;
      justify-content: center;
      .image {
        width: 66px;
        height: 66px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
</style>
