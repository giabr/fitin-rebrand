<template>
  <v-container fluid class="fi-about">
      <div class="fi-desc">
        <font-awesome-icon class="fi-icon tertiary--text" :icon="['fas', 'heart']"></font-awesome-icon>
        <h1 class="fi-title text-uppercase primary--text">We want to make the world <span class="secondary--text">more friendly</span> and <span class="secondary--text">caring</span> for people and earth</h1>
      </div>
  </v-container>
</template>

<script>

export default {
  name: 'AboutComponent',
};
</script>

<style lang="scss" scoped>
.fi-about {
  padding: 10%;
  .fi-icon{
    font-size: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-bottom: 5%;
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    text-align: center;
    @media only screen and (max-width: 960px) {
      font-size: 1.5rem;
      padding-top: 8%;
    }
    @media only screen and (min-width: 960px) {
      font-size: 2.7rem;
    }
  }
}
</style>
