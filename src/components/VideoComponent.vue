<template>
  <section class="fi-video">
    <iframe class="intro-video" src="https://www.youtube.com/embed/rjf2_wWqfEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.fi-video{
    @media only screen and (max-width: 960px) {
        padding: 8%;
    }
    @media only screen and (min-width: 960px) {
        padding: 8% 20%;
    }
    .intro-video{
        border-radius: 20px;
        margin-top: 8%;
        @media only screen and (max-width: 960px) {
            height: 200px;
            width: 100%;
        }
        @media only screen and (min-width: 960px) {
            height: 500px;
            width: 100%;
        }
    }
}

</style>
