<template>
  <v-container fluid class="fi-member">
    <h1 class="fi-title text-uppercase tertiary--text">our team</h1>
    <div class="fi-team">
    <v-row class="fi-team-2">
      <v-col cols v-for="member in members_1" :key="member">
        <member :member=member></member>
      </v-col>
    </v-row>
    <v-row class="fi-team-2">
      <v-col cols v-for="member in members_2" :key="member">
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
        { name: 'Ricky Chandra S.', job: 'CEO', img: 'ricky_ceo.png' },
        { name: 'Ani Kistiyani', job: 'PM', img: 'ani_pm.png' },
        { name: 'Laila Husnayain', job: 'CPO', img: 'laila_cpo.png' },
        { name: 'Afifah Nur M', job: 'CMO', img: 'afifah_cmo.png' },
        { name: 'Sakho Ridlo N.F.', job: 'CCO', img: 'sakho_cco.png' },
        { name: 'Gia Busyra R.', job: 'CTO', img: 'gia_cto.png' },
      ],
      members_2: [
        { name: 'Dian Rahmaji', job: 'Developer', img: 'maji_developer.png' },
        { name: 'Yulia Hani K', job: 'Graphic Designer', img: 'hani_designer.png' },
        { name: 'Faishal Muhyiddin', job: 'Videographer & Photographer', img: 'faishal_videographer.png' },
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
  .fi-team{
    padding: 8% 0;
    .fi-team-2{
      padding: 0 20%;
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
