<template>
  <div class="fi-cover">
    <v-parallax
        height="750"
        :src=data.cover
    >
        <v-row
        align="center"
        justify="center"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            <h1 class="fi-title white--text">{{data.title}}</h1>
            <!-- <p>It serves as the main media of our Story, Creativity and Passion.</p> -->
        </v-col>
        </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.fi-cover{
    padding-top: 3%;
    .fi-title {
        font-family: 'Nexa-Bold';
        font-style: normal;
        text-shadow:0px 2px 30px #000000;
        @media only screen and (max-width: 960px) {
            font-size: 2rem;
            text-align: center;
        }
        @media only screen and (min-width: 960px) {
            font-size: 3rem;
            text-align: center;
        }
    }
}
</style>
