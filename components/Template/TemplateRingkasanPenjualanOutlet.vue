<template>
  <div>
    <RingkasanPenjualanOutlet
      :data-outlet="dataTableOutlet"
      :data-quarter="dataTableQuarter"
      :data-month="dataTableMonth"
      :data-poin="dataTablePoin"
      :data-poin-quarter="dataTablePoinQuarter"
    />
  </div>
</template>

<script>
import axios from 'axios'
import RingkasanPenjualanOutlet from '../organisms/RingkasanPenjualanOutlet.vue'
export default {
  components: {
    RingkasanPenjualanOutlet,
  },
  data() {
    return {
      dataTableOutlet: {
        data: [],
      },
      dataTableQuarter: {
        data: [],
      },
      dataTableMonth: {
        data: [],
      },
      dataTablePoin: {
        data: [],
      },
      dataTablePoinQuarter: {
        data: [],
      },
    }
  },
  mounted() {
    this.getTableOutlet()
    this.getTableQuarter()
    this.getTableMonth()
    this.getTablePoin()
    this.getTablePoinQuarter()
  },
  methods: {
    getTableOutlet() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableQuarter() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/sem`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
    getTableMonth() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/quarter`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableMonth = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePoin() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/redeem/summary/month`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTablePoin = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePoinQuarter() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/redeem/summary/quarter`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTablePoinQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>