<template>
  <v-container fluid class="fi-actions">
    <div class="black">
      <h1 class="fi-title text-uppercase white--text">How We Change</h1>
      <div class="white--text">here lies action lists</div>
    </div>
    <div class="fi-banner">
      <h1
        class="text-uppercase accent--text"
      >
        Let's <span class="primary--text">Change</span> Together
      </h1>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ActionsComponent',
};
</script>

<style lang="scss" scoped>
.fi-actions {
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 4em;
  }
  .fi-banner {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
