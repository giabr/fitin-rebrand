<template>
  <v-container class="fi-about">
    <v-row>
      <v-col cols="6">
        <h1 class="fi-title accent--text">What is Fitin?</h1>
        <p class="fi-text">
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
        </p>
      </v-col>
      <v-col cols="6">
        <h1>Ada gambar disini</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutComponent',
};
</script>

<style lang="scss" scoped>
.fi-about {
  .fi-title {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 2em;
    text-align: justify;
  }
}
</style>
