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
     padding: 5%;
     display: block;
     margin-left: auto;
     margin-right: auto;
     @media only screen and (min-width: 300px) {
      max-width: 260px;
     }
     @media only screen and (min-width: 600px) {
      max-width: 220px;
     }
     @media only screen and (min-width: 1264px) {
      max-width: 320px;
     }
   }
   .fi-title{
      font-family: 'Nexa-Bold';
      font-style: normal;
      font-weight: bold;
      text-align: center;
      font-size: 1rem;
      @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
      }
      @media only screen and (min-width: 1000px) {
        font-size: 1.5rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 1.5rem;
      }
   }
  }
</style>
