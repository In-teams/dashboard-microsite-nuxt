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
  props: ['title', 'no_wa'],
  components: {
    Badge,
  },
}
</script>