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
      :default-file-list="fileList">
      
      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">Drop file here or <em>click to upload</em></div>
      <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: 'upload'
  }
</script>

<style>

</style>
