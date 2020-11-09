<template>
    <section>
        <base-appbar/>
        <div class="story">
            <h1 class="fi-title tertiary--text">Cerita dibalik masker</h1>
            <div class="fi-story">
                <img src="" alt="" srcset="">
                <h3 class="fi-sub-title">What is Lorem Ipsum?</h3>
                <p class="fi-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <base-footer/>
    </section>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';

export default {
  name: 'MaskerStory',
  components: {
    BaseAppbar,
    BaseFooter,
  },
};
</script>

<style lang="scss">
.story {
    padding: 8%;
    .fi-title {
      font-family: 'Nexa-Bold';
      font-style: normal;
      font-size: 2rem;
      @media only screen and (min-width: 300px) {
          font-size: 1.5rem;
          text-align: center;
      }
      @media only screen and (min-width: 1024px) {
          font-size: 2.7rem;
          text-align: center;
      }
    }
    .fi-sub-title{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      @media only screen and (min-width: 300px) {
        font-size: 0.8rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 1.5rem;
      }
  }
    .fi-text {
        text-align: justify;
    }
}
</style>
