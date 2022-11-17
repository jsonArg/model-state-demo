<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="this"/>
    <HelloWorldTwo msg="other"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldTwo from "@/components/HelloWorldTwo";


export default {
  name: 'App',
  components: {
    HelloWorldTwo,
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
