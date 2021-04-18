<template>
  <view class="home-wrapper">
    <scroll-view class="scroll-box" scroll-y>
      <!-- 回顶部 -->
      <back-top></back-top>
      <!-- 轮播图 -->
      <top-hots></top-hots>
      <!-- 快速导航 -->
      <quick-nav></quick-nav>
      <!-- 秒杀系列 -->
      <sec-kill></sec-kill>
      <!-- 更多秒杀 -->
      <more-kill></more-kill>
      <!-- 为你推荐 -->
      <rec-floor></rec-floor>
    </scroll-view>
  </view>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';

  import BackTop from './comp/backtop.vue';
  import TopHots from './comp/top-hot.vue';
  import QuickNav from './comp/quick-nav.vue';
  import SecKill from './comp/sec-kill.vue';
  import MoreKill from './comp/more-kill.vue';
  import RecFloor from './comp/rec-floor.vue';

  export default {
    components: { BackTop, TopHots, QuickNav, SecKill, MoreKill, RecFloor },
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
    watch: {
      // 滚动事件
      backtop(backtop) {
        if (!backtop) {
          // this.$refs.scrollRef.scrollIntoView = 'home-scroll-id-0';
          // this.$refs.scrollRef.scrollTo({
          //   top: 0,
          //   behavior: 'auto'
          // });
        }
      }
    },
    methods: {
      // 映射store
      ...mapActions(['getRefreshing', 'getRecFloors']),
      ...mapMutations(['setBacktop']),
      // 滚动视图
      onscroll({ detail: { scrollTop } }) {
        const { backtop } = this;
        const { offsetHeight } = document.body;
        if (backtop && scrollTop < offsetHeight * 2) {
          this.setBacktop(false);
        }
        if (!backtop && scrollTop > offsetHeight * 2) {
          this.setBacktop(true);
        }
      }
    },
    onReachBottom() {
      // 获取数据
      this.getRecFloors();
    },
    onPullDownRefresh() {
      // 下拉刷新
      this.getRefreshing().then(uni.stopPullDownRefresh);
    }
  };
</script>

<style lang="scss">
  .home-wrapper {
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    position: fixed;
    background-color: #f6f6f6;

    .scroll-box {
      height: 100%;
    }
  }
</style>
