<template>
  <v-container fluid class="fi-about primary">
      <div class="fi-desc">
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
        <img class="fi-img" src="../assets/about-img.png" alt="">
      </div>
    <v-row class="fi-value text-uppercase">
      <v-col cols="6">
        <h2 class="fi-value-title">Sustainable</h2>
      </v-col>
      <v-col cols="6">
        <h2 class="fi-value-title">Zero Waste</h2>
      </v-col>
      <v-col cols="6">
        <h2 class="fi-value-title">Empowering Disabilities</h2>
      </v-col>
      <v-col cols="6">
        <h2 class="fi-value-title">Cultural Heritage</h2>
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
  .fi-value{
    text-align: center;
    font-family: 'Nexa-Bold';
    @media only screen and (max-width: 960px) {
      padding-top: 8%;;
    }
    @media only screen and (min-width: 960px) {
      padding-top: 5%;
      padding-right: 15%;
      padding-left: 15%;
    }
    .fi-value-title{
      @media only screen and (max-width: 960px) {
        font-size: 12px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 24px;
      }
    }
  }
  .fi-img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 960px) {
      margin-top: 15%;
      width: 70%;
    }
    @media only screen and (min-width: 960px) {
      margin-top: 5%;
      height: 300px;
      width: auto;
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    text-align: center;
    @media only screen and (max-width: 960px) {
      font-size: 1.5rem;
      padding-top: 8%;
    }
    @media only screen and (min-width: 960px) {
      font-size: 2.7rem;
      line-height: 100px;
    }
  }
  .fi-text {
    font-family: Rubik;
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    @media only screen and (max-width: 960px) {
      padding: 0;
      line-height: 25px;
      font-size: 12px;
    }
    @media only screen and (min-width: 960px) {
      padding: 0 15%;
      line-height: 30px;
      font-size: 16px;
    }
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
