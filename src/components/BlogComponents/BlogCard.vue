<template>
  <div class="fi-blog-card">
  <v-card class="fi-card-style"
    elevation="0"
  >
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="3" lg="3">
        <v-img
          class="white--text fi-img align-end"
          :src="require(`../../assets/blogs/${blog.id}.jpg`)"
        >
        </v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="9" lg="9">
        <v-card-title class="fi-title tertiary--text">{{blog.title}}</v-card-title>
        <v-card-text class="text--primary fi-text-container">
          <p class="fi-text">{{blog.date}}</p>
          <p class="fi-text">{{blog.caption}}</p>
        </v-card-text>
      </v-col>
    </v-row>
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
  .fi-card-style{
    width: 100%;
  }
  .fi-img{
    @media only screen and (max-width: 960px) {
      width: 100%;
      height: 230px;
    }
    @media only screen and (min-width: 960px) {
      width: 300px;
      height: 170px;
    }

  }
  .fi-title{
    font-family: 'Nexa';
    text-align: justify;
    line-height: 30px;
    @media only screen and (max-width: 960px) {
      font-size: 1.2em;
      padding-top: 0;
      padding-bottom: 0;
    }
    @media only screen and (min-width: 960px) {
      font-size: 1.5em;
    }
  }
  .fi-text-container{
    // height: 130px;
    padding-right: 5%;
  }
  .fi-text {
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    color: grey;
  }
}
</style>
