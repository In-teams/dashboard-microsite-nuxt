<template>
  <div class="py-1">
    <div :class="styleHeader">
      <div class="max-w-md mx-auto py-2">
        <p class="text-center text-white font-bold text-base">
          {{ titleHeader }}
        </p>
      </div>

      <table class="w-full text-gray-800">
        <slot name="thead"></slot>
      </table>
    </div>
    <table
      class="
        table-auto
        w-full
        mx-auto
        text-gray-800
        border-b-2 border-r-2 border-l-2 border-gray-300
      "
    >
      <slot name="trow"> </slot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['titleHeader', 'styleHeader'],
}
</script>

<style>
</style>