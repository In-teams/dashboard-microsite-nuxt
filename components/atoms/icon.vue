<template>
  <div class="">
    <img class="mx-auto h-7" :src="src" />
  </div>
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