<template>
  <v-container fluid class="fi-hero black">
    <v-row>
      <v-col cols="12" md="6">
        <iframe class="intro-video" src="https://www.youtube.com/embed/a6m9c_84C0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-uppercase white--text intro-title">
          <div class="fi-title">
            <h1 class="tertiary--text">little <span class="right white--text">act,</span></h1>
            <h1 class="tertiary--text"><span class="right white--text">big </span>impact.</h1>
        </div>
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
  background: url('../assets/intro-bg.jpg');
  background-size: cover;
  background-position:center;
  position: relative;
  padding: 0 8%;
  .intro-video{
    border-radius: 25px;
    margin: 0 auto;
    margin-top: 80px;
    width: 100%;
    height: 100%;
    top: 50%;
    @media only screen and (min-width: 600px) {

    }
    @media only screen and (min-witdh: 1264px) {
      position: absolute;
      width: 40%;
      height: 55%;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  .intro-title{
    margin-top: 80px;
    padding-left: 2%;
    @media only screen and (min-width: 600px) {

    }
    @media only screen and (min-width: 1264px) {
      margin: 0;
      position: absolute;
      top: 35%;
      -ms-transform: translateY(-65%);
      transform: translateY(-40%);
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    line-height: 60px;
    font-size: 1.45rem;
    margin: 0 auto;
    @media only screen and (min-width: 600px) {
      line-height: 80px;
      font-size: 2.1rem;
    }
    @media only screen and (min-width: 1264px) {
      margin: 0;
      line-height: 100px;
      font-size: 2.7rem;
    }
  }
}
</style>
