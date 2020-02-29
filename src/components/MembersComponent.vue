<template>
  <v-container black fluid class="fi-member">
    <v-row>
      <v-col cols="12">
        <div class="fi-title text-uppercase white--text">
          <h1 class="fi-title-small">this is</h1>
          <h1 class="fi-title-big">us</h1>
        </div>
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
  height: 700px;
  background: url('../assets/us.jpg');
  background-size: 100% auto;
  background-position: center bottom;
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    padding-left: 10%;
    padding-top: 15%;
    .fi-title-small {
      font-size: 4em;
      line-height: 80px;
    }
    .fi-title-big {
      font-size: 14em;
      line-height: 200px;
    }
  }
}
</style>
