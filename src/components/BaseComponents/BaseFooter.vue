<template>
  <v-footer
    class="dr-footer primary white--text"
    tile
    padless
  >
    <v-row>
      <v-col cols="6" md="4">
        <img src="../../assets/logo-white.png" alt="" srcset="">
      </v-col>
      <v-col cols="6" md="4" style="letter-spacing:0.1em; text-transform: uppercase">
        <a class="menu-text white--text"
        v-for="(menu, index) in menus"
        :key="index"
        :href="menu.route"
        ><p>{{ menu.title }}</p></a>
      </v-col>
      <v-col cols="12" md="4" style="letter-spacing:0.1em">
        <p class="fi-title">Get in touch</p>
        <font-awesome-icon
        class="white--text text--darken-1 fi-social"
        style="margin: 0;"
        :icon="['fa','phone-square-alt']"
        ></font-awesome-icon><span class="fi-phone">0861526135163</span>
        <br>
        <font-awesome-icon
        class="white--text text--darken-1 fi-social"
        style="margin: 0;"
        :icon="['fa','phone-square-alt']"
        ></font-awesome-icon><span class="fi-phone">0872816126557</span>
        <p style="margin-top:20px">Jalan Jogja km,
          Sinduadi, Mlati, Sleman
          Daerah Istimewa Yogyakarta,
          Indonesia
          55584</p>
        <div>
          <v-btn
            v-for="(social, index) in socials"
            :key="index"
            target="_blank"
            router :to="social.route"
            depressed
            fab
            color="primary"
          >
            <font-awesome-icon :icon="social.icon" size="3x"></font-awesome-icon>
          </v-btn>
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
        { title: 'Home', route: '/home' },
        { title: 'Product', route: '/maintenance' },
        { title: 'Blog', route: '/maintenance' },
        { title: 'FAQ', route: '/maintenance' },
        { title: 'Privacy Policy', route: '/maintenance' },
      ],
      socials: [
        { icon: ['fab', 'instagram'], route: 'https://www.instagram.com/fashion.fitin/?hl=id' },
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
    font-size: 40px;
    margin: 10px;
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  .fi-phone{
    font-family: 'Nexa';
    font-size: 14px;
    margin-left: 10px;
  }
  p{
    font-family: 'Nexa';
    font-size: 14px;
  }
  a{
    text-decoration: none;
  }
}
</style>
