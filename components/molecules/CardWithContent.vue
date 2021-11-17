<template>
  <div class="py-72 mx-auto xl:w-full absolute h-screen w-screen">
    <div class="px-2 py-3 bg-gray-100 rounded-t-2xl p-20 lol">
      <div class="max-w-md mx-auto">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.lol {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
}
</style>