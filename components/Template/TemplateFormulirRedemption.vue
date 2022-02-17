<template>
  <div>
    <FormulirRedemption :data-redeem="dataRedeem" />
  </div>
</template>

<script>
import axios from 'axios'
import FormulirRedemption from '../organisms/FormulirRedemption'
export default {
  data() {
    return {
      dataRedeem: [],
    }
  },
  components: {
    FormulirRedemption,
  },
  mounted() {
    this.getDataRedeem()
  },

  methods: {
    getDataRedeem() {
      axios
        .get(
          `https://api.apolo.inosis.id/api/v1/redeem/file/${this.$route.params.name}`,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMyOTc2NTE1fQ.KJ2C1EID7UvhQYYNmh8UN-CshXC_qaNoo9_0nyLGbaU',
            },
          }
        )
        .then((res) => (this.dataRedeem = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>