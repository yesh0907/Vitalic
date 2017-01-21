<template>

<div class="container">
  <div class="title">{{data.date}}</div>
  <div class="content">
    <h1>{{ data }}</h1>
  </div>
</div>

</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.container {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #ffffff;

}

.container:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.content {
    padding: 2px 16px;
}

.title {
  text-align: left;
}
</style>
