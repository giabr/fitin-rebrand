<template>
  <v-container fluid class="fi-actions">
    <div class="fi-how">
      <v-container>
        <h1 class="fi-title text-uppercase white--text">How We Change</h1>
        <v-row>
          <step-component v-for="step in steps" :key="step" :total=4 :content="step"/>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import StepComponent from './ActionComponent/StepComponent.vue';

export default {
  name: 'ActionsComponent',
  components: {
    StepComponent,
  },
  data() {
    return {
      steps: [
        { num: 1, title: 'save space', content: 'after processing' },
        { num: 2, title: 'make money', content: 'every transaction' },
        { num: 3, title: 'share story', content: 'journey of life' },
        { num: 4, title: 'save environment', content: 'handmade product' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fi-actions {
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url('../assets/step.jpg');
  background-size: 100% auto;
  background-position: center;
  padding: 5% 0;
  .fi-how{
    height: 500px;
  }
  .fi-title {
    font-family: Rubik;
    font-style: normal;
    text-align: center;
    font-weight: bold;
    font-size: 3em;
  }
  .fi-text {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: justify;
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
