<template>
  <div class="fi-404 primary">
    <div class="fi-sorry">
      <img src="../assets/logo-white.png" alt="">
      <h1 class="white--text">Sorry, we're under development</h1>
      <h1 class="white--text">Contact us below</h1>
      <div class="fi-social-container" align="center">
      <a href="https://www.instagram.com/fashion.fitin/?hl=id" target="_blank">
      <font-awesome-icon
      class="white--text text--darken-1 fi-social"
      style="margin-left: 0;"
      :icon="['fab','instagram-square']"
      ></font-awesome-icon>
      </a>
      <a href="https://www.linkedin.com/company/fitin-indonesia/" target="_blank">
      <font-awesome-icon
      class="white--text text--darken-1 fi-social"
      :icon="['fab','linkedin']"
      ></font-awesome-icon>
      </a>
      <a href="https://twitter.com/fitin_id" target="_blank">
      <font-awesome-icon
      class="white--text text--darken-1 fi-social"
      :icon="['fab','twitter-square']"
      ></font-awesome-icon>
      </a>
      <a href="https://web.facebook.com/fashion.fitin/" target="_blank">
      <font-awesome-icon
      class="white--text text--darken-1 fi-social"
      :icon="['fab','facebook-square']"
      ></font-awesome-icon>
      </a>
      <a href="mailto:fitinyourfashion@gmail.com?subject=Ask%20Fitin" target="_blank">
      <font-awesome-icon
      class="white--text text--darken-1 fi-social"
      :icon="['fa','envelope-square']"
      ></font-awesome-icon>
      </a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
};
</script>

<style lang="scss" scoped>
.fi-404{
  height: 100%;
  position: relative;
  .fi-sorry{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .fi-social-container{
    padding-top: 5%;
  }
  .fi-social{
    font-size: 40px;
    margin: 10px;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }
  h1{
    font-family: 'Nexa-Bold';
    font-style: normal;
    text-align: center;
  }
}
</style>
