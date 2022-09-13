<template>
  <div class="bg-white rounded-md pb-4">
    <div class="p-3">
      <h1 class="text-lg font-medium">Detail Pengiriman</h1>
      <div class="mt-2 border-b"></div>
      <div class="mt-2">
        <h2 class="text-base font-medium">{{ this.$route.params.id }}</h2>
        <slot></slot>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1 class="text-sm text-gray-400">No Hp</h1>
            <p class="font-medium mt-1">{{ no_wa }}</p>
          </div>

          <div>
            <h1 class="text-sm text-gray-400">Status</h1>
            <Badge color="bg-yellow-300" :title="title" />
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
        <div>
          <h1 class="text-sm text-gray-400 pt-3">Nama Penerima</h1>
          <p class="text-sm mt-1 font-semibold text-black">
            {{ nama_penerima }}
          </p>
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
  props: ['title', 'no_wa', 'nama_penerima', 'tgl_terima', 'tgl_kirim'],
  components: {
    Badge,
  },
}
</script>