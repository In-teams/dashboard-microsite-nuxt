<template>
  <div>
    <SellingData
      :data-table-region="dataTableRegion"
      :data-table-wilayah="dataTableWilayah"
      :data-table-area="dataTableArea"
      :data-table-distributor="dataTableDistributor"
      :data-table-outlet="dataTableOutlet"
      :data-page="dataPage"
    />
    {{ this.search }}
  </div>
</template>

<script>
import axios from 'axios'
import SellingData from '../organisms/SellingData.vue'
export default {
  components: {
    SellingData,
  },
  data() {
    return {
      dataTableWilayah: {
        data: [],
      },
      dataTableRegion: {
        data: [],
      },
      dataTableArea: {
        data: [],
      },
      dataTableDistributor: {
        data: [],
      },
      dataTableOutlet: {
        data: [],
      },
      dataPage: {
        data: [],
      },
      queryRoute: this.$route.query.page,
      search: '',
    }
  },
  mounted() {
    this.getdataTableWilayah()
    this.getdataTableRegion()
    this.getdataTableArea()
    this.getdataTableDistributor()
    this.getdataTableOutlet()
    this.getPage()
  },
  methods: {
    getDataVal(val) {
      this.search = val
    },
    getdataTableWilayah() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/hr`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableWilayah = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableRegion() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/region`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableRegion = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableArea() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/area`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableArea = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableDistributor() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          params: {
            page: `${this.$route.query.page}`,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableDistributor = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getPage() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataPage = res.data.data.totalPage))
        .catch((err) => console.log(err))
    },
    getdataTableOutlet() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.desc))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>