<template>
  <div>
    <div class="logos">
      <a href="https://www.saftapologetics.com" target="_blank">
        <img src="~assets/logo.svg" alt="SAFT" id="saft-logo" />
      </a>
      <a href="">
        <img src="~assets/areopagus.svg" alt="Areopagus" id="areopagus-logo" />
      </a>
    </div>
    <div class="container">
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
          <h3>What is the name of this year's conference?</h3>
          <p>The name of this year's conference is Areopagus 2021.</p>
        </div>

        <div>
          <h3>Is this the first conference of SAFT?</h3>
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
            Is The Areopagus Project related to 'The Areopagus' podcast?
          </h3>
          <p>
            'The Areopagus' is one of many podcasts run by Ancient Faith
            Ministries. Neither SAFT Apologetics nor The Areopagus Project is
            affiliated in any way with 'The Areopagus' podcast. While selecting
            the name our preliminary search via ministry associates and the
            internet didn't bring up the podcast. It was well into the planning
            of the event that Jacob stumbled upon this podcast.
          </p>
        </div>

        <div>
          <h3>
            What is the theme of the conference?
          </h3>
          <p>
            Proclaiming The Known God.
          </p>
        </div>

        <div>
          <h3>When is the conference happening?</h3>
          <p>
            The conference takes places from February 11th to 13th and concludes
            on 18th.
          </p>
        </div>

        <div>
          <h3>Are all days open to the public?</h3>
          <p>
            The conference is open to the public for the first 3 days (February
            11th to 13th) and the final day is an exclusive event.
          </p>
        </div>

        <div>
          <h3>What is the timing?</h3>
          <p>The first three days take place from 7pm to 9pm Indian time.</p>
        </div>

        <div>
          <h3>Who are the speakers?</h3>
          <p>
            The speakers are Dr Frank Turek, Dr Fazale Rana, Tom Gilson and Dr
            William Lane Craig
          </p>
        </div>

        <div>
          <h3>Are there any worship sessions?</h3>
          <p>
            On each day we have a brief time of worship led by Sheldon Bangera,
            Alobo Naga, Amit Kamble and Narrow Gate United.
          </p>
        </div>

        <div>
          <h3>Is there registration for the first 3 days?</h3>
          <p>
            No. The first 3 days are open to all and can be attended without any
            registration.
          </p>
        </div>

        <div>
          <h3>Where can I attend the conference?</h3>
          <p>
            The first 3 days will be live streamed on our YouTube channel 'SAFT
            Apologetics'.
          </p>
        </div>

        <div>
          <h3>Why should I attend live? Can't I watch the recording later?</h3>
          <p>
            The speakers are joining in live and hence will be fielding live Q&A
            from the audience for 60mins. Joining in live is the best way to
            experience the conference and make use of the Q&A opportunity.
          </p>
        </div>

        <div>
          <h3>How can I take part in the Q&A?</h3>
          <p>
            The Q&A is hosted on Mentimeter. At the start of each day and
            throughout the conference the host will inform and remind the
            details required to partake in the Q&A.
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

.title {
  @apply text-left;
  @apply font-bold;
  @apply text-6xl;
  @apply pt-24;
  @apply mb-10;
}

.logos {
  @apply justify-center;
  @apply items-center;
  @apply flex;
  @apply fixed;
  @apply top-0;
  @apply w-screen;
  @apply my-4;
  @apply h-24;

  #saft-logo {
    @apply w-12;
  }

  #areopagus-logo {
    @apply ml-12;
    @apply w-32;
  }
}
</style>
