<template>
  <div class="light-red">
    <h2>{{ msg }}</h2>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Mass actions
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Subject data
        </v-card-title>

        <v-card-text>
          {{ localSelect }}
          <v-text-field
              v-if="this.localSelect.length===1"
              :placeholder="localSelect[0].name"
              :value="localSelect[0].name"
              v-model="new_name"
              label="name"
              filled
          ></v-text-field>

          <v-text-field  v-if="this.localSelect.length===1"
                        :placeholder="localSelect[0].name"
                        :value="localSelect[0].students"
                        label="Student#"
                        filled
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="saveEdit()"
          >
           save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table

        :headers="table_headers"
        :items="sets"
        class="elevation-1"
        item-key="index"
        v-model="localSelect"
        show-select
    >
      <template v-slot:[`item.published`]="{ item }">
        <v-simple-checkbox
            v-model="item.published"
            disabled
        ></v-simple-checkbox>
      </template>


      <template v-slot:[`item.actions`]="{ item }">
      {{item}}
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="item.add"
        >
          mdi-plus
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="initialize"
        >
          Reset
        </v-btn>
      </template>

    </v-data-table>


  </div>
</template>

<script>

import { mapGetters } from "vuex";


export default {
  name      : "CrudTable",
  components: {},
  props     : {
    msg: String
  },
  data () {
    return {
      state      : "ok",
      localSelect: [],
      new_name:"",

      dialog: false
    };
  },

  computed: {
    ...mapGetters({
      sets: "sets"
    }),
    table_headers:table_headers_maker(this.sets[0]),
    

  },
  mounted(){
   
   
     
    
  },
  created () {
  
   
  },

  methods: {

    editItem (item) {
      this.localSelect = [item];
      this.new_name=item.name
      this.dialog      = true;
    }
    ,
    saveEdit () {

      if(this.localSelect.length===1){
        this.localSelect[0].rename(this.new_name)
      }

      this.dialog      = false;

    },
      table_headers_maker (item) {
        let headers=[]
      

            let keys = Object.getOwnPropertyNames(item);
           

            keys.forEach(key => {
                let textValue =key.charAt(0).toUpperCase() + key.slice(1)
                if(key==="index"){
                    headers.push({text:textValue ,align: "start", value: key});
                } else{
                    headers.push({text:textValue , value: key});
                }
                

            });

            headers.push({ text: 'Actions', value: 'actions', sortable: false })
            
        this.table_headers=headers
    }
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
