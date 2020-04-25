<template>
  <v-container fluid class="fi-support">
    <v-row>
      <v-col cols="12" xs=1 sm="6" lg="6" class="fi-container fi-darken-soft">
        <div class="fi-sub-container">
          <div v-for="(action, index) in actions" class="fi-block"
            :key="index">
              <a v-bind:href="action.route" target="_blank" class="fi-inline fi-center">
                <v-btn
                  class="fi-action-button"
                  depressed
                  fab
                  color="primary">
                  <font-awesome-icon class="fi-action-icon"
                  :icon="action.icon"></font-awesome-icon>
                </v-btn>
              </a>
              <div class="fi-inline">
                <p class="fi-sub-title white--text">{{action.text}}</p>
              </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" lg="6" class="fi-container fi-darken">
        <div class="fi-sub-container" style="width:100%">
          <h1 class="fi-title text-uppercase white--text">It's Time to
            <br><span class="primary--text">Act</span></h1>
          <h1 class="fi-title text-uppercase white--text">AND THE TIME IS
            <br><span class="primary--text">NOW</span></h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SupportComponent',
  data() {
    return {
      actions: [
        { icon: ['fas', 'gifts'], text: 'Become a sustainable hero by using our product', route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
        { icon: ['fas', 'donate'], text: 'Throw your clothes waste for donations', route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
        { icon: ['fab', 'instagram'], text: 'Follow & share our IG to make more people know', route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fi-support {
  background: url('../assets/support-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
    @media only screen and (min-width: 300px) {
      background-position: 80%;
      height: auto;
    }
    @media only screen and (min-width: 600px) {
      background-position: center;
      height: 100vh;
    }
    .fi-center{
      text-align: center;
    }
    .fi-block{
      display: inline-block;
      @media only screen and (max-width: 600px) {
        width: 100%;
        padding-bottom: 5%;
      }
    }
    .fi-inline{
      float: left;
      @media only screen and (max-width: 600px) {
        display: block;
        float: none;
      }
    }
  // padding: 8%;
    .fi-action-button{
      @media only screen and (max-width: 600px) {
        width: 72px;
        height: 72px;
      }
      @media only screen and (min-width: 600px) {
        max-width: 42px;
        max-height: 42px;
      }
      @media only screen and (min-width: 1024px) {
        max-width: 56px;
        max-height: 56px;
      }
    }
    .fi-action-icon{
      font-size: 1.5rem;
      @media only screen and (min-width: 600px) {
      font-size: 1.25rem;
    }
    }
    .fi-darken{
      background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) );
    }
    .fi-darken-soft{
      background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) );
    }
    .fi-container{
      position: relative;
      height: 100vh;
      @media only screen and (min-width: 300px) {
        padding-left: 0;
      }
      @media only screen and (min-width: 600px) {
        padding: 8%;
      }
      .fi-sub-container{
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }
    .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    width: 100%;
    @media only screen and (min-width: 300px) {
      font-size: 2.3rem;
      text-align: center;
    }
    @media only screen and (min-width: 600px) {
      font-size: 2rem;
      text-align: left;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 2.5rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 3.5rem;
    }
  }
    .fi-sub-title {
    font-family: 'Nexa-Light';
    font-style: normal;
    text-align: left;
    padding: 0 8%;
    @media only screen and (max-width: 600px) {
      text-align: center;
      font-size: 1rem;
      padding-top: 2%;
    }
    @media only screen and (min-width: 600px) {
      font-size: 0.75rem;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 1.5rem;
    }
  }
}
</style>
