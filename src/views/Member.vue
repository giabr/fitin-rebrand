<template>
    <section class="fi-member">
        <v-row>
            <v-col cols="4" class="left-top quaternary">
                <v-img class="fi-img" src="../assets/logo-2.png" />
            </v-col>
            <v-col cols="8" class="right-top quaternary">
                <h2 style="margin-top:12%;margin-right:15px;text-align:right" class="fi-title">Fitin Membership Card</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="left-bottom fi-title" :style="{background: levelColor}">
                <h3>Name</h3>
                <h3 class="quaternary--text">{{member.name}}</h3>
                <br>
                <h3>ID Number</h3>
                <h3 class="quaternary--text">{{member.id}}</h3>
                <br>
                <h3>Member Since</h3>
                <h3 class="quaternary--text">{{dateFormat(member.startDate)}}</h3>
            </v-col>
            <v-col class="right-bottom fi-title" :style="{background: levelColor}">
                <v-img class="fi-img-user" src="../assets/logo-2.png" />
                <br>
                <h2 style="text-align:center" class="quaternary--text">{{memberLevel(member.level)}} Member</h2>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import DateFormat from 'dateformat';

export default {
  name: 'Member',
  data() {
    return {
      levelColor: 'black',
      member: {
        id: '1',
        name: 'Budi Sudarso',
        level: 3,
        startDate: new Date('12-12-2020'),
      },
    };
  },
  methods: {
    dateFormat(date) {
      return DateFormat(date, 'dd-mm-yyyy');
    },
    memberLevel(level) {
      let status = '';
      if (level === 3) {
        status = 'VIP';
      } else if (level === 2) {
        status = 'Gold';
      } else {
        status = 'Platinum';
      }
      return status;
    },
  },
};
</script>

<style lang="scss" scoped>
.fi-member{
    margin: auto;
    width: 600px;
    color: white;
    @media only screen and (max-width: 960px) {
        padding: 3%;
    }
    .fi-title {
      font-family: 'Nexa-Bold';
      font-style: normal;
    }
    .fi-img{
        width: 80px;
        height: auto;
    }
    .fi-img-user{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    .left-top{
        padding: 30px;
        border-top-left-radius: 60px;
    }
    .left-bottom{
        padding: 30px;
        border-bottom-left-radius: 60px;
    }
    .right-top{
        padding: 30px;
        border-top-right-radius: 60px;
    }
    .right-bottom{
        padding: 30px;
        border-bottom-right-radius: 60px;
    }
}
</style>
