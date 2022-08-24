<template>
  <div>
    <RingkasanPenjualanRegion
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
import RingkasanPenjualanRegion from '../organisms/RingkasanPenjualanRegion.vue'
export default {
  components: {
    RingkasanPenjualanRegion,
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
    getTableRingkasan() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/hr`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableRingkasan = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePencapaian() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/achieve`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTablePencapaian = res.data.data))
        .catch((err) => console.log(err))
    },
    getTableRegion() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/region`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableRegion = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableDistributor() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableDistributor = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableArea() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/area`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableArea = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableOutlet() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableRegistrasi() {
      axios
        .get(`https://api.apolo.inosis.id/api/v1/registration/summary/level`, {
          params: {
            region_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataTableRegistrasi = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>