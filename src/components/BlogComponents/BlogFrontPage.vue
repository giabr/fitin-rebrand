<template>
  <section id="fi-blog-front">
    <div v-for="(story, id) in stories" :key="id">
      <blog-card :blog=story />
    </div>
  </section>
</template>

<script>
import BlogCard from './BlogCard.vue';
import { story } from '../../firebase';

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      stories: [],
      ref: story,
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.stories = [];
      querySnapshot.forEach((doc) => {
        this.stories.push({
          key: doc.id,
          title: doc.data().name,
          caption: doc.data().caption,
          thumbnail: doc.data().thumbnail,
          path: doc.data().path,
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
#fi-blog-front{
  @media only screen and (max-width: 960px) {
    padding: 15% 0;
  }
  @media only screen and (min-width: 960px) {
    padding: 8%;
  }
}
</style>
