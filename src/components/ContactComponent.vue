<template>
  <v-container fluid class="fi-contact">
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Contact</h1>
    </div>
    <div class="fi-form-container">
      <iframe id="fi-form" src="https://docs.google.com/forms/d/e/1FAIpQLScJMBU6zK5wUgAiAX1ARxDv_52QHe3ovQHNjTkS5ZfXSyj6YA/viewform?embedded=true" width=100% height="1000" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
    </div>
    <!-- <subscribe /> -->
  </v-container>
</template>

<script>
// import Subscribe from './SubscribeComponent.vue';

export default {
  components: {
    // Subscribe,
  },
};
</script>

<style lang="scss" scoped>
  .fi-contact{
   background: url('../assets/contact-bg.png');
   background-size: 100% auto;
   background-repeat: no-repeat;
   background-position: bottom;
   padding: 8%;
   padding-top: 0;
    @media only screen and (max-width: 600px) {
      padding: 20% 8%;
    }
   .title-img{
     padding-bottom: 40px;
      .fi-title {
      height: 200px;
      background: url('../assets/contact-img-title.png');
      background-repeat: no-repeat;
      background-position: 50%;
      font-family: 'Nexa-Bold';
      font-style: normal;
      text-align: center;
      line-height: 100px;
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
   .fi-form-container{
    position: relative;
    overflow: hidden;
    text-align: center;
    .fi-text{
     text-align: center;
     font-size: 15px;
    }
    .fi-text-form{
      font-size: 15px;
      padding-left: 10px;
    }
    .fi-field{
      color: white;
    }
   }
  }
</style>
