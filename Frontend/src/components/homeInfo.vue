<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-card id="homeInfo">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px; color: #e74c3c"><h1>Welcome to Vitalic</h1><img id="smallPic" src="../assets/smallLogo.png"/></span>
        </div>
        <div>
        <p>As technology rapidly innovates, so does our ability to provide healthcare services to those from a range of backgrounds. Vitalic’s mission is to use advanced, yet readily available technology to monitor vital qualities of a user. This technology can be deployed on a broad scale, from daily checkups on mobile to speedy registrations in hospitals. Our product can accurately measure several quantitative and qualitative datasets just by taking a simple video as input. Vitalic utilizes the Eulerian Video Magnification framework to amplify the frequency of movement in the consumer’s face, then collects and processes this data to provide the user with further details on things like their Blood Pressure, Mood, and Cholesterol Levels.
        </p>
        <router-link to="About"><el-button type="primary">Learn More</el-button></router-link>
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
    height: 125px;
    width: 100px;
  }
</style>
