<template>
  <div
    class="my-auto mx-auto max-h-screen h-screen w-screen bg-purple-900 fixed"
    style="min-width: 340px; max-width: 640px"
  >
    <Logo :src="'https://i.ibb.co/McF4mHy/Image-2x.png'" />
    <Title
      :style-title="'text-2xl italic text-yellow-300 font-normal text-center'"
      :title="'Loyalti Progam'"
    />
    <div class="pt-2">
      <Subtitle
        :style-bg-subtitle="'text-center bg-orange mx-auto w-60 xl:w-60 rounded-full '"
        :style-subtitle="'text-2xl italic text-white py-0.5 font-normal'"
        :subtitle="'Inosis Loyalti'"
      />
    </div>
  </div>
</template>

<script>
import Subtitle from '../atoms/Subtitle.vue'
import Logo from '../atoms/Logo.vue'
import Title from '../atoms/Title.vue'
export default {
  components: {
    Logo,
    Title,
    Subtitle,
  },
}
</script>

