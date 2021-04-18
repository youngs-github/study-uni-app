<template>
  <view
    class="backtop-wrapper"
    :style="{ display: backtop ? 'block' : 'none' }"
  >
    <view class="box" @click="onclick">
      <uni-icon class="icon" type="arrowthinup" title="回顶部"></uni-icon>
    </view>
  </view>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      // 映射store
      ...mapState({
        backtop: (state) => {
          return state.home.backtop;
        }
      })
    },
    methods: {
      // 映射store
      ...mapMutations(['setBacktop']),
      // 点击事件
      onclick() {
        this.setBacktop(!this.backtop);
      }
    }
  };
</script>

<style lang="scss">
  .backtop-wrapper {
    width: 36px;
    height: 36px;
    right: 15px;
    border: 1px solid #bbb;
    bottom: 66px;
    z-index: 10;
    position: fixed;
    border-radius: 50%;
    background-color: #fff;

    .box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      color: #666;
      margin: 0;
      padding: 0;
      font-size: 26px;
    }
    .none {
      display: none;
    }
  }
</style>
