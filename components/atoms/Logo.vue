<template>
  <img class="mx-auto w-4/7 sm:w-1/7 xl:w-3/7" :src="src" alt="logo-mvg" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>