<template>
  <!-- eslint-disable vue/no-v-html -->
  <div>
      <base-appbar/>
        <donate-component />
      <base-footer/>
  </div>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import DonateComponent from '@/components/DonateComponent.vue';

export default {
  name: 'Home',
  components: {
    BaseAppbar,
    DonateComponent,
    BaseFooter,
  },
  updated: {
    refreshPage() {
      this.vm.$forceUpdate();
    },
  },
};
</script>

<style>

</style>
