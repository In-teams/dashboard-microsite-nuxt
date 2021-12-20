<template>
  <div class="">
    <div
      v-if="
        this.$route.name == 'home-name' ||
        this.$route.name == 'ringkasan-penjualan-distributor-name' ||
        this.$route.name == 'ringkasan-penjualan-area-name' ||
        this.$route.name == 'ringkasan-penjualan-region-name' ||
        this.$route.name == 'ringkasan-penjualan-wilayah-name' ||
        this.$route.name == 'ringkasan-penjualan-outlet-name'
      "
      :class="
        this.title == 'Progres Registrasi' ||
        this.title == 'Pencapaian' ||
        this.borderNone == false
          ? 'border-none'
          : ' '
      "
      class="block justify-between border-b"
    >
      <div class="">
        <div class="flex justify-between py-3">
          <div class="flex">
            <img class="w-6 h-6 self-center" :src="icons" />
            <p class="text-xs font-semibold px-1.5 self-center text-left">
              {{ title }}
            </p>
          </div>
          <div class="self-center">
            <p
              :class="
                parseInt(points) < 0 ? 'text-red-500' : 'text-black font-bold'
              "
              class="text-xs text-center font-bold pl-8 whitespace-nowrap"
            >
              {{ points }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="block justify-between py-2">
      <div class="">
        <div class="flex justify-between">
          <div class="flex justify-evenly">
            <img class="w-8 h-6 self-center pr-2" :src="icons" />
            <p class="text-xs font-semibold self-center text-left">
              {{ title }}
            </p>
          </div>
          <div class="self-center">
            <p
              :class="parseInt(points) < 0 ? 'text-red-500' : 'text-black'"
              class="text-xs text-center font-bold pl-8"
            >
              {{ points }}
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="col-span-6 bg-blue-100 rounded-full py-1.5"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'points', 'icons', 'borderNone'],
  data() {
    return {}
  },
}
</script>

<style>
</style>