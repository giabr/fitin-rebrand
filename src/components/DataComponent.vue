<template>
  <v-container class="fi-data">
    <v-row>
    <v-col cols="6" class="fi-graph">
      <img class="fi-img" src="../assets/data-pie.jpg" alt="">
        <p class="fi-text">
          Waste Textile makes you need to add new space and environmental pollution.
        </p>
    </v-col>
    <v-col cols="6">
      <h1 class="fi-title text-uppercase accent--text">Do You Know?</h1>
      <v-row>
      <v-col cols="6">
        <h1 class="fi-sub-title accent--text">6.89%</h1>
        <p class="fi-text">
          During the period 2009-2014 consumption of apparel in Indonesia grew by 6.89%
          per year, an increase from 209.3 thousand tons in 2009 to 308.4 thousand tons in 2014.
        </p>
        <h1 class="fi-sub-title accent--text">17.6%</h1>
        <p class="fi-text">
          Increased investment in the apparel sector grew with an average growth of 17.6% per year,
          with investment value increasing by 3.08% per year. Clothing industry increased by 3.4%
        </p>
      </v-col>
      <v-col cols="6">
        <h1 class="fi-sub-title accent--text">13%</h1>
        <p class="fi-text">
          Global Trade The value of Indonesia's apparel imports also shows a positive growth trend
          with growth that far exceeds the growth of apparel exports
          which is growing at 13% per year
        </p>
        <h1 class="fi-sub-title accent--text">1,861</h1>
        <p class="fi-text">
          In Indonesia, there were 1,861 extraordinary schools a year. DIY region has 76 or around
          4.1% consisting of 8 Public SLBs and 68 Private SLBs spread in Sleman Regency (1/28),
          Kulon Progo (1/7), Bantul (1/18), and Yogyakarta City (3/6 ), Gunung Kidul (2/9).
        </p>
      </v-col>
      </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DataComponent',
};
</script>

<style lang="scss" scoped>
.fi-data {
  padding: 5% 0;
  .fi-graph{
    padding-right: 5%;
  }
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-sub-title{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5em;
  }
  .fi-text{
    padding-bottom: 40px;
    padding-right: 30px;
    text-align: justify;
  }
  .fi-img{
    width: 100%;
    height: auto;
    padding-top: 20%;
  }
}
</style>
