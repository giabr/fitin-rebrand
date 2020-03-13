<template>
    <div class="fi-card">
      <v-card
        class="ma-4"
        max-width="350"
      >
        <v-img
          class="white--text align-end"
          height="350px"
          width="100%"
          :src="product.url"
        >
          <!-- <v-card-title>{{product.title}}</v-card-title> -->
        </v-img>
        <v-card-subtitle class="fi-title accent--text">{{product.title}}</v-card-subtitle>
      </v-card>
    </div>
</template>

<script>

export default {
  components: {

  },
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
  .fi-card{
   .fi-img{
     width: 350;
   }
   .fi-title{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
    padding: 10%;
   }
  }
</style>
