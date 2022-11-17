import Vue from 'vue'
import Vuex from 'vuex'
import setModule from "@/store/modules/setModule";
import setsModule from "@/store/modules/setsModule";

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sets:setsModule,
    set:setModule
  }
})
