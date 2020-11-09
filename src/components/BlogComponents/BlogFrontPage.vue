<template>
  <section id="fi-blog-front">
    <div v-for="(story, id) in stories" :key="id">
      <blog-card :blog=story />
    </div>
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
          id: 1, date: 'Nov 9', title: 'Karya Disabilitas', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.', route: '/story/karya-disabilitas', url: 'https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 2, date: 'Nov 11', title: 'Keunikan Warisan Lokal Batik Ciprat', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.', route: '/story/karya-disabilitas', url: 'https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 3, date: 'Nov 12', title: 'Pembuatan Produk Masker dan Tas dari Batik Ciprat', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.', route: '/story/karya-disabilitas', url: 'https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 3, date: 'Nov 12', title: 'Hasil Karya Produk Batik Ciprat', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dolor condimentum, mollis erat a, egestas orci. Vestibulum quis semper nisl. In malesuada sed augue sed congue.', route: '/story/karya-disabilitas', url: 'https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
      ],
    };
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
