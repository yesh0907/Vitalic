<template>
  <div id="upload">
    <el-upload
      action="//jsonplaceholder.typicode.com/posts/"
      type="drag"
      :multiple="true"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :default-file-list="fileList"
      v-loading="loading"
      element-loading-text="Loading...">

      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">Drop file here or <em>click to upload</em></div>
      <div class="el-upload__tip" slot="tip">Video Files with a Size Less than 100MB</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: 'upload',
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

<style>

</style>
