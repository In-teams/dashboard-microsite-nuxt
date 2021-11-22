<template>
  <div class="py-2 mx-auto xl:w-full">
    <slot name="tableTitle"></slot>
    <slot name="tableContent"></slot>
    <div
      class="
        grid grid-cols-3
        gap-1
        mx-auto
        text-center
        px-2
        border-r-2 border-l-2
        py-2
      "
    >
      <Title
        :style-title="'text-xs text-gray-400 font-bold'"
        :title="'Poin Perolehan'"
      />
      <Title
        :style-title="'text-xs text-gray-400 font-bold'"
        :title="'Penukaran Poin '"
      />
      <Title
        :style-title="'text-xs text-gray-400 font-bold'"
        :title="'Sisa Poin'"
      />
      <Paragraph
        :style-paragraph="'text-sm font-bold'"
        :paragraph="poinPerolehan"
      />
      <Paragraph
        :style-paragraph="'text-sm font-bold'"
        :paragraph="poinPenukaran"
      />
      <Paragraph :style-paragraph="'text-sm font-bold'" :paragraph="sisaPoin" />
    </div>
    <slot name="buttonDetail"></slot>
  </div>
</template>

<script>
import Paragraph from '../atoms/Paragraph.vue'
import Title from '../atoms/Title.vue'
export default {
  props: ['poinPerolehan', 'poinPenukaran', 'sisaPoin'],
  components: {
    Title,
    Paragraph,
  },
}
</script>

<style>
</style>