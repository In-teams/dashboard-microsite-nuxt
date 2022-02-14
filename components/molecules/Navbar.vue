<template>
  <div
    class="block fixed mx-auto inset-x-0 top-0 z-10 bg-purple-900"
    style="min-width: 340px; max-width: 640px"
  >
    <div class="flex py-3 px-4">
      <a @click="to" class="mr-auto self-center">
        <img class="w-8" src="~/assets/image/left_arrow.svg" alt="" />
      </a>
      <div class="self-center mx-auto">
        <p class="text-center text-md text-white">{{ NavTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['NavTitle'],
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
</style>
