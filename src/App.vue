<template>
  <v-app>
    <v-main>
      <v-container class=" text-center grey lighten-5">

        <v-row>
          <v-col>
            <h2>How it works</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col>
                <h2 class="text-capitalize text-center orange darken-4">open console ! </h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <HelloWorld msg="sets stuff"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <HelloWorldTwo msg="set stuff"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container class=" text-center grey lighten-5">
        <v-row>
          <v-col>
            <CrudTable msg="table_demo stuff"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HelloWorldTwo from "@/components/HelloWorldTwo";
import { mapGetters, mapMutations } from "vuex/dist/vuex.esm.browser";
import CrudTable from "@/components/CrudTable";



export default {
  name: "App",

  components: {
    CrudTable,
    HelloWorldTwo,
    HelloWorld
  },
  methods   : {
    ...mapMutations({
      parseSets: "parseSets"
    }),
    extra () {
      this.parseSets(this.sample);
    }
  },
  computed  : {
    ...mapGetters({
      synced: "sets"
    })
  },
  created () {
    this.parseSets(this.sample);
  },
  data: () => ({

    sample: [
      {id: 1, name: "the set x1", counter: 1},
      {id: 3, name: "the set x2", counter: 1},
      {id: 3, name: "the set x2", counter: 1},
      {id: 3, name: "the set x2", counter: 1}
    ]

  })
};
</script>
