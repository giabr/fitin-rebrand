<template>
  <div class="fi-blog-card">
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="3" lg="3">
        <router-link :to="{path: '/story/' + blog.path}">
        <v-img
          class="white--text fi-img align-end"
          :src="blog.thumbnail"
        >
        </v-img>
        </router-link>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="9" lg="9">
        <router-link :to="{path: '/story/' + blog.path}">
          <h1 class="fi-title tertiary--text">{{blog.title}}</h1>
        </router-link>
        <div class="text--primary fi-text-container">
          <!-- <p class="fi-text">{{blog.date}}</p> -->
          <p class="fi-text">{{blog.caption}}</p>
          <router-link :to="{path: '/story/' + blog.path}"><p class="fi-link">Read more</p></router-link>
        </div>
      </v-col>
    </v-row>
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
  padding-bottom: 5%;
  a{
    text-decoration: none;
  }
  .fi-link{
    text-align: right;
    font-family: 'Nexa';
  }
  .fi-img{
    width: 100%;
    @media only screen and (max-width: 960px) {
      height: 230px;
    }
    @media only screen and (min-width: 960px) {
      height: 150px;
      border-radius: 15px;
    }

  }
  .fi-title{
    font-family: 'Nexa';
    text-align: justify;
    line-height: 30px;
    @media only screen and (max-width: 960px) {
      font-size: 1.2em;
      padding: 5%;
      text-align: center;
    }
    @media only screen and (min-width: 960px) {
      font-size: 1.5em;
      padding-left: 5%;
    }
  }
  .fi-text-container{
    // height: 130px;
    @media only screen and (max-width: 960px) {
      padding: 0 5%;
      padding-bottom: 20%;
      width: 100%;
    }
    @media only screen and (min-width: 960px) {
      padding-top: 2%;
      padding-right: 30%;
      padding-left: 5% ;
    }
  }
  .fi-text {
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    color: grey;
  }
}
</style>
