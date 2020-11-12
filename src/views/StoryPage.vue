<template>
    <section>
        <base-appbar/>
        <div class="story">
          <cover :data=data />
            <div class="fi-story">
              <h3 class="fi-sub-title">{{data.title}}</h3>
              <div v-for="(paragraph, id) in paragraphs" :key="id">
                <div v-for="(detail,id) in paragraph" :key="id">
                <p class="fi-text">{{detail.text}}</p>
                <v-img class="fi-img" :src=detail.img />
                </div>
              </div>
              <div>
                <h3 class="fi-tagline"><span class="primary--text">Little Act</span> Big Impact</h3>
              </div>
            </div>
        </div>
        <base-footer/>
    </section>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import Cover from '../components/BlogComponents/BlogCover.vue';
import { story } from '../firebase';

export default {
  name: 'MaskerStory',
  components: {
    BaseAppbar,
    BaseFooter,
    Cover,
  },
  data() {
    return {
      path: this.$route.params.path,
      data: {},
      paragraphs: [],
      // text: this.paragraphs.text,
      // img: this.paragraphs.img_url,
      ref: story,
    };
  },
  created() {
    this.ref.where('path', '==', this.path).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newStory = {
          title: doc.data().name,
          cover: doc.data().hero,
        };
        this.data = newStory;
        this.paragraphs.push(doc.data().paragraphs);
      });
    });
  },
};
</script>

<style lang="scss">
.story {
  .fi-story{
    @media only screen and (max-width: 960px) {
      padding:8% 10%;
    }
    @media only screen and (min-width: 960px) {
      padding:8% 20%;
    }
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
  .fi-tagline{
    font-family: 'Nexa';
    font-style: italic;
    padding: 30px 0;
    text-align: right;
    @media only screen and (max-width: 960px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 960px) {
      font-size: 2rem;
    }
  }
  .fi-img{
    margin: 5% auto;
    display:block;
    width: 100%;
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
