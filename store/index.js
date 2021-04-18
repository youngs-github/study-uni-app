import Vue from 'vue';
import Vuex from 'vuex';

import homeModule from './home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: homeModule
  }
});

export default store;
