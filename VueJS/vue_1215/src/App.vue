<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <HelloWorld :msg="test"></HelloWorld> -->
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import test from '@/components/test'
  import Header from '@/components/Header'

  import axios from 'axios'

  export default {
    // 關於生命週期，當我們掛載結束之後的動作
    mounted() {
      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
      axios.get(api)
      .then(result=>{
        console.log(result.data)
        this.articles = result.data.data
      })
    },
    data(){
      mount
      return {
        count:0, 
        test:'test',
        articles:null,
        }
    },
    components:{
      HelloWorld,
      test,
      Header,
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
