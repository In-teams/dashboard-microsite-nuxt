<template>
  <div>
    <RingkasanPenjualanOutlet
      :data-outlet="dataTableOutlet"
      :data-quarter="dataTableQuarter"
      :data-month="dataTableMonth"
      :data-poin="dataTablePoin"
      :data-poin-quarter="dataTablePoinQuarter"
    />
  </div>
</template>

<script>
import axios from 'axios'
import RingkasanPenjualanOutlet from '../organisms/RingkasanPenjualanOutlet.vue'
export default {
  components: {
    RingkasanPenjualanOutlet,
  },
  data() {
    return {
      dataTableOutlet: {
        data: [],
      },
      dataTableQuarter: {
        data: [],
      },
      dataTableMonth: {
        data: [],
      },
      dataTablePoin: {
        data: [],
      },
      dataTablePoinQuarter: {
        data: [],
      },
    }
  },
  mounted() {
    this.getTableOutlet()
    this.getTableQuarter()
    this.getTableMonth()
    this.getTablePoin()
    this.getTablePoinQuarter()
  },
  methods: {
    getTableOutlet() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/outlet`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableOutlet = res.data.data.asc))
        .catch((err) => console.log(err))
    },
    getTableQuarter() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/sem`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
    getTableMonth() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/sales/summary/quarter`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTableMonth = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePoin() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/redeem/summary/month`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTablePoin = res.data.data))
        .catch((err) => console.log(err))
    },
    getTablePoinQuarter() {
      axios
        .get(`http://api.apolo.inosis.id/api/v1/redeem/summary/quarter`, {
          params: {
            outlet_id: this.$route.params.name,
          },
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMzMDcyNTA0fQ.C7dt8r4uYaJCaoXmi1hZpSMa3Zs2qyczWn8mvuviRR8',
          },
        })
        .then((res) => (this.dataTablePoinQuarter = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>