<template>
  <v-container class="fi-impact">
    <div class="fi-title">
        <h1 class="fi-title-small">Your Little Act</h1>
        <h1 class="fi-title-big">Make Big Impact</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ImpactComponent',
};
</script>

<style lang="scss" scoped>
  .fi-impact{
  padding: 5% 0;
    .fi-title {
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     text-align: center;
        .fi-title-small {
        font-size: 4em;
        line-height: 40px;
        }
        .fi-title-big {
        font-size: 6em;
        }
   }
  }
</style>
