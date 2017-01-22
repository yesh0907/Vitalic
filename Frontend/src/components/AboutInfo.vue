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
          We are a team of four from Singapore American School, sharing a common passion for programming and benefitting the community with our hacks. Our two backend developers, Yesh and Sarthak, originally developed the idea and then approached Alan and Will for their frontend development skills, which were important for a consumer-friendly final product. Vitalic’s algorithms for the numerous statistics and vital signs that we monitor were developed by Sarthak, while most of the Django backend was designed by Yesh. Will and Alan collaborated to create a Vue.js based frontend, which combined the best minds with the best Javascript platform. Will was primarily in charge of the UI/UX of the website and collaborated with Sarthak to implement the algorithms into the Frontend, while Alan worked hard with Yesh to create a seamless flow of information between the Frontend and Backend.
        </p>
        <h4>About Our Measurements</h4>
        <p>
          <b>Heart Rate</b> - the speed of the heartbeat, measured by the number of beats of the heart per minute (bpm). Heart Rate serves as the fundamental measurement for determining several other vital signs.
        </p>
        <p>
          <b>Blood Pressure</b> - the pressure of circulating blood on the walls of blood vessels, measured in millimeters of Mercury (mmHg). Blood pressure is important to maintain a healthy flow of oxygenated blood throughout the body.
        </p>
        <p>
          <b>Breathing Rate</b> - the rate at which an individual takes breaths, measured in breaths per minute. Breathing rate is important to identifying any respiratory issues.
        </p>
        <p>
          <b>Cholestrol Levels</b> - a type of lipid (fat) in the human blood. High cholestrol results in an increased chance of heart attack and stroke.
        </p>
        <p>
          <b>Stress Levels</b> - a feeling of emotional strain and pressure, typically caused by difficult or upsetting situations. Stress can have a major impact on blood pressure, overall happiness, and even lifespan.
        </p>
        <p>
          <b>Body Temperature/Fever</b> - when the body is at a temperature above its healthy range. While most fevers are mild and can be treated with over-the-counter medication, in some cases, fevers can cause brain failure and death.
        </p>
        <p>
          <b>Mood</b> - in simplest terms, a temporary state of emotion, typically classified by having a positive, neutral, or negative valence. Mood is directly influenced by events and stimulus.
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
