<template>
  <v-container fluid class="fi-support">
    <v-row>
      <v-col cols="12" xs=1 sm="6" lg="6" class="fi-container fi-darken-soft">
        <div class="fi-sub-container">
          <v-row v-for="(action, index) in actions" class="fi-action"
            :key="index">
              <div id="mobile">
              <a v-bind:href="action.route">
                <v-btn
                  class="fi-action-button"
                  depressed
                  fab
                  color="primary">
                  <font-awesome-icon class="fi-action-icon"
                  :icon="action.icon"></font-awesome-icon>
                </v-btn>
                <div class="fi-inline">
                  <p class="fi-sub-title white--text">{{action.text}}
                    <span class="fi-text-more-info"><br>Click for more information</span></p>
                </div>
              </a>
              </div>
              <div id="desktop">
              <a v-bind:href="action.route">
              <v-row>
                <v-col cols="2">
                  <v-btn
                    class="fi-action-button"
                    depressed
                    fab
                    color="primary">
                    <font-awesome-icon class="fi-action-icon"
                    :icon="action.icon"></font-awesome-icon>
                  </v-btn>
                </v-col>
                <v-col cols="10">
                  <p class="fi-sub-title white--text">{{action.text}}
                    <span class="fi-text-more-info">
                      Click for more information</span></p>
                </v-col>
              </v-row>
              </a>
              </div>
          </v-row>
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
        { icon: ['fas', 'donate'], text: 'Throw your wastes to make valuable things.', route: '/donate' },
        { icon: ['fas', 'gifts'], text: 'Become a sustainable hero by using our product.', route: 'https://www.instagram.com/fitin_store.id/' },
        { icon: ['fab', 'instagram'], text: 'Follow & share our stories to make more people know.', route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
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
  #mobile{
    display: none;
    @media only screen and (max-width: 600px) {
      display: block;
      width: 100%;
    }
  }
  #desktop{
    display: block;
    @media only screen and (max-width: 600px) {
      display: none;
      width: 100%;
    }
  }
    @media only screen and (min-width: 300px) {
      background-position: 80%;
      height: auto;
    }
    @media only screen and (min-width: 600px) {
      background-position: center;
      height: 100vh;
    }
    a{
      text-decoration: none;
    }
    .fi-action{
      padding-bottom: 5%;
    }
    .fi-action-button{
      @media only screen and (max-width: 600px) {
        margin:0 auto;
        display:block;
        width: 72px;
        height: 72px;
      }
      @media only screen and (min-width: 600px) {
        max-width: 42px;
        max-height: 42px;
      }
      @media only screen and (min-width: 1024px) {
        max-width: 72px;
        max-height: 72px;
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
    .fi-inline{
      display: inline;
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
    font-family: Rubik;
    font-style: normal;
    @media only screen and (max-width: 600px) {
      text-align: center;
      font-size: 1rem;
      padding: 0 8%;
      padding-top: 2%;
    }
    @media only screen and (min-width: 600px) {
      font-size: 0.75rem;
      text-align: left;
      padding-right: 8%;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 1.25rem;
    }
  }
  .fi-text-more-info{
    font-weight: bold;
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 600px) {
      font-size: 0.75rem;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 1.25rem;
    }
  }
  .fi-sub-title:hover{
    color: #5AC8D8 !important;
  }
}
</style>
