<template>
  <SellingDetailRegion
    :data-table-quarter="dataTableQuarter"
    :data-table-tahun="dataTableTahun"
  />
</template>

<script>
import axios from 'axios'
import SellingDetailRegion from '../organisms/SellingDetailRegion.vue'
export default {
  components: {
    SellingDetailRegion,
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
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/sem`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
    getdataTableTahun() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/quarter`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
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