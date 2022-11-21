<template>
  <div class="light-red">
    <h2>{{msg}}</h2>
    <div v-for="(item) in sets" :key="item.index">

    <HelloWorldTree  :item="item"/>
    </div>

  </div>
</template>

<script>

import {mapGetters } from "vuex";
import HelloWorldTree from "@/components/HelloWorldThree";

export default {
  name : "HelloWorldTwo",
  components: {HelloWorldTree},
  props: {
    msg: String
  },
  data () {
    return {
      state: "ok",
      names:[],
    };
  },
  computed: {
    ...mapGetters({
      sets: "sets"
    }),




  },
  methods : {



  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin : 40px 0 0;
}

ul {
  list-style-type : none;
  padding         : 0;
}

li {
  display : inline-block;
  margin  : 0 10px;
}

a {
  color : #42b983;
}
</style>
