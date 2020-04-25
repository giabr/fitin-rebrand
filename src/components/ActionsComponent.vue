<template>
  <v-container fluid class="fi-actions">
    <v-row>
      <v-col cols="12" md="6" class="fi-img-div">
        <img class="fi-img" src="../assets/action-ceo.png" alt="" srcset="">
        <h2 class="fi-sub-title tertiary--text">Ricky Chandra S.</h2>
        <p class="fi-position tertiary--text">CEO FITIN</p>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="fi-title tertiary--text">from your little action,
          <br>to big impact in our future</h1>
        <p class="fi-text tertiary--text">
          Fit in provided to solve our problem about waste fashion. Circular economy can
          answer this problem that see the challenge from waste to benefit in our life.
          Fit in have recycled many waste fashion and convert it to more usefull product.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ActionsComponent',
};
</script>

<style lang="scss" scoped>
.fi-actions {
  background: url('../assets/action-bg.jpg');
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  padding: 8%;
    .fi-img-div{
      padding-top: 8%;
      text-align: center;
      .fi-img {
        height: auto;
        width: 100%;
      }
      .fi-sub-title{
      padding-top: 5%;
      font-family: 'Nexa-Bold';
      font-style: normal;
      font-size: 30px;
      }
      .fi-position{
      font-size: 30px;
      }
    }
    .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    line-height: 50px;
    text-align: left;
    padding-top: 30%;
    font-size: 2rem;
    @media only screen and (min-width: 600px) {
      font-size: 2.3rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 2.7rem;
    }
  }
    .fi-text {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: justify;
  }
}
</style>
