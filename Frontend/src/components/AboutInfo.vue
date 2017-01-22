<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-card id="aboutInfo">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px; color: #e74c3c"><h1>About Vitalic</h1></span>
        </div>
        <h4>About Our Product</h4>
        <p>
          As technology rapidly innovates, so does our ability to provide healthcare services to those from a range of backgrounds. Vitalic’s mission is to use advanced, yet readily available technology to monitor vital qualities of a user. This technology can be deployed on a broad scale, from daily checkups on mobile to speedy registrations in hospitals. Our product can accurately measure several quantitative and qualitative datasets just by taking a simple video as input. Vitalic utilizes the Eulerian Video Magnification framework to amplify the frequency of movement in the consumer’s face, then collects and processes this data to provide the user with further details on things like their Blood Pressure, Mood, and Cholesterol Levels.
        </p>
        <h4>About The Team</h4>
        <p>
          We are a team of four from Singapore American School, sharing a common passion for programming and benefitting the community with our hacks. Our two backend developers, Yesh and Sarthak, originally developed the idea while _________. Will and Alan were then approached for their frontend development skills, which were important for a consumer-friendly final product. Vitalic’s algorithms for the various statistics that we monitor were developed by Sarthak, while most of the Django backend was designed by Yesh. Will and Alan collaborated to create a Vue.js based frontend, which combined the best minds with the best Javascript platform. Will was primarily in charge of the UI/UX of the website, while Alan worked hard with Yesh to create a seamless flow of information between the Frontend and Backend.
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
