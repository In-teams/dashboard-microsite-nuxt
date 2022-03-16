<template>
  <div>
    <p
      class="bg-red-400 rounded-lg font-bold w-40 text-center py-1"
      v-if="title == null"
    >
      -
    </p>
    <p
      :class="
        title.status_terima == 'TELAH DITERIMA'
          ? 'bg-green-300 font-bold text-base text-white rounded-lg w-40 text-center py-1'
          : '' || title.status_terima == 'PROSES PENGIRIMAN'
          ? 'bg-yellow-300 font-bold text-base text-white rounded-lg w-40 text-center py-1'
          : ''
      "
      v-else
    >
      {{
        title.status_terima.charAt(0).toUpperCase() +
        title.status_terima.slice(1).toLowerCase()
      }}
    </p>
  </div>
</template>
<script>
export default {
  props: ['title', 'color'],
  name: 'Badge',
}
</script>
