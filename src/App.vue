<template>
  <v-app>
    <v-main>
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
import { mapGetters, mapMutations } from "vuex/dist/vuex.esm.browser";
import CrudTable from "@/components/CrudTable";



export default {
  name: "App",

  components: {
    CrudTable,

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

        //
        // /posts	100 posts
        // /comments	500 comments
        // /albums	100 albums
        // /photos	5000 photos
        // /todos	200 todos
        // /users	10 users

        fetch('https://jsonplaceholder.typicode.com/comments')    //api for the get request
      .then(response => response.json())
      .then(data => this.parseSets(data));

      
    
  },
  data: () => ({

    

  })
};
</script>
