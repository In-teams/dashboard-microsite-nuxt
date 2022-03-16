<template>
  <div class="bg-white rounded-md pb-4">
    <div class="p-3">
      <h1 class="text-lg font-medium">Detail Pengiriman</h1>
      <div class="border border-gray-100 mt-2"></div>
      <div class="mt-3">
        <h2 class="text-base font-medium">{{ this.$route.params.outlet }}</h2>
        <slot></slot>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1 class="text-sm text-gray-400">Penerima</h1>
            <p class="font-medium mt-1" v-if="nama_penerima !== null">
              {{ nama_penerima }}
            </p>
            <p class="font-medium mt-1" v-if="nama_penerima == null">-</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Status</h1>
            <Badge color="bg-yellow-300" :title="title" />
          </div>
          <div>
            <h1 class="text-sm text-gray-400">No Hp</h1>
            <p class="font-medium mt-1">{{ no_wa }}</p>
          </div>
          <div class="col-span-2">
            <h1 class="text-sm text-gray-400">Alamat</h1>
            <p class="font-medium mt-1">
              {{ alamat }}
            </p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Provinsi</h1>
            <p class="font-medium mt-1">{{ provinsi }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Kabupaten</h1>
            <p class="font-medium mt-1">{{ kabupaten }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Kecamatan</h1>
            <p class="font-medium mt-1">{{ kecamatan }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Kelurahan</h1>
            <p class="font-medium mt-1">{{ kelurahan }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">RT/RW</h1>
            <p class="font-medium mt-1">{{ rt_rw }}</p>
          </div>
          <div>
            <h1 class="text-sm text-gray-400">Kode Pos</h1>
            <p class="font-medium mt-1">{{ kode_pos }}</p>
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
  props: [
    'title',
    'no_wa',
    'nama_penerima',

    'alamat',
    'provinsi',
    'kabupaten',
    'kecamatan',
    'kelurahan',
    'rt_rw',
    'kode_pos',
  ],
  components: {
    Badge,
  },
}
</script>

<style>
</style>