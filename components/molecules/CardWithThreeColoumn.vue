<template>
  <div class="container py-1">
    <div class="flex justify-between border-2 gap-2.5 rounded-full shadow-sm">
      <div class="flex justify-between">
        <img class="w-8 h-4 px-2 self-center" :src="icons" />
        <p class="text-xs font-semibold self-center text-left">{{ title }}</p>
      </div>
      <div class="self-center"></div>
      <div class="bg-gray-300 rounded-full py-2 px-1 max-w-xs min-w-1/4">
        <p class="text-xs text-center font-bold">{{ points }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'points', 'icons'],
  data() {
    return {}
  },
}
</script>

<style>
</style>