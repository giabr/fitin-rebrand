<template>
  <v-col class="fi-step">
    <div class="fi-circle">
        <h1 class="fi-title white--text">{{content.num}}</h1>
    </div>
        <p class="fi-text white--text">{{content.content}}</p>
  </v-col>
</template>

<script>
export default {
  props: {
    total: Number,
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
.fi-step {
  .fi-circle{
    margin-top: 15%;
    width: 180px;
    height: 180px;
    background: #5AC8D8;
    -moz-border-radius: 90px;
    -webkit-border-radius: 90px;
    border-radius: 90px;
    border: #ffffff solid 15px;
    margin-left: 15%;
  }
  .fi-title {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: bold;
    font-size: 6em;
    text-align: center;
    vertical-align: middle;
    line-height: 150px;
  }
  .fi-text {
    margin-top: 15%;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    padding: 0 5%;
  }
}

</style>
