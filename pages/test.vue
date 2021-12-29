<template>
  <div class="text-center">
    <button class="" @click="prevPage" :disabled="pageNumber <= 1">
      Previous
    </button>
    <button class="" @click="nextPage" :disabled="pageNumber >= posts.length">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: ['asdasd', 'asdasdasdasd', 'aa', 'bb'],
      isLoading: true,
      pageNumber: this.$route.query.page ? this.$route.query.page : 1,
      perPage: 6, // Jumlah artikel yang ditampilkan dalam satu halaman
    }
  },

  methods: {
    // Mengambil list artikel
    async fetchBlogs() {
      // if pada statement ini berfungi untuk menghilangkan screen flicker saat mengunjungi antar halaman
      if (this.posts.length <= 0) this.isLoading = true

      this.posts = await this.$content({ deep: true })
        .sortBy('publishedAt', 'desc')
        .skip((this.pageNumber - 1) * this.perPage)
        .limit(this.perPage)
        .fetch()

      this.isLoading = false
    },

    // Halaman sebelumnya
    prevPage() {
      this.pageNumber--
      this.configurePage()
    },

    // Halaman selanjutnya
    nextPage() {
      this.pageNumber++
      this.configurePage()
    },

    // Konfigurasi halaman
    configurePage() {
      this.$router.push({ query: { page: this.pageNumber } })
      this.fetchBlogs()
    },
  },

  mounted() {
    this.fetchBlogs()
  },
}
</script>