<template>
  <div>
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <input
        type="text"
        placeholder="Ketik di sini untuk pencarian data"
        class="
          z-30
          border-opacity-50
          px-3
          py-3
          placeholder-gray-400
          text-gray-600
          relative
          bg-white bg-white
          rounded-tl-lg
          text-sm
          border border-gray-400
          outline-none
          focus:ring-1 focus:ring-purple-900
          focus-within:text-balck
          w-7/7
          pl-10
        "
        v-model="keyword"
        @change="sendKeyword"
      />
      <div>
        <a class="py-5">
          <img
            class="
              bg-gray-300
              items-center
              justify-center
              w-11
              h-12
              py-3
              rounded-tr-lg
              active:bg-purple-900
            "
            fill="currentColor"
            src="image/search.svg"
            alt=""
            srcset=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    sendKeyword(event) {
      this.$emit('dataKeyword', event.target.value)
    },
  },
}
</script>

<style>
</style>