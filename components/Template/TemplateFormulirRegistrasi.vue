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
  methods: {
    getDataRegistrasi() {
      axios
        .get(
          `${process.env.BASE_URL}/registration/file/${this.$route.params.name}`,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJzdXBlciIsIm5hbWUiOm51bGwsInVzZXJfcHJvZmlsZSI6IiIsImxldmVsIjoiMSIsImVtYWlsIjpudWxsLCJzY29wZSI6bnVsbCwicGhvdG8iOm51bGwsInJlZ2lkIjpudWxsfSwiaWF0IjoxNjMyOTc2NTE1fQ.KJ2C1EID7UvhQYYNmh8UN-CshXC_qaNoo9_0nyLGbaU',
            },
          }
        )
        .then((res) => (this.dataRegistrasi = res.data.data))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
</style>