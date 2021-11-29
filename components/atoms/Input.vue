<template>
  <div>
    <div class="flex w-full flex-wrap items-stretch mb-3">
      <input
        type="text"
        placeholder="Ketik di sini untuk pencarian data"
        class="
          border-opacity-50
          px-3
          py-3
          placeholder-gray-400
          text-gray-600
          bg-white bg-white
          rounded-tl-lg rounded-bl-lg
          text-sm
          border border-gray-400
          outline-none
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
              border border-gray-400
              rounded-tr-lg rounded-br-lg
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