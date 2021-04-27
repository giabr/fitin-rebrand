<template>
  <section>
    <base-appbar/>
    <div class="fi-feedback">
      <div class="fi-thank-you">
          <h1 class="fi-title primary--text">You always know how to make life brighter for everyone</h1>
          <font-awesome-icon class="fi-icon tertiary--text" :icon="['fas', 'heart']"></font-awesome-icon>
      </div>
      <div class="fi-frame-container">
        <iframe class="fi-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSeC6Y_UHIrAbCXxYzScN5w-ZgJiP_SmJAkNG2Y7dmgfZ3e_lg/viewform?embedded=true" width=100% height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
          <font-awesome-icon class="fi-icon primary--text" :icon="['fas', 'heart']"></font-awesome-icon>
          <h1 class="fi-sub-title secondary--text">Thank you for using our services and support our impact to create a more friendly and caring world</h1>
    </div>
    <base-footer/>
  </section>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';

export default {
  name: 'Feedback',
  components: {
    BaseAppbar,
    BaseFooter,
  },
};
</script>

<style lang="scss" scoped>
.fi-feedback{
    padding: 8%;
    .fi-title {
        font-family: 'Nexa-Bold';
        font-style: normal;
        text-align: center;
        @media only screen and (max-width: 960px) {
        font-size: 1rem;
        }
        @media only screen and (min-width: 960px) {
        font-size: 2rem;
        }
    }
    .fi-sub-title {
        font-family: 'Nexa-Bold';
        font-style: normal;
        text-align: center;
        @media only screen and (max-width: 960px) {
        font-size: 0.8rem;
        }
        @media only screen and (min-width: 960px) {
        font-size: 1.7rem;
        }
    }
    .fi-text{
        text-align: justify;
        color: grey;
        @media only screen and (max-width: 960px) {
        font-size: 12px;
        }
        @media only screen and (min-width: 960px) {
        font-size: 16px;
        }
    }
    .fi-icon{
        font-size: 70px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .fi-frame-container{
        position: relative;
        overflow: hidden;
    }
}
</style>
