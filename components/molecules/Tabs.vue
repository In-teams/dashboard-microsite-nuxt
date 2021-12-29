<template>
  <div class="mx-auto">
    <ul
      v-if="
        this.$route.name == 'ringkasan-penjualan-distributor-name' ||
        this.$route.name == 'ringkasan-penjualan-area-name' ||
        this.$route.name == 'ringkasan-penjualan-outlet-name'
      "
      class="flex text-xs items-center my-2"
    >
      <a
        @click="$emit('click', tab.name)"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <li
          v-if="$route.path === '/penjualan-perwilayah'"
          class="cursor-pointer py-2 px-3 rounded-full transition"
          :class="
            $route.query.value === tab.name
              ? 'bg-purple-900 text-white '
              : ' bg-white text-gray-500'
          "
          @click="activeTab = index"
          v-text="tab.name"
        ></li>
        <li
          v-else
          class="cursor-pointer py-2 px-3 rounded-full transition"
          :class="
            activeTab === index
              ? 'bg-purple-900 text-white '
              : ' bg-white text-gray-500'
          "
          @click="activeTab = index"
          v-text="tab"
        ></li>
      </a>
    </ul>
    <ul v-else class="flex justify-evenly text-xs items-center my-2">
      <a
        @click="$emit('click', tab.name)"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <li
          v-if="$route.path === '/penjualan-perwilayah'"
          class="cursor-pointer py-2 px-3 rounded-full transition"
          :class="
            $route.query.value === tab.name
              ? 'bg-purple-900 text-white '
              : ' bg-white text-gray-500'
          "
          @click="activeTab = index"
          v-text="tab.name"
        ></li>
        <li
          v-else
          class="cursor-pointer py-2 px-3 rounded-full transition"
          :class="
            activeTab === index
              ? 'bg-purple-900 text-white '
              : ' bg-white text-gray-500'
          "
          @click="activeTab = index"
          v-text="tab"
        ></li>
      </a>
    </ul>
    <div v-if="$route.path === '/penjualan-perwilayah'">
      <div v-show="$route.query.value === 'Wilayah'">
        <slot name="activeTab_0"></slot>
      </div>
      <div v-show="$route.query.value === 'Region'">
        <slot name="activeTab_1"></slot>
      </div>
      <div v-show="$route.query.value === 'Area'">
        <slot name="activeTab_2"></slot>
      </div>
      <div v-show="$route.query.value === 'Distributor'">
        <slot name="activeTab_3"></slot>
      </div>
      <div v-show="$route.query.value === 'Outlet'">
        <slot name="activeTab_4"></slot>
      </div>
    </div>
    <div v-else>
      <div v-show="activeTab === 0">
        <slot name="activeTab_0"></slot>
      </div>
      <div v-show="activeTab === 1">
        <slot name="activeTab_1"></slot>
      </div>
      <div v-show="activeTab === 2">
        <slot name="activeTab_2"></slot>
      </div>
      <div v-show="activeTab === 3">
        <slot name="activeTab_3"></slot>
      </div>
      <div v-show="activeTab === 4">
        <slot name="activeTab_4"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs'],
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {
    getTab() {
      this.$emit('getTab', this.activeTab)
    },
  },
  watch: {
    activeTab: 'getTab',
  },
}
</script>

<style>
</style>