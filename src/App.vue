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
 #app {
   margin: 0;
   padding: 0;
 }
</style>
