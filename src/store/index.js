import Vue from 'vue'
import Vuex from 'vuex'
import SetModel from "@/store/models/setModel";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sets: []

  },
  getters: {
    sets(state){
      return state.sets
    }

    },
  mutations: {
    parseSets (state,payload){
      let  parsedSets=[]
      payload.forEach(set=>{
        parsedSets.push(new SetModel(set))
      })
      state.sets=parsedSets

    }
  },
  actions: {
    parseSets (context,payload) {
      context.commit('parseSets',payload)
    }
  },

})
