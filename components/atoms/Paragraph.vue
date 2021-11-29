<template>
  <p :class="styleParagraph">
    {{ paragraph }}
  </p>
</template>

<script>
export default {
  props: ['styleParagraph', 'paragraph'],
}
</script>

<style>
</style>