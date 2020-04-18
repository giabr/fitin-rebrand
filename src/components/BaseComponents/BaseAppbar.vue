<template>
  <v-app-bar
    app
    color="white"
    dark
    flat
    :elevate-on-scroll="true"
    :elevation=0
    class="menu"
  >
    <v-toolbar-title class="text-uppercase primary--text">
      <img class="fi-logo" src="../../assets/logo.png" alt="" srcset="">
      <p class="font-weight-medium fi-logo-text">
        FIT<span class="font-weight-light">IN</span>
      </p>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(menu, index) in menus"
      :key="index"
      text
      class="primary--text hidden-sm-and-down"
      router :to="menu.route"
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
        { title: 'Home', route: '/home' },
        { title: 'Product', route: '/maintenance' },
        { title: 'Blog', route: '/maintenance' },
        { title: 'FAQ', route: '/maintenance' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu{
  height: 100%;
}
.fi-logo-text{
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: -4px;
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
