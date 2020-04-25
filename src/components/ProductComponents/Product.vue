<template>
    <div class="fi-card">
      <v-card
        class="ma-4 fi-card-style"
        width="350"
        elevation="0"
      >
        <v-img
          class="white--text align-end"
          height="auto"
          width="100%"
          :src="require(`../../assets/products/${product.id}.jpg`)"
        >
          <!-- <v-card-title>{{product.title}}</v-card-title> -->
        </v-img>
        <v-card-subtitle class="fi-title tertiary--text">{{product.title}}</v-card-subtitle>
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
   .fi-card-style{
     border-radius: 0 !important;
     margin: 0 2%;
   }
   .fi-img{
     width: 350;
   }
   .fi-title{
      font-family: 'Nexa-Bold';
      font-style: normal;
      font-weight: bold;
      text-align: center;
      padding: 10%;
      font-size: 1rem;
      @media only screen and (min-width: 600px) {
        font-size: 1.3rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 1.5rem;
      }
   }
  }
</style>
