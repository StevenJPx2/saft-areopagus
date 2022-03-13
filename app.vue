<script setup lang="ts">
import { CSSProperties } from "nuxt3/dist/app/compat/capi";

const mainRef = ref(null);
const useDebug = ref(false);
const { tilt, roll, source } = useParallax(mainRef);
const isDeviceOrientation = ref(false);
const initTilt = ref(0);
const initRoll = ref(0);

tryOnMounted(() => {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof (DeviceMotionEvent as any).requestPermission === "function"
  ) {
    isDeviceOrientation.value = true;
    useDeviceOrientation();
  }
});

const useDeviceOrientation = () => {
  (DeviceMotionEvent as any)
    .requestPermission()
    .then((response: "granted" | "denied") => {
      if (response == "granted") isDeviceOrientation.value = false;
      else alert(response);
    })
    .catch(console.error);
};
const parallax = (mag: number) =>
  computed(
    (): CSSProperties => ({
      transform: `translate(${
        (tilt.value - initTilt.value) *
        mag *
        (source.value == "deviceOrientation" ? 2 : 1.5)
      }px, ${
        (roll.value - initRoll.value) *
        -mag *
        (source.value == "deviceOrientation" ? 2 : 1.5)
      }px)`,
    })
  ).value;

watchAtMost(
  tilt,
  (tiltVal) => {
    if (source.value == "deviceOrientation") initTilt.value = tiltVal;
  },
  {
    count: 3,
  }
);

watchAtMost(
  roll,
  (rollVal) => {
    if (source.value == "deviceOrientation") initRoll.value = rollVal;
  },
  {
    count: 3,
  }
);
</script>

<template>
  <Html>
    <Head>
      <Title>Areopagus 2022 - The Areopagus Project</Title>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />

      <Meta name="msapplication-TileColor" content="#2b5797" />
      <Meta name="theme-color" content="#ffffff" />
      <Meta name="title" content="Areopagus 2022" />
      <Meta
        name="description"
        content="At Areopagus 2022 we present the unique nature of the God of the Bible. There is none like Him. This is the place to come and seek why He is unique."
      />
      <Meta
        name="keywords"
        content="Apologetics, Christianity, God, Theism, Theology, Philosophy, India, Conference, Women In Apologetics, Rational, Logical, Faith, Evidence, Belief, Holy Spirit"
      />
      <Meta name="robots" content="index, follow" />
      <Meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <Meta name="language" content="English" />
      <Meta property="og:title" content="Areopagus 2022" />
      <Meta property="og:site_name" content="The Areopagus Project" />
      <Meta property="og:url" content="https://areopagus.saftapologetics.com" />
      <Meta
        property="og:description"
        content="At Areopagus 2022 we present the unique nature of the God of the Bible. There is none like Him. This is the place to come and seek why He is unique."
      />
      <Meta property="og:type" content="website" />
      <Meta
        property="og:image"
        content="https://instagram.ffjr1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/266810431_1087823095325347_4811957464547212242_n.jpg?_nc_ht=instagram.ffjr1-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-6Xb4btrdDwAX8TYjRJ&tn=aNuSA_PwhQjMLTS-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_d3I3F43LGaZxAec9y4zucsptVXzIlzRzkq5GBITmXQg&oe=61CFA500&_nc_sid=7bff83"
      />
    </Head>
  </Html>

  <main ref="mainRef">
    <div v-if="isDeviceOrientation" id="permission">
      <button @click="useDeviceOrientation()">Use Device Orientation</button>
    </div>
    <article id="hero">
      <img
        src="~/assets/areopagus-typeform.svg"
        alt="Areopagus Project Typeform"
        id="areopagus-typeform"
        :style="parallax(55)"
      />
      <img
        src="~/assets/mountain-speakers.webp"
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
      <section id="links">
        <div id="logos" :style="parallax(55)">
          <a href="https://saftapologetics.com/" target="_blank">
            <img
              src="~/assets/saft-typeform.svg"
              alt="SAFT Typeform"
              id="saft-typeform"
            />
          </a>
          <a href="https://womeninapologetics.com/" target="_blank">
            <img src="~/assets/wia.webp" alt="WIA Logo" id="wia" />
          </a>
        </div>
        <a
          id="oval-button"
          href="https://www.airmeet.com/e/e7d27860-9e08-11ec-a386-bdb5ea041039"
        >
          <span>Register for the conference here!</span>
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

.hidden {
  display: none !important;
}

.debug {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-content: center;
  z-index: 1000;
  font-size: 30px;
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
    margin-top: 0vw;

    * {
      will-change: transform;
    }

    #areopagus-typeform {
      width: 37vw;
      margin-bottom: 2vw;
    }

    #mountain {
      width: 90vw;
      margin-bottom: -8vw;
    }

    #areopagus-2022-typeform {
      width: 81vw;
      margin-bottom: 5vw;
      z-index: -1;
    }

    #links {
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

      #oval-button {
        display: block;
        cursor: pointer;
        text-decoration: none;
        color: #07003d;
        font-size: 4vw;
        padding: 9vw;
        border-radius: 50%;
        border: 1px solid #07003d;
        transform: rotate(-12deg);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        margin: 20vw auto 0 auto;
        width: 70vw;

        span {
          text-align: center;
          max-width: 50vw;
          display: inline-block;
          transform: rotate(12deg);
        }

        &:hover {
          transform: scale(1.1) rotate(-12deg);
        }
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

@media screen and (min-width: 640px) {
  main {
    #hero {
      margin: 0 0 2vw 0;

      * {
        transition: 0.3s ease-out transform;
      }

      #areopagus-typeform {
        width: 13vw;
        margin-bottom: 2vw;
      }

      #mountain {
        width: 40vw;
        margin-bottom: -4vw;
      }

      #areopagus-2022-typeform {
        width: 38vw;
        margin-bottom: 2vw;
      }

      #links {
        display: flex;

        #logos {
          display: block;
          width: 28vw;
          margin-left: 0vw;

          & * {
            margin-bottom: -2vw;
          }

          #saft-typeform {
            width: 15vw;
          }

          #wia {
            width: 17vw;
            height: auto;
            margin-left: -1.1vw;
          }
        }

        #oval-button {
          margin-top: 0vw;
          margin-left: -6vw;
          font-size: 1vw;
          padding: 3vw 3.3vw;
          width: auto;

          span {
            transform: rotate(12deg) translateY(-0.2vw);
            max-width: 11vw;
          }
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
