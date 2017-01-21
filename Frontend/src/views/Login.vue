<template>
  <div id="loginInput">
    <loginInput></loginInput>
    <uploadBox></uploadBox>
  </div>
</template>

<script>
  import loginInput from '../components/loginInput'
  import uploadBox from '../components/uploadBox'
  export default {
    name: 'login',
    components: {
      loginInput,
      uploadBox
    }
  }
</script>
