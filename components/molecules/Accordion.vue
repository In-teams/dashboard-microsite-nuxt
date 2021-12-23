<template>
  <div
    :class="
      title !== 'Total Pencapaian' && title !== 'Level 4'
        ? 'border-b'
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
        <h3 class="text-xs self-center font-medium px-2">{{ title }}</h3>
        <div class="flex justify-between">
          <h3>{{ pencapaian }}</h3>
          <img
            :class="isOpen == true ? 'rotate180' : ''"
            src="~/assets/image/down_arrow.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>

    <div
      v-if="border == 'red'"
      :class="isOpen ? 'd-block bg-red-200 px-4 pb-2 rounded-lg' : 'hidden'"
    >
      <slot></slot>
    </div>

    <div
      v-else
      :class="isOpen ? 'd-block bg-purple-200 px-4 pb-2 rounded-lg' : 'hidden'"
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
.rotate180 {
  transform: rotate(180deg);
}
</style>