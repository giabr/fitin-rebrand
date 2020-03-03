<template>
  <div class="fi-impact">
  <v-container>
    <iframe class="fi-video" src="https://www.youtube.com/embed/B-nEYsyRlYo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="fi-title text-uppercase">
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
};
</script>

<style lang="scss" scoped>
  .fi-impact{
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url('../assets/impact.jpg');
  background-size: cover;
  position: center;
  padding: 5% 0;
    .fi-video{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    height: 500px;
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
   }
  }
</style>
