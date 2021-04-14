<template>
  <div>
    <base-appbar></base-appbar>
      <div class="fi-nota">
        <img class="fi-img" src="../assets/logo.png"/>
        <h2 class="fi-title primary--text">fitin</h2>
        <div class="fi-user">
            <p class="fi-name text-uppercase secondary--text">{{client.name}}</p>
            <p>{{client.phone}}</p>
            <p>{{client.location}}</p>
        </div>
        <div>
        <img class="fi-barcode" :src="'http://bwipjs-api.metafloor.com/?bcid=code128&text=' + id + '&includetext'">
        </div>
        <p class="fi-sub-title text-uppercase primary--text">Produk</p>
        <v-row>
          <v-col>
            <p>Nama produk</p>
            <p>Harga</p>
            <p>Jumlah</p>
          </v-col>
          <v-col class="right">
            <p>{{product.name}}</p>
            <p><strike>{{rupiahFormat(product.price)}}</strike> {{rupiahFormat(product.price - product.discount)}}</p>
            <p>{{product.qty}}</p>
          </v-col>
        </v-row>
        <p class="fi-sub-title text-uppercase primary--text">Transaksi</p>
        <v-row>
          <v-col>
            <p>Ongkos Kirim</p>
            <p>Total</p>
            <p>.</p>
            <p>Sudah bayar</p>
            <p>Sisa bayar</p>
          </v-col>
          <v-col class="right">
            <!-- ongkir -->
            <p>{{rupiahFormat(shipment.price)}}</p>
            <!-- total apabila ada diskon -->
            <div v-if="product.discount != 0">
              <p><strike>{{rupiahFormat(product.qty * product.price + shipment.price)}}</strike> {{rupiahFormat(total())}}</p>
            </div>
            <!-- total apabila tak ada diskon -->
            <p v-if="product.discount == 0">0</p>
            <!-- anda hemat -->
            <p>Anda hemat {{rupiahFormat(product.discount*product.qty)}}</p>
            <!-- dp -->
            <p v-if="payment.isPaidOff == false">{{rupiahFormat(payment.advanceMoney)}}</p>
            <p v-if="payment.isPaidOff == true">{{rupiahFormat(total())}}</p>
            <!-- sisa bayar -->
            <p v-if="payment.isPaidOff == false">{{rupiahFormat(sisaBayar())}}</p>
            <p v-if="payment.isPaidOff == true">0</p>
          </v-col>
        </v-row>
        <p class="fi-sub-title text-uppercase primary--text">Status</p>
        <v-row>
          <v-col>
            <p>Pembayaran</p>
            <p>Order diterima</p>
            <p>Order selesai</p>
            <p>Kode Resi</p>
          </v-col>
          <v-col class="right">
            <p v-if="payment.isPaidOff == true">Lunas</p>
            <p v-if="payment.isPaidOff == false">Belum Lunas</p>
            <p>{{dateFormat(date.orderDate)}}</p>
            <p>{{dateFormat(date.deadline)}}</p>
            <p v-if="shipment.resi">{{shipment.resi}}</p>
            <p v-else>-</p>
          </v-col>
        </v-row>
        <div>
            <p class="fi-sub-title text-uppercase primary--text">Catatan</p>
            <p style="padding-top:12px">{{product.desc}}</p>
        </div>
        <div>
            <br>
            <h2 class="fi-title secondary--text">Thanks for trusting us</h2>
            <p style="text-align: center">Anda sudah berkontribusi menjadi agen perubahan menuju dunia yang lebih ramah dan peduli dengan menggunakan produk kami</p>
            <p style="text-align: center">Tolong berikan kami masukan dan saran <a href="https://fitin.id/thank-you" target="_blank">disini</a> atau scan kode dibawah</p>
            <img class="fi-img" src="../assets/qr-code.png" alt="">
            <h3 class="fi-title primary--text">#LITTLEACTBIGIMPACT</h3>
        </div>
      </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseAppbar from '@/components/BaseComponents/BaseAppbar.vue';
import BaseFooter from '@/components/BaseComponents/BaseFooter.vue';
import axios from 'axios';
import Rupiah from 'rupiah-format';
import DateFormat from 'dateformat';

export default {
  name: 'Nota',
  components: {
    BaseAppbar,
    BaseFooter,
  },
  data() {
    return {
      id: this.$route.params.id,
      client: Object,
      payment: Object,
      product: Object,
      shipment: Object,
      date: Object,
    };
  },
  methods: {
    dateFormat(date) {
      return DateFormat(date, 'dd-mm-yyyy');
    },
    rupiahFormat(num) {
      return Rupiah.convert(num);
    },
    total() {
      return this.product.qty * (this.product.price - this.product.discount) + this.shipment.price;
    },
    sisaBayar() {
      const total = this.total();
      return (total - this.payment.advanceMoney);
    },
    async fetchData() {
      try {
        const url = `https://nota-fitin.herokuapp.com/user/${this.id}`;
        const response = await axios.get(url);
        const result = response.data;
        this.client = result.client;
        this.date = result.date;
        this.payment = result.payment;
        this.shipment = result.shipment;
        this.product = result.product;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.fi-nota{
  @media only screen and (max-width: 960px) {
    padding: 8%;
  }
  @media only screen and (min-width: 960px) {
    padding: 8% 30%;
  }
    .right{
        text-align: right;
    }
    .fi-title {
      font-family: 'Nexa-Bold';
      font-style: normal;
      @media only screen and (max-width: 960px) {
        text-align: center;
        padding: 10px;
      }
      @media only screen and (min-width: 960px) {
        text-align: center;
        padding: 10px;
      }
    }
    .fi-sub-title{
      font-family: 'Nexa-Bold';
      font-style: normal;
    }
    .fi-barcode{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 200px;
      padding-bottom: 30px;
    }
    .fi-img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
      @media only screen and (max-width: 960px) {
        padding-top: 40px;
      }
    }
    .fi-user{
        text-align: center;
        padding: 5% 0;
        font-family: 'Nexa';
        .fi-name{
          font-family: 'Nexa-Bold';
        }
    }
    p{
      font-family: "Nexa";
      @media only screen and (max-width: 960px) {
        font-size: 8px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 12px;
      }
    }
}
</style>
