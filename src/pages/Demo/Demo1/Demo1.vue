<template>
  <div>
    <h1>Demo1</h1>
    <div class="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.loading {
  display: flex;
  $color: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  .dot {
    position: relative;
    width: 20px;
    height: 20px;
    margin: 18px;
    border-radius: 50%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($color, $i);

        &::before{
          animation-delay: $i * 0.2s; 
        }
      }
    }
  }
}
  @keyframes wave {
    50%,75% {
      transform: scale(2.5);
    }
    80%,100% {
      opacity: 0;
    }
  }
</style>
