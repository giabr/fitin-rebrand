<template>
  <v-container class="fi-products">
  <v-sheet
    class="mx-auto"
    max-width="1200"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="product in products"
        :key="product"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'white lighten-1'"
          class="ma-4"
          height="570"
          width="350"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <product :product="product" />
          </v-row>
        </v-card>
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
        { title: '', url: 'https://www.instagram.com/p/B9MXmijn7-M/' },
        { title: '', url: 'https://www.instagram.com/p/B9MXIoUn0u8/' },
        { title: '', url: 'https://www.instagram.com/p/B9MW-WBHkLG/' },
        { title: '', url: 'https://www.instagram.com/p/B9JmozwABNZ/' },
        { title: '', url: 'https://www.instagram.com/p/B9JmlCHgcf_/' },
        { title: '', url: 'https://www.instagram.com/p/B9Jmficg9GL/' },
        { title: '', url: 'https://www.instagram.com/p/B9JmGrlA8R9/' },
        { title: '', url: 'https://www.instagram.com/p/B9JmCWgARMR/' },
        { title: '', url: 'https://www.instagram.com/p/B9JlzP6gQ_G/' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-products{
   padding-bottom: 5%;
  }
</style>
