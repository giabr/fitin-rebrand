<template>
  <v-app-bar
    app
    color="white"
    dark
    flat
    class="menu"
  >
    <v-toolbar-title class="primary--text">
      <router-link to="/home">
      <img class="fi-logo" src="../../assets/logo.png" alt="" srcset="">
      <p class="font-weight-medium fi-logo-1">
        fit<span class="font-weight-light fi-logo-2">in</span>
      </p>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(menu, index) in menus"
      :key="index"
      text
      class="primary--text hidden-sm-and-down"
      router :to="menu.route"
      @click.native="$router.go()"
    >
      <span class="menu-text">{{ menu.title }}</span>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          target="_blank"
          text
          icon
          v-on="on"
          class="primary--text hidden-md-and-up"
        >
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(menu, index) in menus"
          :key="index"
          router :to="menu.route"
          @click.native="$router.go()"
        >
          <v-list-item-title>
            {{menu.title}}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseAppbar',
  data() {
    return {
      menus: [
        // { title: 'Home', route: '/home' },
        // { title: 'Story', route: '/mt' },
        // { title: 'Product', route: '/mt' },
        // { title: 'Donation', route: '/donate' },
        // { title: 'FAQ', route: '/mt' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu{
  height: 100%;
}
.fi-logo-1{
  font-size: 24px;
  font-family: 'Nexa-Bold';
  display: inline-block;
  vertical-align: middle;
  margin-bottom: -4px;
}
.fi-logo-2{
  font-family: 'Nexa';
}
.fi-logo{
  max-width: 36px;
  margin-right: 5px;
  vertical-align: middle;
}
.menu-text{
  font-family: 'Nexa';
  font-weight: 700;
}
</style>
