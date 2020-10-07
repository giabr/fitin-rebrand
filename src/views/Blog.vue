<template>
  <section id="blog">
    <base-appbar/>
        <blog-front />
    <base-footer/>
  </section>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import BlogFront from '@/components/BlogComponents/BlogFrontPage.vue';

export default {
  name: 'Blog',
  components: {
    BaseAppbar,
    BaseFooter,
    BlogFront,
  },
};
</script>

<style>
</style>
