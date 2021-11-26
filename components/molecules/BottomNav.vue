<template>
  <div class="w-full h-16">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs " class="flex">
        <a
          @click="to"
          class="
            w-full
            focus:text-teal-500
            hover:text-teal-500
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <div class="mx-auto flex justify-center">
            <img src="image/Home_fill.png" alt="" srcset="" />
          </div>
          <span class="tab tab-home block text-xs">Home</span>
        </a>

        <a
          href="#"
          class="
            w-full
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
            click-pointer
          "
        >
          <div class="flex justify-center">
            <img src="image/Whatsapp.png" alt="" srcset="" />
          </div>
          <span class="tab tab-kategori block text-xs">Whatsapp</span>
        </a>

        <a
          @click="logout()"
          href="#"
          class="
            w-full
            focus:text-teal-500
            hover:text-teal-500
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <div class="flex justify-center">
            <img src="image/Sign_out.png" alt="" srcset="" />
          </div>
          <span class="tab tab-account block text-xs">Log Out</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.push('/home')
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
#bottom-navigation {
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.4));
}
</style>