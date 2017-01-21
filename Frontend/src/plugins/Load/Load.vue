<template>

<div class="container">
  <div class="panels">
    <div class="panel" id="up"></div>
    <div class="panel" id="down"></div>
</div>
</div>

</template>

<script>
</script>

<style scoped>

.container {
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  overflow: hidden;
}

.panel {
/*   background-color: #e67e22; */
  animation-duration: 0.6s;
  animation-timing-function: linear;
  animation-fill-mode:forwards;
  border-style: none;
  display: block;
  position: absolute;
  width: 100%;
  height: 50%;
  will-change: transform;
  
}

.panels {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}

#up {
  transform: translate(0px,-101%);
  background-color: #ecf0f1;
}

#down {
  transform: translate(0px,201%);
  background-color: #e74c3c;
}





@keyframes openUp {
  from {
    transform: translate(0px,0px);
  }
  to {
     transform: translate(0px,-101%);
  }
}

@keyframes openDown {
  from {
    transform: translate(0px,100%);
  }
  to {
    transform: translate(0px,201%);
  }
}

@keyframes closeUp {
  from {
    transform: translate(0px,-101%);
  }
  to {
    transform: translate(0px,0%);
  }
}

@keyframes closeDown {
  from {
    transform: translate(0px,201%);
  }
  to {
    transform: translate(0px,100%);
  }
}

.openUp {
  animation-name: openUp;
  
}

.openDown {
  animation-name: openDown;
}

.closeUp {
  animation-name: closeUp;
}

.closeDown {
  animation-name: closeDown;
}


</style>
