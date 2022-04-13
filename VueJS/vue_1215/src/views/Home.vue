<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

// <style <style lang="scss">
// .home{
//   background-color: rgb(0, 0, 0);
// }
// div{
//   background-color: rgb(0, 0, 0);
// }
// template{
//   background-color: black;
// }
  
// </style>