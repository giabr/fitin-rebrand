<template>
  <v-container fluid class="fi-hero black">
    <v-row>
      <v-col cols="12" md="6">
        <!-- <iframe class="intro-video" src="https://www.youtube.com/embed/rjf2_wWqfEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
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
  background: url('../assets/intro-bg.jpg');
  background-size: cover;
  background-position:center;
  position: relative;
  padding: 0 8%;
  @media only screen and (max-width: 960px) {
    height: 300px;
  }
  @media only screen and (min-width: 960px) {
    height: 700px;
  }
  .intro-title{
    position: absolute;
    @media only screen and (max-width: 960px) {
      margin: 0;
      right: 5%;
      padding-left: 2%;
      top: 45%;
      text-align: right;
    }
    @media only screen and (min-width: 960px) {
      margin: 0;
      right: 5%;
      padding-left: 2%;
      top: 45%;
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    @media only screen and (max-width: 960px) {
      margin-left: auto;
      line-height: 50px;
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 960px) {
      margin-left: auto;
      line-height: 70px;
      font-size: 2.5rem;
    }
  }
}
</style>
