<template>
<v-container class="fi-impact">
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
      <h1 class="fi-title tertiary--text">This is how we <span class="primary--text">change
        </span>
      </h1>
      <h1 class="fi-title tertiary--text">Join us <span class="primary--text">now
        </span> together
      </h1>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'ImpactComponent',
  data() {
    return {
      videos: [
        { id: 1, content: '<iframe width=100% height=500 src="https://www.youtube.com/embed/CD6R9ufjr18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 2, content: '<iframe width=100% height=500 src="https://www.youtube.com/embed/yLw8IojFaUg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
        { id: 3, content: '<iframe width=100% height=500 src="https://www.youtube.com/embed/ql6N82eLDhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-impact{
  background: white;
  padding: 8%;
  padding-top: 0;
    .fi-title {
     font-family: 'Nexa-Bold';
     font-style: normal;
     font-weight: bold;
     text-align: center;
     font-size: 60px;
   }
   .fi-banner{
     padding-top: 80px;
   }
  }
</style>
