<template>
  <div
    :class="
      title !== 'Total Pencapaian'
        ? 'bg-blue-100 rounded-xl shadow-sm'
        : 'border-none'
    "
  >
    <div
      @click="isOpen = !isOpen"
      class="cursor-pointer text-left text-black font-bold"
    >
      <div
        class="flex justify-between"
        :class="title !== 'Total Pencapaian' ? '' : 'border-none'"
      >
        <div class="inline-block self-center px-2 py-2">
          <h3 class="text-xs self-center font-medium px-2">{{ pencapaian }}</h3>
          <h3 class="text-xs self-center font-medium px-2">{{ title }}</h3>
        </div>
        <div class="px-2 self-center">
          <img
            :class="isOpen == true ? 'rotate180' : ''"
            class="w-6 h-6"
            src="~/assets/image/down_arrow.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>

    <div
      v-if="border !== 'red'"
      :class="
        isOpen
          ? 'd-block bg-purple-200 shadow-md px-2.5 pb-2 py-2 mt-2 rounded-lg'
          : 'hidden'
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'pencapaian', 'border'],
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped>
.bg-blue-custom {
  background: linear-gradient(
    90deg,
    rgba(230, 246, 255, 0.8) 56.04%,
    rgba(255, 255, 255, 0) 112.89%
  );
}
.rotate180 {
  transform: rotate(180deg);
}
</style>