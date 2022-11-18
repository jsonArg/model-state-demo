<template>
  <div class="light-blue">
    <h2>{{msg}}</h2>
        <v-container>
          <v-row no-gutters v-for="(item) in sets" :key="item.id">
            <v-col>
              <v-switch
                  v-model="item.published"
                  label="Visibility"
              ></v-switch>
            </v-col>
            <v-col>
              <p>id: {{item.id}}</p>
            </v-col>
            <v-col>
              <p>Name: {{item.name}}</p>
            </v-col>

          </v-row>
        </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters } from "vuex";

export default {
  name : "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      greeting: "ok",
      visibility:[],

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
