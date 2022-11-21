import Vue from 'vue'
import Vuex from 'vuex'
import SetModelClass from "@/store/models/setModel";




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
      payload.forEach((set,index)=>{
        set.index=index
        console.log(index)
        parsedSets.push(new SetModelClass(set))
      })
      state.sets=parsedSets

    },
    testLog(payload){
      console.log(payload)
    }
  },
  actions: {
    asyncThing (context) {
      context.commit('increment')
    }
  }



})
