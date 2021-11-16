<template>
  <div>
    <RingkasanPenjualanArea
      :data-ringkasan-wilayah="dataTableRingkasan"
      :data-pencapaian="dataTablePencapaian"
      :data-region="dataTableRegion"
      :data-distributor="dataTableDistributor"
      :data-area="dataTableArea"
      :data-outlet="dataTableOutlet"
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
    }
  },
  mounted() {
    this.getTableRingkasan()
    this.getTablePencapaian()
    this.getTableRegion()
    this.getTableDistributor()
    this.getTableArea()
    this.getTableOutlet()
  },
  methods: {
    getTableRingkasan() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/hr`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableRingkasan = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePencapaian() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/achieve`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTablePencapaian = res.data.data))
        .catch((err) => console.log(err))
    },
    getTableRegion() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/region`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableRegion = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getTableDistributor() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableDistributor = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getTableArea() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/area`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableArea = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getTableOutlet() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          params: {
            area_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.asc))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>