<template>
  <div class="home">
    <base-appbar></base-appbar>
    <v-content>
      <Hero />
      <Products />
      <!-- <Blog /> -->
      <Data />
      <About />
      <Actions />
      <!-- <Impact /> -->
      <Support />
      <Members />
      <Contact />
      <!-- <Subscribe /> -->
    </v-content>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import Hero from '@/components/HeroComponent.vue';
import About from '@/components/AboutComponent.vue';
import Members from '@/components/MembersComponent.vue';
import Data from '@/components/DataComponent.vue';
import Actions from '@/components/ActionsComponent.vue';
import Products from '@/components/ProductsComponent.vue';
// import Impact from '@/components/ImpactComponent.vue';
import Support from '@/components/SupportComponent.vue';
// import Blog from '@/components/BlogComponent.vue';
// import Subscribe from '@/components/SubscribeComponent.vue';
import Contact from '../components/ContactComponent.vue';

export default {
  name: 'Home',
  components: {
    BaseAppbar,
    BaseFooter,
    Hero,
    Products,
    Data,
    About,
    Actions,
    // Impact,
    Members,
    Support,
    // Subscribe,
    // Blog,
    Contact,
  },
};
</script>
