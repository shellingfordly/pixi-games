<script lang="ts" setup>
import { useSnake } from "./hooks/useSnake";

const { containerRef } = useSnake();
</script>

<template>
  <div class="container" ref="containerRef"></div>
</template>

<style scoped lang="less"></style>
