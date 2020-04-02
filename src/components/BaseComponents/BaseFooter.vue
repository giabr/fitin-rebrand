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
        <v-row>
          <v-col cols="6">
            <p>Home</p>
            <p>Product</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
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
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              style="margin-left: 0;"
              :icon="['fab','instagram-square']"
              ></font-awesome-icon>
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','linkedin']"
              ></font-awesome-icon>
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','twitter-square']"
              ></font-awesome-icon>
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fab','facebook-square']"
              ></font-awesome-icon>
              <font-awesome-icon
              class="white--text text--darken-1 fi-social"
              :icon="['fa','envelope-square']"
              ></font-awesome-icon>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

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
    font-family: 'Nexa-Light';
    font-size: 16px;
    margin-left: 10px;
  }
  p{
    font-family: 'Nexa-Light';
    font-size: 16px;
  }
}
</style>
