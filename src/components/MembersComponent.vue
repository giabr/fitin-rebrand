<template>
  <v-container fluid class="fi-member">
    <h1 class="fi-title text-uppercase tertiary--text">our team</h1>
    <div class="fi-team">
    <v-row>
      <v-col cols="12" v-for="(member, index) in members_1" :key="index"
        xs="12"
        sm="4"
        md="3"
        lg="3"
      >
        <member :member=member></member>
      </v-col>
    </v-row>
    <v-row class="fi-team-2">
      <v-col cols="12" v-for="(member, index) in members_2" :key="index"
        xs="12"
        sm="4"
        md="4"
        lg="4"
      >
        <member :member=member></member>
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script>
import Member from './MemberComponents/Member.vue';

export default {
  name: 'MemberComponent',
  components: {
    Member,
  },
  data() {
    return {
      members_1: [
        { name: 'Ricky Chandra S.', job: 'Chief Executive Officer', img: 'ricky_ceo.png' },
        { name: 'Hilya Aulia S.', job: 'Chief Marketing Officer', img: 'hilya_cmo.png' },
        { name: 'Ani Kistiyani', job: 'Chief Product Officer', img: 'ani_pm.png' },
        { name: 'Gia Busyra R.', job: 'Chief Branding Officer', img: 'gia_cto.png' },
      ],
      members_2: [
        { name: 'Alfin Syarifuddin S.', job: 'Public Relation & Branding Officer', img: 'alfin_branding.png' },
        { name: 'Yulia Hani K.', job: 'Branding & Graphic Designer', img: 'hani_designer.png' },
        { name: 'Saffanah Zakia R.', job: 'Innovation Product Officer', img: 'shafa_produksi.png' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fi-member {
  background: url('../assets/member-bg.jpg');
  background-size: 100% auto;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 8%;
  @media only screen and (max-width: 600px) {
    padding: 20% 8%;
  }
  .fi-team{
    // padding: 8% 0;
    @media only screen and (min-width: 300px) {
      padding-top: 10%;
    }
    @media only screen and (min-width: 1264px) {
      padding: 8% 15%;
    }
  }
  .fi-team-2{
    @media only screen and (min-width: 300px) {
      padding-bottom: 15%;
    }
    @media only screen and (min-width: 1264px) {
      padding: 2% 10%;
    }
  }
  .fi-title {
    font-family: 'Nexa-Bold';
    font-style: normal;
    line-height: 50px;
    text-align: center;
    font-size: 2rem;
    @media only screen and (min-width: 600px) {
      font-size: 2.3rem;
    }
    @media only screen and (min-width: 1264px) {
      font-size: 2.7rem;
    }
  }
}
</style>
