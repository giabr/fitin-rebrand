<template>
 <div class="fi-blog">
 <v-container>
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Our latest news</h1>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(blog, index) in blogs" :key="index">
          <blog-card :blog="blog" />
        </div>
      </VueSlickCarousel>
    </div>
 </v-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css';
import '../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import BlogCard from './BlogComponents/BlogCard.vue';

export default {
  components: {
    VueSlickCarousel,
    BlogCard,
  },
  data() {
    return {
      blogs: [
        { id: 1, title: 'Jangan Sampai Pakaianmu Menjadi Limbah', caption: 'Tahukah kalian seiring bertambahnya usia dan berat badan kita akan sering membeli pakaian. Lalu baju baju lama yang tidak dipakai lagi apa akan dibiarkan menumpuk begitu saja?' },
        { id: 2, title: 'FAST FASHION VS SLOW FASHION', caption: 'Ayo bandingkan kedua tren ini. Mana yg lebih baik? Jika kamu sudah tau, ayo ubah gaya fashion kamu' },
        { id: 3, title: 'Mengenal lebih dekat Slow Fashion', caption: 'Mungkin sebagian orang belum mengenal arti dari slow fashion karena jarang untuk dibahas. Namun, tren slow fashion ini dapat berkontribusi dalam mengurangi limbah baju serta mengurangi kejahatan terhadap pekerja fashion' },
      ],
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
      line-height: 130px;
      text-align: center;
      padding-top: 120px;
      font-size: 2rem;
      @media only screen and (min-width: 600px) {
        font-size: 2.3rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 2.7rem;
      }
    }
   }
}
</style>
