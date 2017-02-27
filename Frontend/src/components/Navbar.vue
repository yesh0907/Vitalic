<template>
  <div id="navbar">
    <div class="fixed-action-btn toolbar">
  <a class="btn-floating btn-large red">
    <i class="material-icons">reorder</i>
  </a>
  <ul>
    <li class="waves-effect waves-light"><a href="/"><i class="material-icons">home</i></a></li>
    <li class="waves-effect waves-light"><a href="/About"><i class="material-icons">info</i></a></li>
    <li class="waves-effect waves-light"><a href="/Detail"><i class="material-icons">show_chart</i></a></li>
    <li class="waves-effect waves-light"><a href="/Dashboard"><i class="material-icons">dashboard</i></a></li>
  </ul>
</div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        document.getElementById(key).className += 'active-class'
        document.getElementById(key).className = document.getElementById(key).className.replace(/(?:^|\s)MyClass(?!\S)/g, '')
      }
    }
  }
</script>

<style>
.menu {
  float: right;
  text-align: center;
}

.route {
  text-decoration: none;
}
</style>
