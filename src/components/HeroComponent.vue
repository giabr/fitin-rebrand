<template>
  <v-container fluid class="fi-hero black">
    <v-row>
      <v-col cols="6">
        <h1 class="white--text">Ada gambar disini</h1>
      </v-col>
      <v-col cols="6">
        <div class="text-uppercase white--text">
          <h1 class="fi-title-small">little <span class="primary--text">act</span></h1>
          <h2 class="fi-title-big">big <span class="primary--text">impact</span></h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroComponent',
};
</script>

<style lang="scss" scoped>
.fi-hero {
  .fi-title-small {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
  }
  .fi-title-big {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 114px;
  }
}
</style>
