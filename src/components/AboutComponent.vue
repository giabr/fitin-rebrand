<template>
  <v-container fluid class="fi-about primary">
    <v-row>
      <v-col cols="12" lg="6" order="2" order-lg="1" class="fi-desc">
        <h1 class="fi-title text-uppercase tertiary--text">What is Fitin?</h1>
        <p class="fi-text white--text">
          Fitin is a startup engaged in developing products and services to process textile/garment
          waste into high-value products such as home/office equipment made of
          fabric, helping to empower friends with disabilities in increasing their creativity and
          innovation to be able to foster market and environmental competitiveness healthy products,
          and reduce the consumption of plastic products and the
          resulting waste. Fitin has a role in educating the public about sensitivity to
          environmental impacts caused by textile waste, providing training and improving skills
          to process it, and actively participating in ECO-friendly communities to campaign for
          the use and use of fabrics.
        </p>
      </v-col>
      <v-col cols="12" lg="6" order="1" order-lg="2">
        <div class="fi-img">
        <img src="../assets/about-img.png" alt="">
        </div>
      </v-col>
    </v-row>
    <v-row class="fi-value">
      <v-col cols="12" md="3" sm="6">
        <img class="fi-img-bottom" src="../assets/about-info-1.png" alt="">
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <img class="fi-img-bottom" src="../assets/about-info-2.png" alt="">
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <img class="fi-img-bottom" src="../assets/about-info-3.png" alt="">
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <img class="fi-img-bottom" src="../assets/about-info-4.png" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'AboutComponent',
};
</script>

<style lang="scss" scoped>
.fi-about {
  padding: 8%;
  // .fi-desc{
  //   // padding-right: 5%;
  // }
  .fi-value{
    padding-top: 10%;
  }
  .fi-img{
    padding-left: 5%;
    position: relative;
    height: 200px;
    @media only screen and (min-width: 600px) {
      height: 400px;
      padding-left: 5%;
      position: relative;
    }
    @media only screen and (min-width: 1024px) {
      height: 600px;
      padding-left: 5%;
      position: relative;
    }
    @media only screen and (min-width: 1264px) {
      height: 600px;
      padding-left: 5%;
      position: relative;
    }
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: 0 auto;
      width: 100%;
      @media only screen and (min-width: 600px) {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
      }
      @media only screen and (min-width: 1264px) {
        position: absolute;
        top: 20%;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
      }
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    line-height: 100px;
    text-align: center;
    font-size: 2rem;
    @media only screen and (min-width: 600px) {
      font-size: 2.3rem;
    }
    @media only screen and (min-width: 1264px) {
      text-align: right;
      font-size: 2.7rem;
    }
  }
  .fi-text {
    font-family: Rubik;
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: justify;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  .fi-img{
    padding-top: 10%;
    width: 95%;
  }
  .fi-img-bottom{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    max-height: 130px;
    @media only screen and (min-width: 300px) {
      max-height: 100px;
    }
    @media only screen and (min-width: 1024px) {
      max-height: 110px;
    }
  }
}
</style>
