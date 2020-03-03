<template>
 <div class="fi-blog">
 <v-container>
  <v-sheet
    class="fi-blog mx-auto"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
      >
    <blog-card />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
 </v-container>
  </div>
</template>

<script>
import BlogCard from './BlogComponents/BlogCard.vue';

export default {
  components: {
    BlogCard,
  },
};
</script>

<style lang="scss" scoped>
.fi-blog{
padding: 5% 0;
}
</style>
