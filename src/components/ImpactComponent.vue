<template>
  <v-container class="fi-impact">
    <iframe class="fi-video" src="https://www.youtube.com/embed/YOA0D0i5-fA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="fi-title text-uppercase">
      <h1 class="fi-title-small primary--text">Your Little <span class="accent--text">Act</span>
      </h1>
      <h1 class="fi-title-big primary--text">Make a <span class="accent--text">Big</span> Impact
      </h1>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ImpactComponent',
};
</script>

<style lang="scss" scoped>
  .fi-impact{
  padding: 5% 0;
  height: 700px;
    .fi-video{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
    height: 70%;
    }
    .fi-title {
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     text-align: center;
     padding: 10% 0;
     .fi-title-small {
      font-size: 4em;
      }
     .fi-title-big {
      font-size: 6em;
      }
   }
  }
</style>
