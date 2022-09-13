<template>
  <div>
    <div
      v-if="this.$route.name == 'data-transaksi-id'"
      :class="`flex flex-row h-10 items-center bg-white fixed w-full ${styleCustom}`"
    >
      <div class="absolute px-2">
        <img
          @click="back"
          class="w-8 h-8"
          src="@/assets/image/left-arrow.png"
          alt=""
        />
      </div>
      <div class="flex justify-center xl:w-6/12 w-full">
        <h1 class="text-xl font-medium tracking-wide">{{ title }}</h1>
      </div>
    </div>
    <div
      v-else
      :class="`flex flex-row h-10 items-center fixed w-full ${styleCustom}`"
    >
      <div class="absolute">
        <img
          @click="back"
          class="w-8 h-8"
          src="@/assets/image/left-arrow.png"
          alt=""
        />
      </div>
      <div class="text-center mx-auto">
        <h1 class="text-xl font-medium tracking-wide">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'styleCustom'],
  name: 'HeaderGeneral',
  components: {},
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
