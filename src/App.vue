<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Open+Sans:ital,wght@0,700;1,700&display=swap');
.p-font{
  font-family: 'EB Garamond', serif;
}
.h-font{
  font-family: 'Open Sans', sans-serif;
}
.fi-text {
  text-align: justify;
  color: black;
  @media only screen and (max-width: 960px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 21px;
  }
}
@font-face {
  font-family: "Nexa-Bold";
  src: url("assets/fonts/NexaBlack.otf") format("truetype");
}
@font-face {
  font-family: "Nexa-Light";
  src: url("assets/fonts/Nexa-Light.otf") format("truetype");
}
@font-face {
  font-family: "Nexa";
  src: url("assets/fonts/NexaRegular.otf") format("truetype");
}
 #app {
   margin: 0;
   padding: 0;
 }
</style>
