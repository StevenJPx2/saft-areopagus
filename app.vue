<script setup lang="ts">
import { CSSProperties } from "nuxt3/dist/app/compat/capi";

const mainRef = ref(null);
const isDeviceOrientation = ref(false);
const breakpoints = useBreakpoints({ tablet: 640 });

const isMobile = breakpoints.smaller("tablet");

tryOnMounted(() => {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  )
    isDeviceOrientation.value = true;
    useDeviceOrientation();
});

const useDeviceOrientation = () => {
  DeviceMotionEvent.requestPermission()
    .then((response: "granted" | "denied") => {
      if (response == "granted") isDeviceOrientation.value = false;
      else alert(response);
    })
    .catch(console.error);
};
const { tilt, roll } = useParallax(mainRef);
const parallax = (mag: number) =>
  computed(
    (): CSSProperties => ({
      transform: `translate(${tilt.value * mag * (isMobile.value ? 1 : 3)}px, ${
        roll.value * -mag * (isMobile.value ? 1 : 3)
      }px)`,
    })
  ).value;
</script>

<template>
  <head>
    <title>Areopagus 2022 - The Areopagus Project</title>
  </head>

  <main ref="mainRef">
    <div v-show="isDeviceOrientation" id="permission">
      <button @click="useDeviceOrientation()">use Device orientation</button>
    </div>
    <article id="hero">
      <img
        src="~/assets/areopagus-typeform.svg"
        alt="Areopagus Project Typeform"
        id="areopagus-typeform"
        :style="parallax(55)"
      />
      <img
        src="~/assets/mountain.webp"
        alt="Areopagus Mountain"
        id="mountain"
        :style="parallax(45)"
      />
      <img
        src="~/assets/areopagus-2022-typeform.webp"
        alt="Areopagus 2022 Typeform"
        id="areopagus-2022-typeform"
        :style="parallax(30)"
      />
      <section id="logos" :style="parallax(55)">
        <a href="https://saftapologetics.com/" target="_blank">
          <img
            src="~/assets/saft-typeform.webp"
            alt="SAFT Typeform"
            id="saft-typeform"
          />
        </a>
        <a href="https://womeninapologetics.com/" target="_blank">
          <img src="~/assets/wia.webp" alt="WIA Logo" id="wia" />
        </a>
      </section>
    </article>

    <img src="~/assets/Top-Leaf.svg" id="top-leaf" />
    <img src="~/assets/Bottom-Leaf.svg" id="bottom-leaf" />
    <img src="~/assets/Top-Circle-Group.svg" id="top-circle" />
    <img src="~/assets/Bottom-Circle-Group.svg" id="bottom-circle" />
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
  position: absolute;
  place-items: center;
  background-color: #f1f5f9;
  overflow: hidden;
  touch-action: none;
  user-select: none;

  * {
    touch-action: none;
    user-select: none;
  }

   #permission {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-content: center;
  }

  #hero {
    display: grid;
    place-items: center;
    isolation: isolate;

    * {
      will-change: transform;
    }

    #areopagus-typeform {
      width: 37vw;
      margin-bottom: 2vw;
    }

    #mountain {
      width: 90vw;
      margin-bottom: -9vw;
    }

    #areopagus-2022-typeform {
      width: 81vw;
      margin-bottom: 11vw;
      z-index: -1;
    }

    #logos {
      display: flex;
      flex: 0 1 auto;
      align-items: center;
      width: 77vw;

      & * {
        width: 100%;
        height: 100%;
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
    overflow: hidden;
    z-index: -1;
  }

  #top-leaf {
    top: 0;
    right: -9vw;
    width: 65vw;
  }

  #bottom-leaf {
    bottom: 0;
    left: 0;
    width: 69vw;
  }

  #top-circle {
    top: 0;
    left: -14vw;
    width: 60vw;
  }

  #bottom-circle {
    bottom: 0;
    right: 0;
    width: 38vw;
  }
}

@media screen and (min-width: 1024px) {
  main {
    #hero {
      * {
        transition: 0.3s ease-out transform;
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
      }

      #logos {
        width: 30vw;

        & * {
          width: 100%;
          height: 100%;
        }

        #saft-typeform {
        }

        #wia {
          margin-left: 4vw;
        }
      }
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
}
</style>
