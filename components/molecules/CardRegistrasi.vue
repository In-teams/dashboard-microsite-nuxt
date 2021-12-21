<template>
  <div class="col-span-6">
    <div class="grid grid-cols-12 py-1 bg-white border-2 rounded-lg shadow-lg">
      <a class="col-span-3 px-1.5 self-center">
        <img class="w-6" :src="dataImg" />
      </a>

      <div class="col-span-9 self-center">
        <p class="text-xs">
          {{ dataTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataTitle', 'dataImg'],
}
</script>

<style>
</style>