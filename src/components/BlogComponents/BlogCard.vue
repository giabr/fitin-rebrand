<template>
  <div class="fi-blog-card">
  <v-card class="mx-auto fi-card-style">
    <v-img
      class="white--text fi-img align-end"
      height="200px"
      :src="require(`../../assets/blogs/${blog.id}.jpg`)"
    >
    </v-img>
    <v-card-title class="fi-title tertiary--text">{{blog.title}}</v-card-title>
    <v-card-text class="text--primary fi-text-container">
      <p class="fi-text">{{blog.caption}}</p>
    </v-card-text>
    <v-card-actions class="button-bottom">
      <v-btn
        color="primary"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="primary"
        text
      >
        Read More
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
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
  width: 100%;
  padding: 0 8%;
  .fi-card-style{
    width: 100%;
  }
  .fi-img{
    width: 400px;
  }
  .fi-title{
    font-family: 'Nexa-Bold';
    font-size: 1em;
    text-align: justify;
    line-height: 20px;
    @media only screen and (max-width: 600px) {
      font-size: 1em;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 1em;
    }
  }
  .fi-text-container{
    height: 130px;
  }
  .fi-text {
    font-style: normal;
    font-weight: normal;
    text-align: justify;
  }
}
</style>
