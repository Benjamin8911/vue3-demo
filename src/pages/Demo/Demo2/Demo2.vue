<template>
  <div class="demo2">
    <h1>Demo2</h1>
    <div class="loading">
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "sass:math";

.demo2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;

  h1 {
    color: #fff;
  }
}

@function random-range($min, $max) {
  $rand: math.random();
  $random-range: $min + math.floor($rand * (($max - $min) + 1));

  @return $random-range;
}

.snow {
  $total: 200;

  position: absolute;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: math.random(1000000) * 0.0001vw;
    $random-offset: random-range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + calc($random-offset / 2);
    $random-yoyo-time: calc(random-range(30000, 80000) / 100000);
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: math.random(10000) * 0.0001;
    $fall-duration: random-range(10, 30) * 1s;
    $fall-delay: math.random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: math.random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }
    /* stylelint-disable */
    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
</style>
