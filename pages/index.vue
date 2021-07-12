<template>
  <div>
    <div class="logos">
      <a href="https://www.saftapologetics.com" target="_blank">
        <img src="~assets/logo.svg" alt="SAFT" id="saft-logo" />
      </a>
      <a href="">
        <img src="~assets/areopagus.png" alt="Areopagus" id="areopagus-logo" />
      </a>
    </div>
    <div class="main-hero">
      <img src="~assets/mountain.png" alt="Mountain" id="mountain" />
      <img
        src="~assets/areopagus-2021.png"
        alt="Areopagus 2021"
        id="areopagus-2021"
      />
      <a
        href="https://www.airmeet.com/e/032d8050-5f53-11eb-ba6d-c33b93201ed2"
        class="`
        px-6
        py-4
        mt-10
        font-bold
        tracking-wider
        text-white
        uppercase
        shadow-lg
        md:mt-16
        bg-gradient-to-tr
        from-blue-700
        to-blue-500
        rounded-xl
        transition-all
        duration-300
        ease-in-out
        transform
        hover:scale-110
        hover:shadow-xl
        hidden
        `"
        target="_blank"
        >Register here</a
      >
    </div>
    <div class="container pt-12 md:pt-20">
      <h1 class="title light-gradient-text">
        FAQ
      </h1>
      <section class="body">
        <div>
          <h3>What is The Areopagus Project?</h3>
          <p>
            The Areopagus Project is the brand new initiative of SAFT
            Apologetics. While SAFT Podcast is our podcast wing, 'The Areopagus
            Project' is our conference wing.
          </p>
        </div>

        <div>
          <h3>What was the name of this year's conference?</h3>
          <p>The name of this year's conference was Areopagus 2021.</p>
        </div>

        <div>
          <h3>Was this the first conference of SAFT?</h3>
          <p>Yes.</p>
        </div>

        <div>
          <h3>Why the name Areopagus?</h3>
          <p>
            Areopagus is the name of the hill upon which Paul delivered his
            speech recorded in Acts 17. The passage of Acts 17 displays
            evangelism and apologetics in sync as Paul invites those who seek
            God to be assured of His nearness. This is very much the heart of
            what we do: inviting all to seek answers.
          </p>
        </div>

        <div>
          <h3>
            Is The Areopagus Project related to 'The Areopagus' podcast, 'The
            Areopagus Project blog' or 'LCF Areopagus Project'?
          </h3>
          <p>
            Neither SAFT Apologetics nor The Areopagus Project is affiliated in
            any way with any of the above mentioned initiatives. While selecting
            the name our preliminary search via ministry associates and the
            internet didn't bring up these initiatives. It was well into the
            planning of the event that Jacob stumbled upon these similar named
            initiatives.
          </p>
        </div>

        <div>
          <h3>What was the theme of the conference?</h3>
          <p>
            Proclaiming The Known God.
          </p>
        </div>

        <div>
          <h3>When did the conference happen?</h3>
          <p>The conference took place in February.</p>
        </div>

        <div>
          <h3>Who were the speakers?</h3>
          <p>
            The speakers were Dr Frank Turek, Dr Fazale Rana, Tom Gilson and Dr
            William Lane Craig.
          </p>
        </div>

        <div>
          <h3>Were there any worship sessions?</h3>
          <p>
            On each day we had a brief time of worship led by Sheldon Bangera,
            Alobo Naga, Amit Kamble and Sujith M Sunil.
          </p>
        </div>

        <div>
          <h3>Was the conference virtual or offline?</h3>
          <p>The conference was completely online and was hosted on AirMeet.</p>
        </div>

        <div>
          <h3>I missed out on the conference. Can I watch the recordings?</h3>
          <p>
            You can! You can access our conference recordings
            <a
              href="https://help.airmeet.com/278/what-are-the-technical-instruction-for-an-attendee"
              target="_blank"
              class="underline"
              >here</a
            >.
          </p>
        </div>

        <div>
          <h3>Can we expect Areopagus 2022?</h3>
          <p>
            Yes! We are very much looking forward to the next year. As of now we
            don't have any plans to call off the conference but since our aim is
            to 'use' the conference to 'share the Gospel effectively' and not do
            a conference just for namesake, if we come upon another avenue we
            can focus our efforts on, we may have to consider it. After all, as
            our Creative Director Steven says, we are a 'microscopic team' so
            there's only so much we can do!
          </p>
        </div>

        <div>
          <h3>
            You are doing an amazing job! How can I partner with you/join your
            team?
          </h3>
          <p>
            Thank you! You can contact our Executive Director Ankit Nayak at
            <a
              href="mailto:ankit@saftapologetics.com?subject=I%20want%20to%20partner%20with%20SAFT%21"
              >ankit@saftapologetics.com</a
            >
            to take this conversation further. We look towards what God has in
            store for us with you!
          </p>
        </div>

        <div>
          <h3>Who can join the final day of the conference?</h3>
          <p>
            The final day is an exclusive-invitation-only event. Invitation is
            sent out from SAFT Apologetics to selected individuals and
            ministries.
          </p>
        </div>

        <div>
          <h3>How can I support the event?</h3>
          <p>
            You can support the event by keeping the team and the event in your
            prayers and sharing the poster and news about the conference to
            anyone who you think would benefit from hearing these top Christian
            speakers proclaim God.
          </p>
        </div>
      </section>
    </div>
    <footer class="py-10 text-center text-white">
      Copyright © 2020<br />
      All Rights Reserved by SAFT
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.body {
  @apply text-white;
  @apply text-left;
  min-height: 100vh;
  columns: 500px;

  div {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;

    h3 {
      @apply text-2xl;
      @apply font-semibold;
      @apply leading-7;
      @apply mb-2;
    }

    p {
      @apply pb-6;
    }
  }
}

.main-hero {
  @apply pt-40;
  @apply grid;
  @apply w-full;
  @apply justify-items-center;

  #mountain {
    @apply relative;
    left: 10px;
    width: Min(90%, 1000px);
  }

  #areopagus-2021 {
    width: Min(85%, 700px);
  }
}

.title {
  @apply text-left;
  @apply font-bold;
  @apply text-6xl;
  @apply mb-8;
}

.logos {
  @apply justify-center;
  @apply items-center;
  @apply flex;
  @apply fixed;
  @apply top-0;
  @apply w-screen;
  @apply py-4;
  @apply h-24;
  @apply z-50;
  background-color: rgba(0, 0, 0, 0.5);

  #saft-logo {
    @apply w-12;
  }

  #areopagus-logo {
    @apply ml-12;
    @apply w-32;
  }
}
</style>
