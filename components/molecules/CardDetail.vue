<template>
  <div
    class="bg-white flex flex-row items-center w-full mb-3 py-2 px-3"
    @click="onDetail"
  >
    <div class="px-3 py-4">
      <img class="w-20 h-14" :src="image" alt="" />
    </div>
    <div class="w-full">
      <h1 class="text-sm font-semibold w-40">{{ title }}</h1>
      <p class="text-xs">{{ caption }}</p>
      <div class="flex items-center mt-2 justify-between">
        <div>
          <Badge :title="status" />
          <div>
            <p
              v-if="isDetail"
              class="
                text-blue-800 text-xs
                ml-auto
                font-medium font-bold
                whitespace-nowrap
                py-2
              "
            >
              Detail Voucher
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../atoms/Badge.vue'
export default {
  props: [
    'title',
    'caption',
    'linkStatus',
    'linkDetail',
    'isDetail',
    'isLink',
    'image',
    'category',
    'typeEwallet',
    'item',
    'status',
  ],
  components: {
    Badge,
  },
  methods: {
    onDetail() {
      if (this.isLink === true && this.linkDetail) {
        this.$router.push(this.linkDetail)
      }
    },
  },
}
</script>

<style>
</style>