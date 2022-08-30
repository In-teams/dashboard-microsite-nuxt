<template>
  <div class="col-span-6">
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Cek Data Registrasi'"
      @click="jumpToDataRegistrasi"
    >
      <a class="col-span-3 px-2 self-center">
        <img class="w-5" :src="dataImg" />
      </a>

      <div class="col-span-9 self-center">
        <p class="text-xs">
          {{ dataTitle }}
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Transaksi Penukaran'"
      @click="jumpToTransaksiPenukaran"
    >
      <a class="col-span-3 px-2 self-center">
        <img class="w-5" :src="dataImg" />
      </a>

      <div class="col-span-9 self-center">
        <p class="text-xs">
          {{ dataTitle }}
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Foto atau Upload Formulir Registrasi'"
      @click="jumpToRegistrasi"
    >
      <a class="col-span-3 px-2 self-center">
        <img class="w-5" :src="dataImg" />
      </a>

      <div class="col-span-9 self-center">
        <p class="text-xs">
          {{ dataTitle }}
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Foto atau Upload Formulir Redemption'"
      @click="jumpToTransaksi"
    >
      <a class="col-span-3 px-2 self-center">
        <img class="w-5" :src="dataImg" />
      </a>

      <div class="col-span-9 self-center">
        <p class="text-xs">
          {{ dataTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataTitle', 'dataImg'],
  methods: {
    jumpToRegistrasi() {
      const id = encodeURIComponent(this.$route.params.name)
      if (id) {
        this.$router.push(`/formulir-registrasi/${id}`)
      } else {
        console.log('error')
      }
    },
    jumpToTransaksi() {
      const id = encodeURIComponent(this.$route.params.name)
      if (id) {
        this.$router.push(`/formulir-redemption/${id}`)
      } else {
        console.log('error')
      }
    },
    jumpToTransaksiPenukaran() {
      const id = encodeURIComponent(this.$route.params.name)
      if (id) {
        this.$router.push(`/data-transaksi/${id}`)
      } else {
        console.log('error')
      }
    },
    jumpToDataRegistrasi() {
      const id = encodeURIComponent(this.$route.params.name)
      if (id) {
        this.$router.push(`/data-registrasi/${id}`)
      } else {
        console.log('error')
      }
    },
  },
}
</script>

<style>
</style>