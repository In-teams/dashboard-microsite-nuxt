<template>
  <div>
    <RingkasanPenjualanArea
      :data-pencapaian="dataTablePencapaian"
      :data-distributor="dataTableDistributor"
      :data-area="dataTableArea"
      :data-outlet="dataTableOutlet"
      :data-table-registrasi="dataTableRegistrasi"
    />
  </div>
</template>

<script>
import axios from 'axios'
import RingkasanPenjualanArea from '../organisms/RingkasanPenjualanArea.vue'
export default {
  components: {
    RingkasanPenjualanArea,
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
    this.getTableArea()
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
          area_id: this.$route.params.name,
        },
      })
      this.dataTablePencapaian = result.data
    },

    async getTableDistributor() {
      const result = await this.$axios.$get(
        'api/v2/sales/summary/distributor',
        {
          headers: {
            Authorization: localStorage.token2,
          },
          params: {
            area_id: this.$route.params.name,
          },
        }
      )
      this.dataTableDistributor = result.data.desc
    },

    async getTableArea() {
      const result = await this.$axios.$get('api/v2/sales/summary/area', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          area_id: this.$route.params.name,
        },
      })
      this.dataTableArea = result.data.desc
    },

    async getTableOutlet() {
      const result = await this.$axios.$get('api/v2/sales/summary/outlet', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          area_id: this.$route.params.name,
        },
      })
      this.dataTableOutlet = result.data.desc
    },

    async getdataTableRegistrasi() {
      const result = await axios.get(
        'https://api.apolo.inosis.id/api/v1/registration/summary/level',
        {
          headers: {
            Authorization: localStorage.token2,
          },
          params: {
            area_id: this.$route.params.name,
          },
        }
      )
      this.dataTableRegistrasi = result.data.data
    },
  },
}
</script>

<style>
</style>