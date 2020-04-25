<template>
    <v-card
    class="ma-4 fi-blog-card"
    width="400"
    elevation=1
  >
    <v-img
      class="white--text align-end fi-img"
      height="200px"
      :src="blog.img"
    >
      <!-- <v-card-title>{{blog.title}}</v-card-title> -->
    </v-img>

    <div class="fi-main">
        <v-card-subtitle class="pb-0">{{blog.tag}}</v-card-subtitle>

        <v-card-text class="text--primary">
        <div>
            <h1 class="fi-title">{{blog.title}}</h1>
        </div>

        <div><p class="fi-text">{{blog.caption}}</p></div>
        </v-card-text>
    </div>

    <v-card-actions>
      <v-btn
        color="primary"
        text
      >
        Share
      </v-btn>

      <v-btn
        :href=blog.url
        target="_blank"
        color="accent"
        text
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
};
</script>

<style lang="scss" scoped>
.fi-blog-card{
  .fi-main{
    height: 180px;
  }
  .fi-title {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: bold;
    font-size: 1.25em;
    padding-bottom: 10px;
  }
  .fi-text {
    font-style: normal;
    font-weight: normal;
    text-align: justify;
  }
}
</style>
