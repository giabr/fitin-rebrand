<template>
  <div class="fi-impact">
  <v-container class="fi-title">
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(video, i) in videos"
      :key="i"
      v-html="video.content"
    >
    </v-carousel-item>
  </v-carousel>
    <div class="fi-banner text-uppercase">
      <h1 class="fi-title-small white--text">Your Little <span class="primary--text">Act</span>
      </h1>
      <h1 class="fi-title-big white--text">Make a <span class="primary--text">Big</span> Impact
      </h1>
    </div>
  </v-container>
  </div>
</template>

<script>

export default {
  name: 'ImpactComponent',
  data() {
    return {
      videos: [
        { id: 1, content: '<iframe width=80% height=500 src="https://www.youtube.com/embed/CD6R9ufjr18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 2, content: '<iframe width=80% height=500 src="https://www.youtube.com/embed/yLw8IojFaUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 3, content: '<iframe width=80% height=500 src="https://www.youtube.com/embed/ql6N82eLDhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-impact{
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url('../assets/impact.jpg');
  background-size: cover;
  position: center;
  padding: 5% 0;
    .fi-banner {
      padding-top: 80px;
    }
    .fi-title {
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     text-align: center;
     padding-top: 5%;
     .fi-title-small {
      font-size: 4em;
      }
     .fi-title-big {
      font-size: 6em;
      }
     .fi-main {
       font-size: 3em;
     }
   }
  }
</style>
