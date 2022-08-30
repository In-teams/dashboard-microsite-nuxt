<template>
  <FormulirRegistrasi :data-registrasi="dataRegistrasi" />
</template>

<script>
import axios from 'axios'
import FormulirRegistrasi from '../organisms/FormulirRegistrasi.vue'
export default {
  components: {
    FormulirRegistrasi,
  },
  data() {
    return {
      dataRegistrasi: {
        data: [],
      },
    }
  },
  mounted() {
    this.getDataRegistrasi()
  },
  computed: {
    encodeUrl() {
      const id = decodeURIComponent(this.$route.params.name)
      const idDecode = encodeURIComponent(id)

      return idDecode
    },
  },
  methods: {
    getDataRegistrasi() {
      axios
        .get(`/api/v1/registration/file/${this.encodeUrl}`, {
          headers: {
            Authorization: localStorage.token2,
          },
        })
        .then((res) => (this.dataRegistrasi = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>