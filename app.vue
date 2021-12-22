<script setup lang="ts">
import { CSSProperties } from "nuxt3/dist/app/compat/capi";

const mainRef = ref(null);
const { tilt, roll } = useParallax(mainRef);

const parallax = (mag: number) =>
  computed(
    (): CSSProperties => ({
      transform: `translate(${tilt.value * -mag}px, ${roll.value * mag}px)`,
    })
  ).value;
</script>

<template>
  <head>
    <title>Areopagus 2022 - The Areopagus Project</title>
  </head>

  <main ref="mainRef">
    <article id="hero">
      <img
        src="assets/areopagus-typeform.svg"
        alt="Areopagus Project Typeform"
        id="areopagus-typeform"
        :style="parallax(45)"
      />
      <img
        src="assets/mountain.png"
        alt="Areopagus Mountain"
        id="mountain"
        :style="parallax(30)"
      />
      <img
        src="assets/areopagus-2022-typeform.png"
        alt="Areopagus 2022 Typeform"
        id="areopagus-2022-typeform"
        :style="parallax(45)"
      />
      <section id="logos" :style="parallax(55)">
        <a href="https://saftapologetics.com/" target="_blank">
          <img
            src="assets/saft-typeform.png"
            alt="SAFT Typeform"
            id="saft-typeform"
          />
        </a>
        <a href="https://womeninapologetics.com/" target="_blank">
          <img src="assets/wia.png" alt="WIA Logo" id="wia" />
        </a>
      </section>
    </article>

    <img src="assets/Top-Leaf.svg" id="top-leaf" />
    <img src="assets/Bottom-Leaf.svg" id="bottom-leaf" />
    <img src="assets/Top-Circle-Group.svg" id="top-circle" />
    <img src="assets/Bottom-Circle-Group.svg" id="bottom-circle" />
  </main>
</template>

<style lang="scss">
@import "node_modules/modern-normalize/modern-normalize.css";

.ease-out {
  transition: 0.3s ease-out all;
}

main {
  isolation: isolate;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #f1f5f9;

  #hero {
    display: grid;
    place-items: center;
    isolation: isolate;

    * {
      transition: 0.3s ease-out all;
    }

    #areopagus-typeform {
      width: 13vw;
      margin-bottom: 2vw;
    }

    #mountain {
      width: 50vw;
      margin-bottom: -4vw;
    }

    #areopagus-2022-typeform {
      width: 40vw;
      margin-bottom: 4vw;
      z-index: -1;
    }
    #logos {
      display: flex;
      flex: 0 1 auto;
      align-items: center;
      width: 30vw;

      & * {
        width: 100%;
        height: max-content;
      }

      #saft-typeform {
      }

      #wia {
        margin-left: 4vw;
      }
    }
  }

  #top-leaf,
  #bottom-leaf,
  #top-circle,
  #bottom-circle {
    position: absolute;
    z-index: -1;
  }

  #top-leaf {
    top: 0;
    right: 0;
    width: 20vw;
  }

  #bottom-leaf {
    bottom: 0;
    left: 0;
    width: 30vw;
  }

  #top-circle {
    top: 0;
    left: 0;
    width: 22vw;
  }

  #bottom-circle {
    bottom: 0;
    right: 0;
    width: 14vw;
  }
}
</style>
