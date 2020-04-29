<template>
  <div class="fi-subscribe">
      <h3 class="fi-title tertiary--text">Subscribe now to get our newsletter</h3>
      <div class="fi-form">
        <v-text-field
        class="fi-field"
        label="youremail@gmail.com"
        single-line
        solo
        clearable
        ></v-text-field>
        <v-btn class="primary">Submit</v-btn>
      </div>

  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.fi-subscribe{
    padding: 15% 8%;
    @media only screen and (min-width: 600px) {
      padding: 8%;
    }
    .fi-form{
      padding: 3%;
      text-align: center;
    }
    .fi-field{
    @media only screen and (min-width: 600px) {
      width: 60%;
      margin: auto;
    }
    }
    .fi-title{
      font-family: 'Nexa-Bold';
      font-style: normal;
      font-weight: bold;
      text-align: center;
      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
      @media only screen and (min-width: 1000px) {
        font-size: 1.5rem;
      }
      @media only screen and (min-width: 1264px) {
        font-size: 1.5rem;
      }
   }
}
</style>
