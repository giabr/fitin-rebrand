<template>
  <v-container fluid class="fi-about primary">
    <v-row>
      <v-col cols="6" class="fi-desc">
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
      <v-col cols="6">
        <div class="fi-img">
        <img src="../assets/about-img.png" alt="">
        </div>
      </v-col>
    </v-row>
    <img class="fi-img-attr" src="../assets/about-info.png" alt="" srcset="">
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
  .fi-desc{
    padding-right: 5%;
  }
  .fi-img{
    padding-left: 5%;
    position: relative;
    height: 600px;
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    font-size: 40px;
    line-height: 100px;
    text-align: right;
  }
  .fi-text {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: justify;
  }
  .fi-img{
    padding-top: 10%;
    width: 95%;
  }
  .fi-img-attr{
    padding-top: 3%;
    width: 100%;
  }
}
</style>
