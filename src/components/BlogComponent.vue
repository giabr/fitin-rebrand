<template>
 <div class="fi-blog">
 <v-container>
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Our latest news</h1>
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
        v-for="blog in blogs"
        :key="blog"
      >
        <blog-card :blog="blog" />
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
  data() {
    return {
      blogs: [
        {
          title: 'Waste is not waste until we waste it', img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87321963_185240116250248_8310286722732944586_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=T5rNIlQyTOwAX-GzARg&oh=4162b637351ca798647cb03c6dba76d8&oe=5E8D58FD', caption: "Starting with the problem of textile waste and the effort to empower Fit-Out's extraordinary school friends, there is a solution. Let's support our efforts by following Fit In and sharing Fit In so that this business can continue to benefit the environment and extraordinary school friends.", url: 'https://www.instagram.com/p/B9Ed6unF4C5/',
        },
        {
          title: 'They are just like us, they have the same right to showing up their capablities', img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/83325961_1023276928044986_8913216562900012863_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=irkFQbb00JYAX_JHfs2&oh=f39246526b164b9c2a305da1baeb72e4&oe=5E8FA346', caption: "'They are just like us, they have the same right to showing up their capablities.' \nLet's support Fit In to give space for difabel friends to explore and empower their potency.", url: 'https://www.instagram.com/p/B9EdzCFl8h9/',
        },
        {
          title: "If it doesn't add value, it's waste", img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87550703_190715518871771_2694960877678610527_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=VneQaMVfPnMAX8m9WkF&oh=171e2c13c81f7e67257592f9aefe5663&oe=5E90E5F9', caption: 'Only 1% fashion waste have recycled well in the world. Then, the others will damage to enviroment. Will we wait until disaster happen?', url: 'https://www.instagram.com/p/B9JqyZVl2cn/',
        },
        {
          title: 'Waste is not waste until we waste it', img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87321963_185240116250248_8310286722732944586_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=T5rNIlQyTOwAX-GzARg&oh=4162b637351ca798647cb03c6dba76d8&oe=5E8D58FD', caption: "Starting with the problem of textile waste and the effort to empower Fit-Out's extraordinary school friends, there is a solution. Let's support our efforts by following Fit In and sharing Fit In so that this business can continue to benefit the environment and extraordinary school friends.", url: 'https://www.instagram.com/p/B9Ed6unF4C5/',
        },
        {
          title: 'They are just like us, they have the same right to showing up their capablities', img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/83325961_1023276928044986_8913216562900012863_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=irkFQbb00JYAX_JHfs2&oh=f39246526b164b9c2a305da1baeb72e4&oe=5E8FA346', caption: "'They are just like us, they have the same right to showing up their capablities.' \nLet's support Fit In to give space for difabel friends to explore and empower their potency.", url: 'https://www.instagram.com/p/B9EdzCFl8h9/',
        },
        {
          title: "If it doesn't add value, it's waste", img: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-15/e35/87550703_190715518871771_2694960877678610527_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=VneQaMVfPnMAX8m9WkF&oh=171e2c13c81f7e67257592f9aefe5663&oe=5E90E5F9', caption: 'Only 1% fashion waste have recycled well in the world. Then, the others will damage to enviroment. Will we wait until disaster happen?', url: 'https://www.instagram.com/p/B9JqyZVl2cn/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .fi-blog{
   padding: 8%;
  //  padding-bottom: 0;
   .title-img{
     padding-bottom: 50px;
      .fi-title {
      height: 200px;
      background: url('../assets/blog-img-title.png');
      background-repeat: no-repeat;
      background-position: 70%;
      font-family: 'Nexa-Bold';
      font-style: normal;
      text-align: center;
      font-size: 40px;
      line-height: 130px;
      text-align: center;
      padding-top: 120px;
    }
   }
}
</style>
