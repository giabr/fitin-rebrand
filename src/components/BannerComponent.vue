<template>
    <div class="fi-banner">
      <v-row>
      <v-col cols="6">
        <h1
          class="text-uppercase accent--text fi-action"
        >
          Let's <span class="primary--text">Change</span> Together
        </h1>
      </v-col>
      <v-col cols="6">
        <img class="fi-img" src="../assets/hero.png" alt="">
      </v-col>
      </v-row>
    </div>
</template>

<script>

export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.fi-banner {
  padding: 5% 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 3.5em;
  .fi-action{
    padding: 20%;
    text-align: left;
  }
  .fi-img{
    width: 100%;
    height: auto;
  }
}
</style>
