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
import StepComponent from './ActionComponent/StepComponent.vue';

export default {
  name: 'ActionsComponent',
  components: {
    StepComponent,
  },
  data() {
    return {
      steps: [
        { num: 1, content: 'It is a long established fact that a reader will be distracted by the readable content' },
        { num: 2, content: 'It is a long established fact that a reader will be distracted by the readable content' },
        { num: 3, content: 'It is a long established fact that a reader will be distracted by the readable content' },
        { num: 4, content: 'It is a long established fact that a reader will be distracted by the readable content' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fi-actions {
  background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url('../assets/step.jpg');
  background-size: 100% auto;
  background-position: center top;
  .fi-how{
    padding: 5% 0;
    height: 700px;
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
