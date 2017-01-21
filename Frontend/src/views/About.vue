<template>
  <div id="about">
    <navbar></navbar>
    <br>
    <aboutinfo></aboutinfo>
  </div>
</template>

<script>
  import navbar from '../components/navbar'
  import aboutinfo from '../components/aboutinfo'
  export default {
    name: 'about',
    components: {
      navbar,
      aboutinfo
    },
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style>
#logo {
  height: 15vh;
  width: 50vh;
  overflow: hidden;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.route {
  text-decoration: none;
}

</style>
