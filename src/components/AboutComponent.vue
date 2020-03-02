<template>
  <v-container class="fi-about">
    <v-row>
      <v-col cols="6" class="fi-desc">
        <h1 class="fi-title text-uppercase accent--text">What is Fitin?</h1>
        <p class="fi-text">
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
        <div class="fi-ig">
        <instagram-embed
          :url="'https://www.instagram.com/p/B9HHfEvF4gG/'"
          :max-width=450
          :hide-caption=true
        />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';

export default {
  name: 'AboutComponent',
  components: {
    InstagramEmbed,
  },
};
</script>

<style lang="scss" scoped>
.fi-about {
  padding: 5% 0;
  .fi-desc{
    padding-right: 5%;
  }
  .fi-ig{
    padding-left: 15%;
  }
  .fi-title {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
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
    width: 100%;
  }
}
</style>
