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
          <v-col cols="2">
            <h3 class="mb-2">Dashboard is served</h3>
            <h4>SAMPLE DATA</h4>
            <h5>THIS CAN BE PARSED</h5>
            <pre>created()</pre>
            <pre>{{ sample }}</pre>
          </v-col>
          <v-col cols="3">
            <h3 class="mb-2">Parsed</h3>
            <v-btn @click="parseSets(sample)">
              parse
            </v-btn>
            <pre>{{ synced }}</pre>
          </v-col>
          <v-col cols="7">
            <v-row  >
              <v-col>
                <h2 class="text-capitalize text-center orange darken-4">open console ! </h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>

            <HelloWorld msg="sets stuff"/>
              </v-col>
              <v-col>

                <HelloWorldTwo msg="set stuff"/>
              </v-col>
            </v-row>


          </v-col>

        </v-row>
      </v-container>


    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HelloWorldTwo from "@/components/HelloWorldTwo";
import { mapGetters, mapActions } from "vuex/dist/vuex.esm.browser";


export default {
  name: "App",

  components: {
    HelloWorldTwo,
    HelloWorld
  },
  methods   : {
    ...mapActions({
      parseSets: "parseSets"
    })
  },
  computed  : {
    ...mapGetters({
      synced: "sets"
    })
  },
  created () {
    //this.parseSets(this.sample)
  },
  data: () => ({

    sample: [
      {id: 1, name: "the set x1", counter: 1},
      {id: 2, name: "the set x2", counter: 1},
      {id: 3, name: "the set x3", counter: 1}
    ]

  })
};
</script>
