<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-card id="homeInfo">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px; color: #e74c3c"><h1>Welcome to Vitalic</h1><img id="smallPic" src="../assets/smallLogo.png"/></span>
        </div>
        <div>
        <p>Health is not only one of the most promising applications for technology, but also one of the most beneficial applications for society. Vitalic realizes the immense potential of technology and its versatile ability to weave into many fields to benefit the masses. With our web-based application, Vitalic is able to offer basic health services previously only available through expensive pieces of hardware. Our program uses the latest Eulerian Video Magnification technologies, developed at MIT, to determine useful dynamic qualities at a point in time - including Heart Rate, Breathing Rate, and Blood Pressure. When our program was tested for accuracy against a branded Heart Rate Tracker, there was a negligible difference between the measured Heart Rates.
        </p>
        <router-link to="About"><el-button type="primary">Learn More!</el-button></router-link>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'homeInfo'
  }
</script>

<style>
  #homeInfo {
    max-width: 1000px;

  }
  #smallPic {
    height: 25vh;
    width: 10vw;
  }
</style>
