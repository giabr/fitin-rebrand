<template>
  <div class="fi-donation">
    <v-container fluid class="fill-height">
      <v-row
        align="center"
        justify="center">
          <h1>Yuk</h1>
          <a class="fi-typeform-button"
            href="https://fitinyourfashion.typeform.com/to/otBH84"
            data-mode="popup"
            style="display:inline-block;text-decoration:none;background-color:#5AC8D8;color:white;
            cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;
            margin-left: 20px; margin-right: 20px;height:50px;padding:0px 33px;border-radius:25px;
            max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
            font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"
            target="_blank">
          DONASI
          </a>
          <h1>Sekarang</h1>
        </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'DonationComponent',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.fi-donation{
    padding: 8%;
    height: 700px;
    background: url('../assets/donate-bg.jpg');
    background-size: cover;
    background-position:center;
    h1 {
      color: #FFF;
    }
}
</style>
