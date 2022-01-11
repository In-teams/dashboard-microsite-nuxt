<template>
  <div class="py-2">
    <div class="border-2 border-gray-400 rounded-xl">
      <img
        @click="$emit('popupImage')"
        class="object-cover rounded-xl h-full w-full"
        :src="img"
        alt=""
        srcset=""
      />
      <div class="border bg-purple-200 rounded-b-xl z-10 py-1">
        <div class="grid grid-cols-12">
          <div class="col-span-3 px-2 self-center">
            <img
              class="w-12"
              src="https://img.icons8.com/material-outlined/24/000000/camera--v2.png"
            />
          </div>
          <p class="col-span-9 self-center font-bold text-xs">
            {{ tanggalUpload }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tanggalUpload', 'img'],
  watch: {
    img(newVal, oldVal) {
      console.log('value changed from ' + oldVal + ' to ' + newVal)
    },
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>