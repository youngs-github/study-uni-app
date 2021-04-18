<template>
  <view class="timer-wrapper">
    <!-- 场次 -->
    <text class="text">{{ text }}</text>
    <!-- 时分秒 -->
    <text class="item">{{ timer.h }}</text>
    <text class="sepa">:</text>
    <text class="item">{{ timer.m }}</text>
    <text class="sepa">:</text>
    <text class="item">{{ timer.s }}</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        timer: {
          h: '00',
          m: '00',
          s: '00'
        },
        stamp: 0,
        interval: 0
      };
    },
    props: {
      time: {
        type: Object,
        default() {
          return {
            text: '',
            stamp: 0
          };
        }
      }
    },
    watch: {
      time: {
        deep: true,
        handler(time) {
          // 重置状态
          this.init(time);
        }
      }
    },
    methods: {
      init(time) {
        // 初始化
        this.text = time.text;
        this.stamp = time.stamp;
        if (this.interval) {
          clearInterval(this.interval);
        }
        this.updater();
        this.interval = setInterval(this.updater, 1000);
      },
      updater() {
        let { stamp } = this;
        // 计时结束
        if (stamp-- <= 0) {
          // 清除定时器
          return clearInterval(this.interval);
        }
        this.stamp = stamp;
        this.timer = {
          h: String((stamp / 3600) >> 0).padStart(2, '0'),
          m: String(((stamp % 3600) / 60) >> 0).padStart(2, '0'),
          s: String(stamp % 60 >> 0).padStart(2, '0')
        };
      }
    },
    beforeDestroy() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  };
</script>

<style lang="scss">
  .timer-wrapper {
    height: 30px;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: flex-start;
    .text {
      color: #ff2727;
      font-size: 14px;
      margin-right: 16px;
    }
    .item {
      color: #fff;
      display: flex;
      padding: 0 2px;
      align-items: center;
      border-radius: 3px;
      background-color: #fa2c19;
    }
    .sepa {
      color: #fa2c19;
      margin: 0 2px;
      display: flex;
      font-size: 16px;
      align-items: center;
    }
  }
</style>
