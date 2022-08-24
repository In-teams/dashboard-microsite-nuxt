<template>
  <SellingDetailArea
    :data-table-quarter="dataTableQuarter"
    :data-table-tahun="dataTableTahun"
  />
</template>

<script>
import axios from 'axios'
import SellingDetailArea from '../organisms/SellingDetailArea.vue'
export default {
  components: {
    SellingDetailArea,
  },
  data() {
    return {
      dataTableQuarter: {
        data: [],
      },
      dataTableTahun: {
        data: [],
      },
    }
  },
  mounted() {
    this.getdataTableQuarter()
    this.getdataTableTahun()
  },
  methods: {
    getdataTableQuarter() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/sem`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
    getdataTableTahun() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/quarter`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableTahun = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>