<template>
  <v-container class="fi-data">
    <v-row>
    <v-col cols="6" class="fi-graph">
      <img class="fi-img" src="../assets/data-pie.jpg" alt="">
        <p class="fi-text">
          It is a long established fact that a reader will
          be distracted by the readable content
        </p>
    </v-col>
    <v-col cols="6">
      <h1 class="fi-title text-uppercase accent--text">Do You Know?</h1>
      <v-row>
      <v-col cols="6">
        <h1 class="fi-sub-title accent--text">75%</h1>
        <p class="fi-text">
          It is a long established fact that a reader will
          be distracted by the readable content
        </p>
        <h1 class="fi-sub-title accent--text">75%</h1>
        <p class="fi-text">
          It is a long established fact that a reader will
          be distracted by the readable content
        </p>
      </v-col>
      <v-col cols="6">
        <h1 class="fi-sub-title accent--text">75%</h1>
        <p class="fi-text">
          It is a long established fact that a reader will
          be distracted by the readable content
        </p>
        <h1 class="fi-sub-title accent--text">75%</h1>
        <p class="fi-text">
          It is a long established fact that a reader will
          be distracted by the readable content
        </p>
      </v-col>
      </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DataComponent',
};
</script>

<style lang="scss" scoped>
.fi-data {
  padding: 5% 0;
  .fi-graph{
    padding-right: 5%;
  }
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-sub-title{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-text{
    padding-bottom: 40px;
  }
  .fi-img{
    width: 100%;
    height: auto;
  }
}
</style>
