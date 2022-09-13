<template>
  <div class="py-2 grid grid-cols-5 gap-5 px-4">
    <div v-for="(icon, i) in icons" :key="i">
      <a @click="linkTo(icon.link)">
        <Icon class="bg-blue-100 shadow-sm p-2 rounded-2xl" :src="icon.src" />
      </a>
      <div class="grid grid-cols-12 pt-2">
        <p class="col-span-12 text-center text-xs">{{ icon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import listIcon from '../../data/list-icon.json'
import Icon from '../atoms/icon.vue'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      icons: listIcon.list,
    }
  },
  methods: {
    linkTo(routeName) {
      this.$router.push(routeName)
    },
  },
}
</script>

<style scoped>
</style>