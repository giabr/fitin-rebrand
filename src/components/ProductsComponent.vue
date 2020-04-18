<template>
  <v-container fluid class="fi-products">
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Our Product</h1>
    </div>
    <v-sheet
      class="mx-auto"
      max-width="100%"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
          v-for="product in products"
          :key="product"
        >
          <product :product="product" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import Product from './ProductComponents/Product.vue';

export default {
  name: 'ProductComponent',
  components: {
    Product,
  },
  data() {
    return {
      products: [
        { id: 1, title: 'Pouch Serut Upcycle' },
        { id: 2, title: 'Pouch Serut Upcycle' },
        { id: 3, title: 'Pouch Serut Upcycle' },
        { id: 4, title: 'Pouch Serut Upcycle' },
        { id: 5, title: 'Pouch Serut Upcycle' },
        { id: 6, title: 'Pouch Serut Upcycle' },
        { id: 7, title: 'Pouch Serut Upcycle' },
        { id: 8, title: 'Pouch Serut Upcycle' },
        { id: 9, title: 'Pouch Serut Upcycle' },
        { id: 10, title: 'Pouch Serut Upcycle' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-products{
   padding: 8%;
   padding-bottom: 0;
   .title-img{
     padding-bottom: 40px;
    .fi-title {
      height: 200px;
      background: url('../assets/product-img-title.png');
      background-repeat: no-repeat;
      background-position: 33%;
      font-family: 'Nexa-Bold';
      font-style: normal;
      text-align: center;
      line-height: 100px;
      text-align: center;
      padding-top: 120px;
      font-size: 2rem;
      @media only screen and (min-width: 600px) {
        font-size: 2.3rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 2.7rem;
      }
    }
   }
  }
</style>
