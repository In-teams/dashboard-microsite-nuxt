<template>
  <div>
    <RingkasanPenjualanDistributor
      :data-pencapaian="dataTablePencapaian"
      :data-distributor="dataTableDistributor"
      :data-outlet="dataTableOutlet"
      :data-table-registrasi="dataTableRegistrasi"
    />
  </div>
</template>

<script>
import axios from 'axios'
import RingkasanPenjualanDistributor from '../organisms/RingkasanPenjualanDistributor.vue'
export default {
  components: {
    RingkasanPenjualanDistributor,
  },
  data() {
    return {
      dataTableRingkasan: {
        data: [],
      },
      dataTablePencapaian: {
        data: [],
      },
      dataTableRegion: {
        data: [],
      },
      dataTableDistributor: {
        data: [],
      },
      dataTableArea: {
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
    this.getTablePencapaian()
    this.getTableDistributor()
    this.getTableOutlet()
    this.getdataTableRegistrasi()
  },
  methods: {
    async getTablePencapaian() {
      const result = await this.$axios.$get('api/v2/sales/summary/achieve', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          distributor_id: this.$route.params.name,
        },
      })
      this.dataTablePencapaian = result.data
      return result
    },
    async getTableDistributor() {
      const result = await this.$axios.$get(
        'api/v2/sales/summary/distributor',
        {
          headers: {
            Authorization: localStorage.token2,
          },
          params: {
            distributor_id: this.$route.params.name,
          },
        }
      )
      this.dataTableDistributor = result.data.desc
      return result
    },
    async getTableOutlet() {
      const result = await this.$axios.$get('api/v2/sales/summary/outlet', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          distributor_id: this.$route.params.name,
        },
      })
      this.dataTableOutlet = result.data.desc
      return result
    },
    async getdataTableRegistrasi() {
      const result = await axios.get('/api/v1/registration/summary/level', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          distributor_id: this.$route.params.name,
        },
      })
      this.dataTableRegistrasi = result.data.data
      return result
    },
  },
}
</script>

<style>
</style>