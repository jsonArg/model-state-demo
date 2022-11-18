<template>
  <div class="light-green">
    <h2>{{msg}}</h2>
    <v-container no-gutters v-for="(item) in sets" :key="item.id">
      <v-row  >
        <v-col>
          <p>{{item}}</p>
          <p>{{item.constructor.name}}</p>
        </v-col>
        <v-col>
          <v-text-field
              :placeholder="item.name"
              v-model="names[item.id]"
              :label="item.name"
              filled

          ></v-text-field>
        </v-col>
        </v-row>
      <v-row>
        <v-col>
        <v-btn color="red"   @click="item.delete">Delete</v-btn>
      </v-col>
        <v-col>
          <v-btn :disabled="!item.published"  @click="item.rename(names[item.id])">save</v-btn>
        </v-col>

      </v-row>
    </v-container>

  </div>
</template>

<script>

import {mapGetters } from "vuex";

export default {
  name : "HelloWorldTwo",
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
