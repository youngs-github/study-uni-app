import {
  getTopHots,
  getQuickNav,
  getSecKills,
  getMoreKills,
  getRecFloors
} from '../service/home';

const homeModule = {
  state: {
    // 回顶部
    backtop: false,
    // 滚动距离
    scrollTop: 0,
    // 下拉刷新
    refreshing: false,
    // 顶部推荐
    topHots: {
      list: [],
      loading: false
    },
    // 快速导航
    quickNavs: {
      list: [],
      loading: false
    },
    // 秒杀商品
    secKills: {
      list: [],
      time: {
        text: '',
        stamp: 0
      },
      loading: false
    },
    // 更多秒杀
    moreKills: {
      span_2: [],
      span_4: [],
      loading: false
    },
    // 为你推荐
    recFloors: {
      list: [],
      loading: false
    }
  },
  actions: {
    // 下拉刷新
    async getRefreshing({ commit, dispatch }) {
      commit('setRefreshing', true);
      await Promise.all([
        dispatch('getTopHots'),
        dispatch('getSecKills'),
        dispatch('getMoreKills')
      ]);
      commit('setRefreshing', false);
    },
    // 顶部推荐
    async getTopHots({ commit }) {
      // 请求数据
      commit('setTopHots', {
        list: [],
        loading: true
      });
      const hots = await getTopHots();
      // 打乱顺序
      for (let i = 0; i < 3; i++) {
        let j = Math.floor(Math.random() * 3) + 3;
        // 交换
        [hots[i], hots[j]] = [hots[j], hots[i]];
      }
      commit('setTopHots', {
        list: hots,
        loading: false
      });
    },
    // 快速导航
    async getQuickNavs({ commit }) {
      // 请求数据
      commit('setQuickNavs', {
        list: [],
        loading: true
      });
      const navs = await getQuickNav();
      commit('setQuickNavs', {
        list: navs,
        loading: false
      });
    },
    // 秒杀商品
    async getSecKills({ commit }) {
      // 请求数据
      commit('setSecKills', {
        list: [],
        time: { text: '', stamp: 0 },
        loading: true
      });
      const secs = await getSecKills();
      // 打乱顺序
      for (let i = 0; i < 3; i++) {
        let j = Math.floor(Math.random() * 3) + 3;
        // 交换
        [secs.list[i], secs.list[j]] = [secs.list[j], secs.list[i]];
      }
      commit('setSecKills', {
        list: secs.list,
        time: secs.time,
        loading: false
      });
    },
    // 更多秒杀
    async getMoreKills({ commit }) {
      // 请求数据
      commit('setMoreKills', {
        span_2: [],
        span_4: [],
        loading: true
      });
      const more = await getMoreKills();
      // 打乱顺序
      if (Math.random() > 0.5) {
        for (let i = 0; i < 1; i++) {
          let j = Math.floor(Math.random() * 1) + 1;
          // 交换
          [more.span_2[i], more.span_2[j]] = [more.span_2[j], more.span_2[i]];
        }
      }
      for (let i = 0; i < 2; i++) {
        let j = Math.floor(Math.random() * 2) + 2;
        // 交换
        [more.span_4[i], more.span_4[j]] = [more.span_4[j], more.span_4[i]];
      }
      commit('setMoreKills', {
        span_2: more.span_2,
        span_4: more.span_4,
        loading: false
      });
    },
    // 为你推荐
    async getRecFloors({ commit, state }) {
      // 请求数据
      if (state.recFloors.list.length >= 200 || state.recFloors.loading) {
        return;
      }
      commit('setRecFloors', {
        list: [],
        loading: true
      });
      const floor = await getRecFloors();
      floor.forEach((f) => {
        f.id = Math.random().toString(36);
      });
      // 打乱顺序
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * 5) + 5;
        // 交换
        [floor[i], floor[j]] = [floor[j], floor[i]];
      }
      commit('setRecFloors', {
        list: [...state.recFloors.list, ...floor],
        loading: false
      });
    }
  },
  mutations: {
    // 回顶部
    setBacktop(state, backtop) {
      state.backtop = backtop;
    },
    // 滚动距离
    setScrollTop(state, scrollTop) {
      state.scrollTop = scrollTop;
    },
    // 下拉刷新
    setRefreshing(state, refreshing) {
      state.refreshing = refreshing;
    },
    // 顶部推荐
    setTopHots(state, { list, loading }) {
      state.topHots.list = list;
      state.topHots.loading = loading;
    },
    // 快速导航
    setQuickNavs(state, { list, loading }) {
      state.quickNavs.list = list;
      state.quickNavs.loading = loading;
    },
    // 秒杀商品
    setSecKills(state, { list, time, loading }) {
      state.secKills.list = list;
      state.secKills.time = time;
      state.secKills.loading = loading;
    },
    // 更多秒杀
    setMoreKills(state, { span_2, span_4, loading }) {
      state.moreKills.span_2 = span_2;
      state.moreKills.span_4 = span_4;
      state.moreKills.loading = loading;
    },
    // 为你推荐
    setRecFloors(state, { list, loading }) {
      if (list.length) {
        state.recFloors.list = list;
      }
      state.recFloors.loading = loading;
    }
  }
};

export default homeModule;
