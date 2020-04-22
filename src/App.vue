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
