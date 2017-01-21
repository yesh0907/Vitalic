<template>
  <div id="home">
    <navbar></navbar>
    <homeInfo></homeInfo>
  </div>
</template>

<script>
  import navbar from '../components/navbar'
  import homeInfo from '../components/homeInfo'
  export default {
    name: 'home',
    components: {
      navbar,
      homeInfo
    }
  }
</script>

<style>

</style>
