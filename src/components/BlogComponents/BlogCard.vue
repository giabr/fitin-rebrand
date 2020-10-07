<template>
  <div class="fi-blog-card">
  <v-card class="fi-card-style"
    elevation="0"
  >
    <v-row>
      <v-col cols="3">
        <v-img
          class="white--text fi-img align-end"
          height="170px"
          :src="require(`../../assets/blogs/${blog.id}.jpg`)"
        >
        </v-img>
      </v-col>
      <v-col cols="5">
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
    width: 300px;
  }
  .fi-title{
    font-family: 'Nexa';
    text-align: justify;
    line-height: 20px;
    @media only screen and (min-width: 300px) {
      font-size: 1.2em;
    }
    @media only screen and (min-width: 600px) {
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
