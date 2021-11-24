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
    />
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  methods: {
    async getdataTableNational() {
      const result = await axios.get(
        `http://api.apolo.inosis.id/api/v1/sales`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        }
      )
      this.dataTableNational = result.data.data
      return result
      // .then((res) => (this.dataTableNational = res.data.data))
      // .catch((err) => console.log(err))
    },
    getdataTableCluster() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/achieve`, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableCluster = res.data.data))
        .catch((err) => console.log(err))
    },
    getdataTableRegion() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/region`, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableRegion = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getdataTableWilayah() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/hr`, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableWilayah = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getdataTableArea() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/area`, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableArea = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getdataTableDistributor() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/distributor`, {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableDistributor = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getdataTableOutlet() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
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