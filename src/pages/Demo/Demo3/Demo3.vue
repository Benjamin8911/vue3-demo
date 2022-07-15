<template>
  <div class="demo3">
    <button class="btn">
      <div class="btn-borders">
        <div class="btn-borders__top"></div>
        <div class="btn-borders__right"></div>
        <div class="btn-borders__bottom"></div>
        <div class="btn-borders__left"></div>
      </div>
      <span>start</span>
    </button>
    <div class="next">
      <button class="btn1">hover</button>
    </div>
  </div>
</template>

<style lang="scss">
/* stylelint-disable */
.demo3 {
  padding: 50px;
}

.next {
  padding-left: 500px;
  margin: 20px 0;
}

.btn1 {
  position: relative;
  width: 100px;
  height: 50px;
  font-size: 24px;
  color: hsl(190deg, 100%, 41%);
  overflow: hidden;
  background: transparent;
  border: 1px solid hsl(190deg, 100%, 41%);
  cursor: pointer;
  outline: none;
  transition: 0.2s;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(130deg, transparent, hsla(190deg, 100%, 41%, 0.5), transparent);
    transform: translateX(-100%);
    transition: 0.4s; 
  }
  &:hover {
    box-shadow: 0 0 6px 1px hsla(190deg, 100%, 41%, 0.5);  
  }
  &:hover::before {
    transform: translateX(100%);
  }  
}
.btn {
  position: relative;
  width: 100px;
  height: 50px;
  font-size: 24px;
  color: hsl(200deg, 100%, 41%);
  text-decoration: none;
  background-color: transparent;
  border: 1px solid hsl(200deg, 50%, 41%, 0.3);
  outline: transparent;
  cursor: pointer;
  white-space: none;

  .btn-borders {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .btn-borders__top {
      position: absolute;
      top: 0;
      width: 100%;
      height: 1px;
      background: hsl(200deg, 100%, 41%);
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
    }

    .btn-borders__right {
      position: absolute;
      right: 0;
      width: 1px;
      height: 100%;
      background: hsl(200deg, 100%, 41%);
      transform: scaleY(0);
      transform-origin: bottom;
      transition: 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
    }

    .btn-borders__bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: hsl(200deg, 100%, 41%);
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.2s 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .btn-borders__left {
      position: absolute;
      left: 0;
      width: 1px;
      height: 100%;
      background: hsl(200deg, 100%, 41%);
      transform: scaleY(0);
      transform-origin: bottom;
      transition: 0.2s 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover {
      background: transparent;
      .btn-borders__top,.btn-borders__bottom {
        transform: scaleX(1);
      }

      .btn-borders__left,.btn-borders__right {
        transform: scaleY(1);  
      }

      .btn-borders__top {
        transition: 0.2s 0.2s;  
      }
        
      .btn-borders__right {
        transition: 0.2s 0.2s;
      }

      .btn-borders__bottom {
        transition: 0.2s;  
      }

      .btn-borders__left {
        transition: 0.2s;  
      }
      
    }
  }
}
</style>