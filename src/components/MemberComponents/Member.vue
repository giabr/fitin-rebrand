<template>
  <div>
    <img class="fi-img" :src="require('@/assets/teams/' + member.img)" alt="">
    <h2 class="fi-sub-title tertiary--text">{{member.name}}</h2>
    <p class="fi-position tertiary--text">{{member.job}}</p>
  </div>
</template>

<script>
export default {
  props: {
    member: Object,
  },
};
</script>

<style lang="scss" scoped>
.fi-img{
  max-width: 180px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media only screen and (min-width: 600px) {
    /* For tablets: */
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    max-width: 180px;
  }
}
.fi-sub-title{
padding-top: 5%;
font-family: 'Nexa-Bold';
font-style: normal;
font-size: 18px;
text-align: center;
}
.fi-position{
text-align: center;
font-size: 12px;
}
</style>
