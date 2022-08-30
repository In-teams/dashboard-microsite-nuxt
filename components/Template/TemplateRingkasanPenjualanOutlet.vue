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
    async getTableOutlet() {
      const result = await this.$axios.$get('api/v2/sales/summary/outlet', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          outlet_id: this.$route.params.name,
        },
      })
      this.dataTableOutlet = result.data.desc
      return result
    },
    async getTableQuarter() {
      const result = await this.$axios.$get('api/v2/sales/summary/sem', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          outlet_id: this.$route.params.name,
        },
      })
      this.dataTableQuarter = result.data
      return result
    },
    async getTableMonth() {
      const result = await this.$axios.$get('api/v2/sales/summary/quarter', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          outlet_id: this.$route.params.name,
        },
      })
      this.dataTableMonth = result.data
      return result
    },
    async getTablePoin() {
      const result = await axios.get('/api/v1/redeem/summary/month', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          outlet_id: this.$route.params.name,
        },
      })
      this.dataTablePoin = result.data.data
      return result
    },
    async getTablePoinQuarter() {
      const result = await axios.get('/api/v1/redeem/summary/quarter', {
        headers: {
          Authorization: localStorage.token2,
        },
        params: {
          outlet_id: this.$route.params.name,
        },
      })
      this.dataTablePoinQuarter = result.data.data
      return result
    },
  },
}
</script>

<style>
</style>