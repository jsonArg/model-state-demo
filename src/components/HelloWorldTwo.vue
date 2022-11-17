<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <div v-for="(item) in sets" :key="item.id">
      <div style="padding: 10px;background-color: #42b983">
        <v-input
            v-model="greeting"
            label="Regular"
            clearable
        ></v-input>
        <p @click="plusONE(item)">
          count {{item.counter}}
        </p>
      </div>
    </div>


  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters,mapActions, mapMutations } from "vuex";

export default {
  name : "HelloWorldTwo",
  props: {
    msg: String
  },
  data () {
    return {
      greeting: "ok"

    };
  },
  computed: {
    ...mapGetters({
      sets: "sets/getSets"
    }),
  },
  methods : {
    ...mapMutations({
      rename:"set/rename_api"
    }),
    ...mapActions({
      plusONE:"set/increment"
    })


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
