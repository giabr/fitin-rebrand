<template>
    <section>
        <base-appbar/>
        <div class="story">
          <cover :story=data />
            <div class="fi-story">
              <h3 class="fi-sub-title">The Art of Batik Tulis</h3>
              <p class="fi-text">This hand-drawn technique is a much-prized skill that requires details, precision and patience.</p>
              <p class="fi-text">The complexity of batik tulis has long made it one of the most sought after batik fabrics that goes beyond the pricetag value.</p>
              <v-img class="fi-img" src="https://www.batikkultur.com/wp-content/uploads/2018/08/Untitled-1av.jpg" />
              <div>
                <p class="fi-text" style="text-align:right;">As it’s different from mass-produced or printed batik fabric, batik tulis is truly special and one-of-a-kind.</p>
                <p class="fi-text" style="text-align:right;">While the pattern or drawing may be similar, not one detail is the same to another, making it extra unique, uncommon and singular.</p>
              </div>
              <v-img class="fi-img" src="https://www.batikkultur.com/wp-content/uploads/2018/08/Untitled-1zz.jpg" />
              <p class="fi-text">At Batik Kultur, we aim to preserve the culture of batik tulis, ensuring this noble art of batik-making to<br> withstand the hands of time by delivering exceptional batik tulis clothing that you will love and treasure.</p>
              <v-img class="fi-img" src="https://www.batikkultur.com/wp-content/uploads/2018/08/Untitled-1adad-1.jpg" />
              <p class="fi-text" style="text-align:center;">With our collection, own your pieces of true art.</p>
              <v-img class="fi-img" src="https://www.batikkultur.com/wp-content/uploads/2018/08/Untitled-1dsds.jpg" />
            </div>
        </div>
        <base-footer/>
    </section>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import Cover from '../../components/BlogComponents/BlogCover.vue';

export default {
  name: 'MaskerStory',
  components: {
    BaseAppbar,
    BaseFooter,
    Cover,
  },
  data() {
    return {
      data: {
        title: 'Karya Disabilitas',
        img: 'https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    };
  },
};
</script>

<style lang="scss">
.story {
  .fi-story{
    padding:8% 15%;
  }
  .fi-sub-title{
    font-family: 'Nexa';
    font-style: normal;
    padding-bottom: 20px;
    @media only screen and (max-width: 960px) {
      font-size: 0.8rem;
    }
    @media only screen and (min-width: 960px) {
      font-size: 1.8rem;
    }
  }
  .fi-img{
    margin: 5% 0;
  }
  .fi-text {
      text-align: justify;
      font-family: Rubik;
      text-align: justify;
      @media only screen and (max-width: 960px) {
        font-size: 12px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 16px;
      }
  }
}
</style>
