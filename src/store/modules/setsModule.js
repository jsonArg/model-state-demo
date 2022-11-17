const setsModule = {
    namespaced:true,
    state: () => ({
        server_sets : [
            { id:1 , name:"the set x1" ,counter:1},
            { id:2 , name:"the set x2" ,counter:1 },
            { id:3 , name:"the set x3" ,counter:1},
            { id:4 , name:"the set x4" ,counter:1},
        ]
    }),
    mutations: {
        //rename ({state,commit},set) {
        //  commit("setModule/rename",set,{ root: true })
        //}
    },
    getters: {
        getSets (state) {
            return state.server_sets
        }
    },
    actions: {
        //massDelete_api (state,payload) {
        //   console.log("api mass del")
        //}
    },
}
export default  setsModule
/* eslint-disable */