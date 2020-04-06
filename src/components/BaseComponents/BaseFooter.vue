<template>
  <v-footer
    class="dr-footer primary white--text"
    tile
    padless
  >
    <v-row>
      <v-col cols="6">
        <img src="../../assets/logo-white.png" alt="" srcset="">
      </v-col>
      <v-col cols="6">
        <v-row style="letter-spacing:0.1em">
          <v-col cols="6 text-uppercase">
            <a class="menu-text white--text"
            v-for="(menu, index) in menus"
            :key="index"
            :href="menu.route"
            ><p>{{ menu.title }}</p></a>
          </v-col>
          <v-col cols="6">
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
              <a href="https://www.instagram.com/fashion.fitin/?hl=id" target="_blank">
                <font-awesome-icon
                class="white--text text--darken-1 fi-social"
                style="margin-left: 0;"
                :icon="['fab','instagram-square']"
                ></font-awesome-icon>
              </a>
              <a href="https://www.linkedin.com/company/fitin-indonesia/" target="_blank">
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','linkedin']"
              ></font-awesome-icon>
              </a>
              <a href="https://twitter.com/fitin_id" target="_blank">
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','twitter-square']"
              ></font-awesome-icon>
              </a>
              <a href="https://web.facebook.com/fashion.fitin/" target="_blank">
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','facebook-square']"
              ></font-awesome-icon>
              </a>
              <a href="mailto:fitinyourfashion@gmail.com?subject=Ask%20Fitin" target="_blank">
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fa','envelope-square']"
              ></font-awesome-icon>
              </a>
            </div>
          </v-col>
        </v-row>
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
