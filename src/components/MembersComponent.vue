<template>
  <v-container black fluid class="fi-member">
    <v-row>
      <v-col cols="6">
        <div class="fi-title text-uppercase white--text">
          <h1 class="fi-title-small">this is</h1>
          <h1 class="fi-title-big">us</h1>
        </div>
      </v-col>
      <v-col cols="6">
        <h1 class="white--text">ada gambar disini</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MemberComponent',
};
</script>

<style lang="scss" scoped>
.fi-member {
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    .fi-title-small {
      font-size: 4em;
    }
    .fi-title-big {
      font-size: 14em;
    }
  }
}
</style>
