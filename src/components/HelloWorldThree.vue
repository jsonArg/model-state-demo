<template>
  <div class="light-green">
    <v-container>
      <v-row>
        <v-col>
          <p>{{item}}</p>
          <p>{{item.constructor.name}}</p>
        </v-col>
        <v-col>
          <v-text-field
              :placeholder="item.name"
              :value="item.name"
              v-model="names[item.index]"
              :label="item.name"
              filled
          ></v-text-field>
        </v-col>
        </v-row>
      <v-row>
        <v-col>
        <v-btn color="red"   @click="item.delete">Delete/visbility</v-btn>
      </v-col>
        <v-col>
          <v-btn :disabled="!names[item.index]"  @click="item.rename(names[item.index])">save</v-btn>
        </v-col>

      </v-row>
    </v-container>

  </div>
</template>

<script>



export default {
  name : "HelloWorldTree",
  props: {
    item: Object
  },
  data () {
    return {
      names:[]
    };
  },
  computed: {

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
