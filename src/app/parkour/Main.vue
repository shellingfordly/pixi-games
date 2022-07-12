<script lang="ts" setup>
import { useParkour } from "./hooks/useParkour";

const { containerRef, score, hp, gameStart, start } = useParkour();
</script>

<template>
  <div class="container" ref="containerRef">
    <div class="score">{{ score }}</div>
    <div class="box">
      <div class="hp" :style="{ width: hp + '%' }"></div>
    </div>
    <img
      v-if="!start"
      class="start"
      @click="gameStart"
      src="@/assets/parkour/start.png"
    />
  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;
  .score {
    position: absolute;
    padding: 6px;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
  }
  .box {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    width: 100px;
    height: 20px;
    border: 3px solid #fff;
    color: #fff;

    .hp {
      background-color: coral;
      width: 100%;
      height: 100%;
    }
  }

  .start {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    margin-left: -50px;
    margin-top: -25px;
    cursor: pointer;
  }
}
</style>
