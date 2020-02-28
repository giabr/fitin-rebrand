<template>
  <div class="home">
    <base-appbar></base-appbar>
    <v-content>
      <Hero />
      <About />
      <Members />
      <Data />
      <Actions />
      <Products />
      <Video />
      <Testimonies />
    </v-content>
    <!-- <base-footer></base-footer> -->
  </div>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
// import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import Hero from '@/components/HeroComponent.vue';
import About from '@/components/AboutComponent.vue';
import Members from '@/components/MembersComponent.vue';
import Data from '@/components/DataComponent.vue';
import Actions from '@/components/ActionsComponent.vue';
import Products from '@/components/ProductsComponent.vue';
import Video from '@/components/VideoComponent.vue';
import Testimonies from '@/components/TestimoniesComponent.vue';

export default {
  name: 'Home',
  components: {
    BaseAppbar,
    // BaseFooter,
    Hero,
    About,
    Members,
    Data,
    Actions,
    Products,
    Video,
    Testimonies,
  },
};
</script>
