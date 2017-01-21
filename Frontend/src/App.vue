<template>
  <div id="app">
    <router-view id="view"></router-view>
  </div>
</template>

<script>
  import login from './views/Login'
  import home from './views/Home'

  export default {
    name: 'app',
    components: {
      login,
      home
    },
    created () {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        this.$store.commit('resize', {
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: auto;
}

html {
  /*background-color: #87CEFA;*/
  background-color: #AEEEEE;}
</style>
