<template>
  <v-app-bar
    app
    color="white"
    dark
    flat
    :elevate-on-scroll="true"
    :elevation=1
    class="menu"
  >
    <v-toolbar-title class="text-uppercase primary--text">
      <img class="fi-logo" src="../../assets/logo.png" alt="" srcset="">
      <p class="font-weight-medium fi-logo-text">FIT <span class="font-weight-light">
        IN</span></p>
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseAppbar',
  data() {
    return {
      menus: [
        { title: 'Home', route: '/home' },
        { title: 'Product', route: '/product' },
        { title: 'Blog', route: '/blog' },
        { title: 'FAQ', route: '/faq' },
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
}
</style>
