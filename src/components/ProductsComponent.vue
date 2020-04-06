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
        { title: 'Pouch Serut Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87488685_3043576612332639_737447784178550113_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=cJDOf3xotr8AX_-D9pY&oh=a1ebdf699289158b000ac827c9a5b80d&oe=5EA38CCF' },
        { title: 'Pouch Serut Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87576559_142363237255100_2330402369569164214_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=ZUAmT16Gy2oAX89YC67&oh=08be4b8ff9ca3bcac4705f43b4c39db3&oe=5E939A09' },
        { title: 'Pouch Serut Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/89276397_508023669884884_5338228437700645340_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=uhndJqyuRLgAX8J2Dk7&oh=c3bd34d16530097f64121bf06e303f0f&oe=5E9C8C1E' },
        { title: 'Totebag Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/88237099_199539984601476_3555493427771885252_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=ciDSH1zAsMYAX_FNj9c&oh=4d670cdcb4aa3394ec208232e823d029&oe=5EA21F13' },
        { title: 'Pouch Box Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87723022_195391105048157_8339435708663765415_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=tHUbWBeKYf8AX--y5zx&oh=b7a838878f73a68d6d647533d401e840&oe=5EA70387' },
        { title: 'Pouch Box Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/88135080_662847127875680_2699697200002523011_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wONsnQOl8kQAX81QhBV&oh=dfb90279b33049e04e9bcd6da21eb0cc&oe=5EA563BB' },
        { title: 'Pouch Box Upcycle', url: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/84316725_220786025768606_6377685167284072351_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=_vFRJCDVeIsAX80KG67&oh=67281491d4ed53cad33fac6a99d9fc77&oe=5EA480CB' },
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
      font-size: 40px;
      line-height: 100px;
      text-align: center;
      padding-top: 120px;
    }
   }
  }
</style>
