/* eslint-disable */
const setModule = {
    namespaced:true,
    state: () => ({
        set:{
            id:null,
            name:null,
            counter:null
        }
    }),
    mutations: {
        //rename_local ({state},payload) {
        //    state.set.name=payload.name
        //},
        rename_api ({state},payload) {
            console.log("rename_api")
            console.log(payload)
        }
    },
    getters: {
        //getSets (state) {
        //    return state.sets
        //}
    },
    actions: {
        increment({state},payload){
            state.set=payload
            state.set.counter++
        }
    },
}

export default  setModule
