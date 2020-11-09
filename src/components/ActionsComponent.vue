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
  padding: 20% 8%;
    .fi-img-div{
      padding-top: 10%;
      text-align: center;
      .fi-img {
        height: auto;
        width: 60%;
      }
      .fi-sub-title{
        padding-top: 5%;
        font-family: 'Nexa-Bold';
        font-style: normal;
        @media only screen and (max-width: 960px) {
          font-size: 16px;
        }
        @media only screen and (min-width: 960px) {
          font-size: 24px;
        }
      }
      .fi-position{
        font-size: 18px;
      }
    }
    .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    text-transform: uppercase;
    @media only screen and (max-width: 960px) {
      font-size: 1rem;
      padding-top: 0;
      text-align: center;
    }
    @media only screen and (min-width: 960px) {
      font-size: 2rem;
      padding-top: 30%;
      text-align: left;
    }
  }
    .fi-text {
      font-family: Rubik;
      margin-top: 15px;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      text-align: justify;
      text-align: justify;
      @media only screen and (max-width: 960px) {
        font-size: 12px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 16px;
      }
  }
}
</style>
