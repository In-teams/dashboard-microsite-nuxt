<template>
  <div class="flex flex-row overflow-x-scroll scroll-hidden">
    <div
      @click="sendStatus('All')"
      :class="`${status === 'All' ? 'border-b-2 border-yellow-300 ' : ''}mr-4`"
    >
      <p
        :class="`${
          status === 'All' ? 'font-medium ' : 'text-gray-500 '
        } text-base mt-5 mx-2`"
      >
        Semua
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filterProduct',
  props: ['onFunc', 'status'],
  methods: {
    sendStatus(value) {
      this.$emit('onFunc', value)
    },
  },
}
</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>