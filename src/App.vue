<script setup lang="ts">
import { utils } from "pixi.js";

let type = "WebGL";
if (!utils.isWebGLSupported()) {
  type = "canvas";
}

utils.sayHello(type);
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151419;
}
</style>
