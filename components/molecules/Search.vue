<template>
  <div class="mt-14">
    <Input class="py-2" @dataKeyword="keyword"> </Input>
  </div>
</template>

<script>
import Input from '../atoms/Input.vue'
export default {
  components: { Input },
  methods: {
    keyword(value) {
      this.$emit('getKeyword', value)
    },
  },
}
</script>

<style>
</style>