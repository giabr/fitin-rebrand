<template>
  <v-footer
    class="dr-footer primary white--text"
    tile
    padless
  >
    <v-row>
      <v-col cols="6" md="4">
        <img src="../../assets/logo-2.png" alt="" srcset="" class="desktop">
      </v-col>
      <v-col cols="12" style="letter-spacing:0.1em; text-transform: uppercase"
      class="mobile">
        <a class="menu-text white--text"
        v-for="(menu, index) in menus"
        :key="index"
        :href="menu.route"
        > {{ menu.title }} <span class="fi-point">.</span> </a>
      </v-col>
      <v-col cols="6" md="4" style="letter-spacing:0.1em; text-transform: uppercase"
      class="desktop">
        <a class="menu-text white--text"
        v-for="(menu, index) in menus"
        :key="index"
        :href="menu.route"
        ><p>{{ menu.title }}</p></a>
      </v-col>
      <v-col cols="12" md="4" style="letter-spacing:0.1em">
        <p class="fi-title">Get in touch</p>
        <br>
        <font-awesome-icon
        class="white--text text--darken-1 fi-social"
        style="margin: 0;"
        :icon="['fa','phone-square-alt']"
        ></font-awesome-icon><span class="fi-phone">0881023587673</span>
        <p style="margin-top:20px">Pogung Dalangan no 4A,
          Sinduadi, Mlati, Sleman
          Daerah Istimewa Yogyakarta,
          Indonesia
          55584</p>
        <div>
          <a v-for="(social, index) in socials" :key="index"
          target="_blank"
          v-bind:href="social.route">
          <v-btn
            depressed
            fab
            color="primary"
          >
            <font-awesome-icon class="fi-social" :icon="social.icon"></font-awesome-icon>
          </v-btn>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  data() {
    return {
      menus: [
        // { title: 'Home', route: '/home' },
        // { title: 'Story', route: '/mt' },
        // { title: 'Product', route: '/mt' },
        // { title: 'Donation', route: '/donate' },
        // { title: 'FAQ', route: '/mt' },
        // { title: 'Privacy Policy', route: '/mt' },
      ],
      socials: [
        { icon: ['fab', 'instagram'], route: 'https://www.instagram.com/fitin.official/?hl=id' },
        { icon: ['fab', 'linkedin'], route: 'https://www.linkedin.com/company/fitin-indonesia/' },
        { icon: ['fab', 'twitter'], route: 'https://twitter.com/fitin_id' },
        { icon: ['fab', 'facebook'], route: 'https://web.facebook.com/fashion.fitin/' },
        { icon: ['fa', 'envelope'], route: 'mailto:fitinyourfashion@gmail.com?subject=Ask%20Fitin' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dr-footer{
  padding: 8%;
  .fi-social{
    @media only screen and (min-width: 300px) {
      font-size: 2rem;
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    font-weight: normal;
    @media only screen and (min-width: 300px) {
      font-size: 1.2rem;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
  .fi-phone{
    font-family: 'Nexa';
    margin-left: 10px;
    @media only screen and (min-width: 300px) {
      font-size: 11px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  p{
    font-family: 'Nexa';
    @media only screen and (min-width: 300px) {
      font-size: 10px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  a{
    text-decoration: none;
    @media only screen and (min-width: 300px) {
      font-size: 10px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  .fi-point{
    line-height: 1.4;
    font-size: 1em;
    font-weight: 500;
  }
  @media only screen and (min-width: 300px) {
    .desktop{
      display: none;
    }
    .mobile{
      display: block;
    }
  }

  @media only screen and (min-width: 1024px) {
    .desktop{
      display: block;
    }
    .mobile{
      display: none;
    }
  }
}
</style>
