<template>
  <div>
    <RingkasanPenjualanWilayah
      :data-ringkasan-wilayah="dataTableRingkasan"
      :data-pencapaian="dataTablePencapaian"
      :data-region="dataTableRegion"
      :data-distributor="dataTableDistributor"
      :data-area="dataTableArea"
      :data-outlet="dataTableOutlet"
      :data-table-registrasi="dataTableRegistrasi"
    />
  </div>
</template>

<script>
import axios from 'axios'
import RingkasanPenjualanWilayah from '../organisms/RingkasanPenjualanWilayah.vue'
export default {
  components: {
    RingkasanPenjualanWilayah,
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
    this.getTableRingkasan()
    this.getTablePencapaian()
    this.getTableRegion()
    this.getTableDistributor()
    this.getTableArea()
    this.getTableOutlet()
    this.getdataTableRegistrasi()
  },
  methods: {
    async getTableRingkasan() {
      const result = await this.$axios.$get('api/v2/sales/summary/hr', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          wilayah_id: this.$route.params.name,
        },
      })
      this.dataTableRingkasan = result.data.desc
      return result
    },
    async getTablePencapaian() {
      const result = await this.$axios.$get('api/v2/sales/summary/achieve', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          wilayah_id: this.$route.params.name,
        },
      })
      this.dataTablePencapaian = result.data
      return result
    },
    async getTableRegion() {
      const result = await this.$axios.$get('api/v2/sales/summary/region', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          wilayah_id: this.$route.params.name,
        },
      })
      this.dataTableRegion = result.data.desc
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
            wilayah_id: this.$route.params.name,
          },
        }
      )
      this.dataTableDistributor = result.data.desc
      return result
    },
    async getTableArea() {
      const result = await this.$axios.$get('api/v2/sales/summary/area', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          wilayah_id: this.$route.params.name,
        },
      })
      this.dataTableArea = result.data.desc
      return result
    },
    async getTableOutlet() {
      const result = await this.$axios.$get('api/v2/sales/summary/outlet', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          wilayah_id: this.$route.params.name,
        },
      })
      this.dataTableOutlet = result.data.desc
      return result
    },
    async getdataTableRegistrasi() {
      const result = await axios.get(
        'https://api.apolo.inosis.id/api/v1/registration/summary/level',
        {
          headers: {
            Authorization: localStorage.token2,
          },
          params: {
            wilayah_id: this.$route.params.name,
          },
        }
      )
      this.dataTableRegistrasi = result.data.data
      return result
    },
  },
}
</script>

<style>
</style>