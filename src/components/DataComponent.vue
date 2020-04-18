<template>
  <v-container fluid class="fi-data">
    <v-row>
    <v-col cols="12" md="5" class="fi-graph">
      <img class="fi-img" src="../assets/data-img.png" alt="">
    </v-col>
    <v-col cols="12" md="7">
      <h1 class="fi-title text-uppercase tertiary--text">
        BORN FROM FASHION WASTE AND DISABILITIES MASTERPIECE</h1>
      <v-row>
      <v-col cols="6">
        <span class="fi-sub-title accent--text">
          <count-up
          :delay="1500"
          :endVal="13"
          :options="options1"
          />
        <span>%</span>
        </span>
        <span class="fi-metric accent--text text-uppercase"> /year</span>
        <p class="fi-text">
          Global Trade The value of Indonesia's apparel imports also shows a positive growth trend
          with growth that far exceeds the growth of apparel exports
          which is growing at 13% per year
        </p>
      </v-col>
      <v-col cols="6">
        <span class="fi-sub-title accent--text">
          <count-up
          :delay="1500"
          :endVal="17.6"
          :options="options2"
          />
        <span>%</span>
        </span>
        <span class="fi-metric accent--text text-uppercase"> /year</span>
        <p class="fi-text">
          Increased investment in the apparel sector grew with an average growth of 17.6% per year,
          with investment value increasing by 3.08% per year. Clothing industry increased by 3.4%
        </p>
      </v-col>
      <v-col cols="6">
        <span class="fi-sub-title accent--text">
          <count-up
          :delay="1500"
          :endVal="308.4"
          :options="options2"
          />
        </span>
        <span class="fi-metric accent--text text-uppercase"> thousand tons</span>
        <p class="fi-text">
          During the period 2009-2014 consumption of apparel in Indonesia grew by 6.89%
          per year, an increase from 209.3 thousand tons in 2009 to 308.4 thousand tons in 2014.
        </p>
      </v-col>
      <v-col cols="6">
        <span class="fi-sub-title accent--text">
          <count-up
          :delay="1500"
          :endVal="1864"
          :options="options1"
          />
        </span>
        <span class="fi-metric accent--text text-uppercase"> schools</span>
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
import CountUp from 'vue-countup-v2';

export default {
  name: 'DataComponent',
  data() {
    return {
      options1: {
        useEasing: true,
        useGrouping: true,
      },
      options2: {
        decimalPlaces: 1,
        useEasing: true,
        useGrouping: true,
      },
    };
  },
  components: {
    CountUp,
  },
};
</script>

<style lang="scss" scoped>
.fi-data {
  background: url('../assets/data-bg.jpg');
  background-size: 100% auto;
  background-position: 100% 101%;
  background-repeat: no-repeat;
  padding: 8%;
  padding-bottom: 15%;
  .fi-graph{
    padding-right: 5%;
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    line-height: 50px;
    font-size: 2rem;
    @media only screen and (min-width: 600px) {
      font-size: 2.3rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 2.7rem;
    }
  }
  .fi-sub-title{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-metric{
    font-family: Rubik;
    font-style: normal;
  }
  .fi-text{
    text-align: justify;
  }
  .fi-img{
    width: 100%;
    height: auto;
  }
}
</style>
