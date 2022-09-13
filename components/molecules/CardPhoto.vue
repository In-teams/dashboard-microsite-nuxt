<template>
  <div class="py-2">
    <div
      class="border border-gray-200 rounded-xl"
      v-if="extensionFile !== 'pdf'"
    >
      <img
        @click="$emit('popupImage')"
        class="object-contain rounded-tl-xl rounded-tr-xl h-full w-full"
        :src="img"
        alt=""
        srcset=""
      />

      <div class="bg-purple-200 rounded-b-xl z-10 py-1">
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
    <div v-else>
      <div class="max-w-full">
        {{ file }}
        <div class="pb-4 pt-2">
          <a
            class="
              border border-indigo-500
              bg-indigo-500
              text-white
              whitespace-nowrap
              rounded-md
              px-4
              py-2
              text-sm
              font-medium
              hover:bg-indigo-600
              focus:outline-none
            "
            :href="`${img}?#view=fitH`"
            download
          >
            Klik untuk mendownload PDF</a
          >
        </div>

        <Spinner v-if="delay == false" />

        <iframe
          v-if="delay == true"
          :src="linkImg"
          style="width: 350px; height: 500px"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../atoms/Spinner.vue'
export default {
  data() {
    return {
      delay: false,
    }
  },

  components: {
    Spinner,
  },

  mounted() {
    this.setTimer()
  },

  computed: {
    linkImg() {
      return `https://drive.google.com/viewer?url=${this.img}&embedded=true`
    },
    showImg() {
      return this.setTimer
    },
  },

  _methods: {
    async setTimer() {
      await setTimeout(() => {
        this.delay = true
      }, 3000)
      return this.linkImg
    },
  },
  get methods() {
    return this._methods
  },
  set methods(value) {
    this._methods = value
  },

  props: ['tanggalUpload', 'img', 'extensionFile', 'file'],

  watch: {
    img(newVal, oldVal) {
      console.log('value changed from ' + oldVal + ' to ' + newVal)
    },
  },
}
</script>

<style scoped>
</style>