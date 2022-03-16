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
      const result = await this.$axios.$get(`/api/v1/sales`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      this.dataTableNational = result.data
      return result
    },
    async getdataTableCluster() {
      const result = await this.$axios.$get(`/api/v2/sales/summary/achieve`, {
        headers: {
          Authorization: localStorage.token2,
        },
      })
      this.dataTableCluster = result.data
      return result
    },
    async getdataTableRegion() {
      const result = await this.$axios.$get(`/api/v2/sales/summary/region`, {
        headers: {
          Authorization: localStorage.token2,
        },
      })
      this.dataTableRegion = result.data.desc
      return result
    },
    async getdataTableWilayah() {
      const result = await this.$axios.$get(`/api/v2/sales/summary/hr`, {
        headers: {
          Authorization: localStorage.token2,
        },
      })
      this.dataTableWilayah = result.data.desc
      return result
    },
    async getdataTableArea() {
      const result = await this.$axios.$get(`/api/v2/sales/summary/area`, {
        headers: {
          Authorization: localStorage.token2,
        },
      })
      this.dataTableArea = result.data.desc
      return result
    },
    async getdataTableDistributor() {
      const result = await this.$axios.$get(
        `/api/v2/sales/summary/distributor`,
        {
          headers: {
            Authorization: localStorage.token2,
          },
        }
      )
      this.dataTableDistributor = result.data.desc
      return result
    },
    async getdataTableOutlet() {
      const result = await this.$axios.$get(`/api/v2/sales/summary/outlet`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      this.dataTableOutlet = result.data.desc
      return result
    },
    async getdataTableRegistrasi() {
      const result = await this.$axios.$get(
        `/api/v1/registration/summary/level`,
        {
          headers: {
            Authorization: localStorage.token2,
          },
        }
      )
      this.dataTableRegistrasi = result.data
      return result
    },
  },
}
</script>

<style>
</style>
