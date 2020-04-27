<template>
  <div class="fi-404 primary">
    <div class="fi-sorry">
      <img src="../assets/logo-white.png" alt="">
      <h1 class="white--text">Sorry, we're under development</h1>
      <h1 class="white--text">Contact us below</h1>
      <div class="fi-social-container" align="center">
        <a v-for="(social, index) in socials" :key="index"
          target="_blank"
          v-bind:href="social.route">
          <v-btn
            depressed
            fab
            color="primary"
          >
            <font-awesome-icon class="fi-social" :icon="social.icon"></font-awesome-icon>
          </v-btn>
        </a>
      <h1 class="white--text" style="padding-top:5%">Back to <a href="/home">home</a></h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
      socials: [
        { icon: ['fab', 'instagram'], route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
        { icon: ['fab', 'linkedin'], route: 'https://www.linkedin.com/company/fitin-indonesia/' },
        { icon: ['fab', 'twitter'], route: 'https://twitter.com/fitin_id' },
        { icon: ['fab', 'facebook'], route: 'https://web.facebook.com/fashion.fitin/' },
        { icon: ['fa', 'envelope'], route: 'mailto:fitinyourfashion@gmail.com?subject=Ask%20Fitin' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fi-404{
  height: 100%;
  position: relative;
  .fi-sorry{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .fi-social-container{
    padding-top: 5%;
  }
  .fi-social{
    font-size: 40px;
    margin: 10px;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }
  h1{
    font-family: 'Nexa-Bold';
    font-style: normal;
    text-align: center;
  }
  a{
    text-decoration: underline;
    color: white;
  }
}
</style>
