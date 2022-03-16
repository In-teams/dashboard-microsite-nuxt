<template>
  <div class="col-span-6">
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Cek Data Registrasi'"
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
      v-if="dataTitle == 'Transaksi Penukaran'"
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
    <div
      class="grid grid-cols-12 py-1.5 bg-white border-2 rounded-lg shadow-lg"
      v-if="dataTitle == 'Foto atau Upload Formulir Registrasi'"
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
      this.$router.push(`/data-registrasi/${this.$route.params.name}`)
    },
    jumpToTransaksi() {
      this.$router.push(`/data-transaksi/${this.$route.params.name}`)
    },
  },
}
</script>

<style>
</style>