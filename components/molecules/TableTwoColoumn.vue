<template>
  <div class="rounded-2xl mx-auto xl:w-full bg-white shadow-md">
    <slot name="tableTitle"></slot>
    <slot name="tableContent"></slot>

    <div
      class="grid grid-cols-3 gap-1 mx-auto text-center px-2 py-2"
      v-if="!isLoading"
    >
      <Title
        :style-title="'text-xxs text-gray-400 uppercase'"
        :title="'Poin Perolehan'"
      />
      <Title
        :style-title="'text-xxs text-gray-400 uppercase'"
        :title="'Penukaran Poin '"
      />
      <Title
        :style-title="'text-xxs text-gray-400 uppercase'"
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
      <Paragraph
        :style-paragraph="'text-sm font-bold'"
        :paragraph="sisaPoin"
        :class="parseInt(sisaPoin) <= 0 ? 'text-red-500' : 'text-black'"
      />
    </div>
    <slot name="buttonDetail"></slot>
    <slot name="table"></slot>
  </div>
</template>

<script>
import Paragraph from '../atoms/Paragraph.vue'
import Title from '../atoms/Title.vue'
export default {
  props: ['poinPerolehan', 'poinPenukaran', 'sisaPoin', 'isLoading'],
  components: {
    Title,
    Paragraph,
  },
}
</script>

<style>
</style>