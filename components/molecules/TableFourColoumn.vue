<template>
  <div class="bg-white rounded-xl shadow-md">
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
    <div
      class="
        table-auto
        w-full
        mx-auto
        text-gray-800
        border
        rounded-b-lg
        border-gray-300
      "
    >
      <slot name="trow"> </slot>
    </div>
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