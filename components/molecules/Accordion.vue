<template>
  <div class="border-solid border-b-2">
    <div
      @click="isOpen = !isOpen"
      class="cursor-pointer text-center text-black font-bold"
    >
      <div
        class="flex justify-between"
        :class="isOpen == true ? 'border-b' : 'border-none'"
      >
        <h3 class="text-xs self-center font-medium px-2">{{ title }}</h3>
        <div class="flex justify-between">
          <h3>{{ pencapaian }}</h3>
          <img src="~/assets/image/down_arrow.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="p-2" :class="isOpen ? 'd-block' : 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'pencapaian'],
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style>
</style>