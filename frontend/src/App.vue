<template>
  <div id="app">
    <router-view></router-view>
    <login><login>
  </div>
</template>

<script>
<<<<<<< HEAD
  import login from './views/Login'
  export default {
    name: 'app',
    components: {
      login
    }
  }
=======
export default {
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.$store.commit('resize', { size: window.innerWidth })
    }
  }
}

>>>>>>> master
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: #c0392b;
}
</style>
