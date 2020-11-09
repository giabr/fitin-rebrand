<template>
    <div class="fi-card">
      <div class="fi-card-style">
        <img
          class="white--text fi-img"
          :src="require(`../../assets/products/${product.id}.jpg`)"
        >
        <p class="fi-title tertiary--text">{{product.title}}</p>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
  .fi-card{
   .fi-img{
     height: auto;
     display: block;
     margin-left: auto;
     margin-right: auto;
     @media only screen and (min-width: 300px) {
      width: 100%;
      padding: 0;
     }
     @media only screen and (min-width: 600px) {
      max-width: 220px;
      padding: 5%;
     }
     @media only screen and (min-width: 1264px) {
      max-width: 320px;
     }
   }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    @media only screen and (max-width: 960px) {
      padding-top: 5%;
      font-size: 1rem;
      text-align: center;
    }
    @media only screen and (min-width: 960px) {
      font-size: 1.7rem;
      text-align: center;
    }
  }
  }
</style>
