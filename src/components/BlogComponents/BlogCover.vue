<template>
  <div class="fi-cover">
    <v-parallax
        height="750"
        :src=story.img
    >
        <v-row
        align="center"
        justify="center"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            <h1 class="fi-title white--text">{{story.title}}</h1>
            <p>It serves as the main media of our Story, Creativity and Passion.</p>
        </v-col>
        </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: {
    story: Object,
  },
};
</script>

<style lang="scss" scoped>
.fi-cover{
    padding-top: 2%;
    .fi-title {
        font-family: 'Nexa';
        font-style: normal;
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
