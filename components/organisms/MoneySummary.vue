<template>
  <div class="bg-white rounded-md pb-4">
    <div class="p-3">
      <h1 class="text-lg font-medium">Detail Pengiriman</h1>
      <div class="mt-2 border-b"></div>
      <div class="mt-2"></div>
      <div class="mt-3">
        <h2 class="text-base font-medium">{{ this.$route.params.id }}</h2>
        <slot></slot>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1 class="text-sm text-gray-400">Nama Rekening</h1>
            <p class="font-medium mt-1">{{ nama_rekening }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Status</h1>
            <Badge :title="title" />
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Nama Bank</h1>
            <p class="font-medium mt-1">{{ nama_bank }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">No. Rekening</h1>
            <p class="font-medium mt-1">{{ nomor_rekening }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">No. Refrensi</h1>
            <p class="font-medium mt-1">{{ nama_penerima }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Tanggal Kirim</h1>
            <p class="font-medium mt-1">{{ tgl_kirim }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Tanggal Terima</h1>
            <p class="font-medium mt-1">{{ tgl_terima }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../atoms/Badge.vue'
export default {
  data() {
    return {}
  },
  components: {
    Badge,
  },
  props: [
    'title',
    'nomor_rekening',
    'nama_bank',
    'nama_rekening',
    'nama_penerima',
    'tgl_kirim',
    'tgl_terima',
  ],
  methods: {},
}
</script>

<style scoped>
.nulls {
  content: '-';
}
</style>