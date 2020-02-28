<template>
  <v-footer
    class="dr-footer white primary--text"
    fixed
    tile
    padless
  >
    <v-col
      class="text-center"
      cols="12"
    >
      Made with
      <font-awesome-icon
        class="mx-1 red--text text--darken-1"
        :icon="['fa','heart']"
      ></font-awesome-icon>
      and
      <font-awesome-icon
        class="mx-1 teal--text"
        :icon="['fab', 'vuejs']"
      ></font-awesome-icon>
    </v-col>
  </v-footer>
</template>
