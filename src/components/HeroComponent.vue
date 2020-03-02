<template>
  <v-container fluid class="fi-hero black">
    <v-row>
      <v-col cols="6">
        <iframe class="intro-video" src="https://www.youtube.com/embed/YOA0D0i5-fA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-col>
      <v-col cols="6">
        <div class="text-uppercase white--text intro-title">
          <h1 class="fi-title-small">little <span class="primary--text">act</span></h1>
          <h2 class="fi-title-big"><span class="primary--text">big </span>impact</h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroComponent',
};
</script>

<style lang="scss" scoped>
.fi-hero {
  height: 700px;
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url('../assets/intro.jpg');
  background-size: 100% auto;
  background-position: 50% 70%;
  position: relative;
  padding: 0 5%;
  .intro-video{
    margin: 0;
    width: 45%;
    height: 70%;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .intro-title{
    margin: 0;
    padding-left: 5%;
    position: absolute;
    top: 65%;
    -ms-transform: translateY(-65%);
    transform: translateY(-40%);
  }
  .fi-title-small {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 57px;
  }
  .fi-title-big {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 114px;
  }
}
</style>
