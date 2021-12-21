<template>
  <div>
    <RingkasanPenjualanDistributor
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
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/hr`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableRingkasan = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePencapaian() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/achieve`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTablePencapaian = res.data.data))
        .catch((err) => console.log(err))
    },
    getTableRegion() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/region`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableRegion = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableDistributor() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableDistributor = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableArea() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/area`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableArea = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getTableOutlet() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          params: {
            distributor_id: this.$route.params.name,
          },
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.desc))
        .catch((err) => console.log(err))
    },
    getdataTableRegistrasi() {
      axios
        .get(
          `http://api.apolo.inosis.id/api/v1/registration/summary/distributor`,
          {
            params: {
              sort: 'DESC',
              distributor_id: this.$route.params.name,
            },
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((res) => (this.dataTableRegistrasi = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>