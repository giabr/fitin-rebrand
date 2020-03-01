<template>
  <v-container class="fi-about">
    <v-row>
      <v-col cols="6" class="fi-desc">
        <h1 class="fi-title text-uppercase accent--text">What is Fitin?</h1>
        <p class="fi-text">
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
        </p>
      </v-col>
      <v-col cols="6">
        <div class="fi-ig">
        <instagram-embed
          :url="'https://www.instagram.com/p/B9EeF6KFgHc/'"
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
