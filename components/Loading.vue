<script lang="ts" setup>
import rive from "@rive-app/canvas";

tryOnMounted(() => {
  const r = new rive.Rive({
    src: "~/assets/loading.riv",
    canvas: document.querySelector("canvas"),
    autoplay: true,
    artboard: "New Artboard",
  });
});
</script>

<template>
  <div id="loading">
    <canvas></canvas>
  </div>
</template>

<style lang="scss" scoped>
div#loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-content: center;
  z-index: 1002;
}
</style>
