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
import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css';
import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css';
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
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
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
   padding-bottom: 0;
   .title-img{
     padding-bottom: 40px;
    .fi-title {
      height: 200px;
      background: url('../assets/product-img-title.png');
      background-repeat: no-repeat;
      font-family: 'Nexa-Bold';
      font-style: normal;
      text-align: center;
      line-height: 100px;
      text-align: center;
      padding-top: 120px;
      font-size: 2rem;
      @media only screen and (min-width: 300px) {
        font-size: 2.3rem;
        background-size: auto 80%;
        background-position: 0%;
      }
      @media only screen and (min-width: 768px) {
        font-size: 2.7rem;
        background-size: auto 90%;
        background-position: 33%;
      }
    }
   }
  }
</style>
