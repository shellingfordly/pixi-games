<script lang="ts" setup>
import { useParkour } from "./hooks/useParkour";

const { app, containerRef } = useParkour();
</script>

<template>
  <div class="container" ref="containerRef"></div>
</template>

<style scoped lang="less"></style>
