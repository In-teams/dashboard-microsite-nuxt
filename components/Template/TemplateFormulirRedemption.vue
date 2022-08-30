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
          `/api/v1/redeem/file/${encodeURIComponent(this.$route.params.name)}`,
          {
            headers: {
              Authorization: localStorage.token2,
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