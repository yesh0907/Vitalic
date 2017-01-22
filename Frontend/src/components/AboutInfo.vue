<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-card id="aboutInfo">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px; color: #e74c3c"><h1>About Vitalic</h1></span>
        </div>
        <h4>About Our Product</h4>
        <p>
          Health is not only one of the most promising applications for technology, but also one of the most beneficial applications for society. Vitalic realizes the immense potential of technology and its versatile ability to weave into many fields to benefit the masses. With our web-based application, Vitalic is able to offer basic health services previously only available through expensive pieces of hardware. Our program uses the latest Eulerian Video Magnification technologies, developed at MIT, to determine useful dynamic qualities at a point in time - including Heart Rate, Breathing Rate, and Blood Pressure. When our program was tested for accuracy against a branded Heart Rate Tracker, there was a negligible difference between the measured Heart Rates.
        </p>
        <h4>About The Team</h4>
        <p>
          We are a team of four from Singapore American School, each with a dedicated passion for programming and leveraging technology to benefit society. Yesh is our primary Backend Developer, with a broad experience in NodeJS and MongoDB. Sarthak worked on the algorithms for calculating Blood Pressure and Mood amongst other qualities. Alan and Will are our Frontend Developers, sharing a range of experience across Vue.JS and UI/UX. But, our team does not just divide between FrontEnd and Backend, only to reconvene at the end of the project - rather, we ensure that all of our developers have a basic understanding of the code in both the front and backend of the code.
        </p>
        <h4>About Our Measurements</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'aboutinfo'
  }
</script>

<style>
#aboutInfo {
  max-width: 1000px
}

</style>
