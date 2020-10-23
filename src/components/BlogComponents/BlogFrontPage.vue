<template>
  <section id="fi-blog-front">
    <v-row>
      <v-col cols="12" v-for="(story, id) in stories" :key="id">
        <blog-card :blog=story />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import BlogCard from './BlogCard.vue';

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      stories: [
        {
          id: 1, date: 'Sep 23', title: 'Cerita sebuah masker', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.',
        },
        {
          id: 2, date: 'Des 23', title: 'Lorem ipsum dolor sit amet', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.',
        },
        {
          id: 3, date: 'Jan 23', title: 'Lorem ipsum dolor sit amet', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.',
        },
      ],
    };
  },
};
</script>

<style>
#fi-blog-front{
  padding: 8%;
}
</style>
