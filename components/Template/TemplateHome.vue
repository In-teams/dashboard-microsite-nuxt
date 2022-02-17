<template>
  <div>
    <Home
      :user-name="'Budi Setiawan'"
      :data-table-national="dataTableNational"
      :data-table-cluster="dataTableCluster"
      :data-table-region="dataTableRegion"
      :data-table-wilayah="dataTableWilayah"
      :data-table-area="dataTableArea"
      :data-table-distributor="dataTableDistributor"
      :data-table-outlet="dataTableOutlet"
      :data-table-registrasi="dataTableRegistrasi"
    />
  </div>
</template>

<script>
// import axios from 'axios'
import Home from '../organisms/Home.vue'

export default {
  components: {
    Home,
  },

  data() {
    return {
      dataTableNational: {
        data: null,
      },
      dataTableCluster: {
        data: [],
      },
      dataTableRegion: {
        data: [],
      },
      dataTableWilayah: {
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
      dataTableRegistrasi: {
        data: [],
      },
    }
  },
  mounted() {
    this.getdataTableNational()
    this.getdataTableCluster()
    this.getdataTableRegion()
    this.getdataTableWilayah()
    this.getdataTableArea()
    this.getdataTableDistributor()
    this.getdataTableOutlet()
    this.getdataTableRegistrasi()
  },
  methods: {
    async getdataTableNational() {
      const result = await this.$axios.$get(
        `/api/v1/sales`,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
      this.dataTableNational = result.data
      return result
      // .then((res) => (this.dataTableNational = res.data.data))
      // .catch((err) => console.log(err))
    },
    getdataTableCluster() {
      this.$axios.$get(`/api/v2/sales/summary/achieve`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableCluster = res.data))
        .catch((err) => console.log(err))
    },
    getdataTableRegion() {
      this.$axios.$get(`/api/v2/sales/summary/region`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableRegion = res.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableWilayah() {
      this.$axios.$get(`/api/v2/sales/summary/hr`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableWilayah = res.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableArea() {
      this.$axios.$get(`/api/v2/sales/summary/area`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableArea = res.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableDistributor() {
      this.$axios.$get(`/api/v2/sales/summary/distributor`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableDistributor = res.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableOutlet() {
      this.$axios.$get(`/api/v2/sales/summary/outlet`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableOutlet = res.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableRegistrasi() {
      this.$axios.$get(`/api/v1/registration/summary/level`, {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((res) => (this.dataTableRegistrasi = res.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>
