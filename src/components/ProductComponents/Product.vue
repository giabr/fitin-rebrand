<template>
    <div class="fi-card">
      <v-card
        class="ma-4 fi-card-style"
        width="350"
        elevation="0"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          width="100%"
          :src="product.url"
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
    font-size: 1.5em;
    text-align: center;
    padding: 10%;
   }
  }
</style>
