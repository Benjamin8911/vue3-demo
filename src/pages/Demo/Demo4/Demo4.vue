<template>
  <div class="demo4">
    <video class="video" autoplay muted loop preload="true" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
      <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
      <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
    </video>
    <h1 class="text">ocean</h1>
  </div>
</template>
<style>
.demo4 {
  position: relative;
  width: 100%;
  height: 100%;
}
.video, .text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video {
  object-fit: cover;
}

.text {
  line-height: 80vh;
  font-size: 20vw;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  background: #fff;
  mix-blend-mode: screen;
}
</style>