<template>
  <div id="uploadBox">
    <el-button type="" @click="dialogVisible = true">Upload File</el-button>
    <el-dialog title="Upload" v-model="dialogVisible" size="medium">
      <upload></upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import upload from './upload'
  export default {
    name: 'uploadBox',
    components: {
      upload
    },
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      finishLoading () {

      }
    }
  }
</script>

<style>

</style>
