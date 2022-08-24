<template>
  <div class="py-72 xl:py-80 mx-auto h-screen">
    <div class="px-2.5 py-3 rounded-t-2xl p-20 shadow-custom bg-gray-100">
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
.shadow-custom {
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.8));
}
</style>