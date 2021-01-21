<template>
  <div class="background">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.background {
  background: url("../assets/6.png"), url("../assets/1971407.png"),
    radial-gradient(80.42% 132.66% at 94.34% 1.61%, #5579b6 0%, #0b357d 100%);
  background-blend-mode: normal, soft-light, normal;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.light-gradient-text {
  background: linear-gradient(180deg, #ffffff 0%, #afc9f5 100%);
  @apply bg-clip-text;
  @apply text-transparent;
}
</style>
