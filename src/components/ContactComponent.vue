<template>
  <v-container fluid class="fi-contact">
    <div class="title-img">
      <h1 class="fi-title text-uppercase tertiary--text">Contact Us</h1>
    </div>
    <form class="fi-form">
        <p class="fi-text tertiary--text">Please to fill form below and we will to call you already
        </p>
        <br>
        <p class="fi-text-form tertiary--text">Full Name</p>
        <v-text-field
          class="fi-field"
          :solo="true"
          :rounded="true"
          background-color="rgba(90, 199, 216, 0.53)"
          v-model="name"
          :error-messages="nameErrors"
          :counter="25"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <p class="fi-text-form tertiary--text">Your Email</p>
        <v-text-field
          class="fi-field"
          :solo="true"
          :rounded="true"
          background-color="rgba(90, 199, 216, 0.53)"
          v-model="email"
          :error-messages="emailErrors"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <p class="fi-text-form tertiary--text">Your Phone Number</p>
        <v-text-field
          class="fi-field"
          :solo="true"
          :rounded="true"
          background-color="rgba(90, 199, 216, 0.53)"
          v-model="phone"
          :error-messages="phoneErrors"
          required
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        ></v-text-field>
        <p class="fi-text-form tertiary--text">Any Question?</p>
        <v-textarea
          class="fi-field"
          :solo="true"
          :rounded="true"
          color=black
          background-color="rgba(90, 199, 216, 0.53)"
          v-model="question"
          @input="$v.question.$touch()"
          @blur="$v.question.$touch()"
        ></v-textarea>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
  </v-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .fi-contact{
   background: url('../assets/contact-bg.png');
   background-size: 100% auto;
   background-repeat: no-repeat;
   background-position: bottom;
   padding: 8%;
   padding-top: 0;
   .title-img{
     padding-bottom: 40px;
      .fi-title {
      height: 200px;
      background: url('../assets/contact-img-title.png');
      background-repeat: no-repeat;
      background-position: 50%;
      font-family: 'Nexa-Bold';
      font-style: normal;
      text-align: center;
      font-size: 40px;
      line-height: 100px;
      text-align: center;
      padding-top: 120px;
    }
   }
   .fi-form{
     margin: auto;
     width: 50%;
     max-width: 500px;
    .fi-text{
     text-align: center;
     font-size: 15px;
    }
    .fi-text-form{
      font-size: 15px;
      padding-left: 10px;
    }
    .fi-field{
      color: white;
    }
   }
  }
</style>
