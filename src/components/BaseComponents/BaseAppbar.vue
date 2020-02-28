<template>
  <v-app-bar
    app
    color="white"
    dark
    flat
  >
    <v-toolbar-title class="text-uppercase primary--text">
      <span class="font-weight-medium">FIT</span>
      <span class="font-weight-light">IN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(menu, index) in menus"
      :key="index"
      text
      class="primary--text hidden-sm-and-down"
      router :to="menu.route"
    >
      <span>{{ menu.title }}</span>
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
        { title: 'About Us', route: '/about' },
        { title: 'Our Mission', route: '/mission' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
