<template>
  <v-container fluid class="fi-products">
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Our Product</h1>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(product, index) in products" :key="index">
          <product :product="product" />
        </div>
      </VueSlickCarousel>
    </div>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Product from './ProductComponents/Product.vue';

export default {
  name: 'ProductComponent',
  components: {
    VueSlickCarousel,
    Product,
  },
  data() {
    return {
      products: [
        { id: 1, title: 'Simpo Bag' },
        { id: 2, title: 'Simpo Bag' },
        { id: 3, title: 'Simpo Bag' },
        { id: 4, title: 'Simpo Bag' },
        { id: 5, title: 'Simpo Bag' },
        { id: 6, title: 'Simpo Bag' },
        { id: 7, title: 'Simpo Bag' },
        { id: 8, title: 'Simpo Bag' },
        { id: 9, title: 'Simpo Bag' },
        { id: 10, title: 'Simpo Bag' },
        { id: 11, title: 'Simpo Bag' },
        { id: 12, title: 'Simpo Bag' },
        { id: 13, title: 'Oishi String-Bag' },
        { id: 14, title: 'Oishi String-Bag' },
        { id: 15, title: 'Oishi String-Bag' },
        { id: 16, title: 'Oishi String-Bag' },
      ],
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        accessibility: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-products{
   padding: 8%;
   .title-img{
     padding-bottom: 40px;
    .fi-title {
      font-family: 'Nexa-Bold';
      font-style: normal;
      @media only screen and (max-width: 960px) {
        font-size: 1.2rem;
        text-align: center;
      }
      @media only screen and (min-width: 960px) {
        font-size: 2.7rem;
        text-align: center;
      }
    }
   }
  }
</style>
