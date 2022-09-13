<template>
  <div class="mb-4">
    <div v-if="this.$route.query.value == 'Wilayah'">
      <Spinner v-if="isLoading" />
      <TableSellingData
        v-for="item in items"
        :key="item.wilayah"
        :title="item.wilayah"
        :title_id="item.head_region_id"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
    <div v-if="this.$route.query.value == 'Region'">
      <Spinner v-if="isLoading" />
      <TableSellingData
        v-for="item in items"
        :key="item.region_name"
        :title="item.region_name"
        :title_id="item.region_id"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
    <div v-if="this.$route.query.value == 'Area'">
      <div class="mt-6 mb-8">
        <input
          v-model="search"
          class="
            drop-shadow-sm
            border-2 border-gray-200
            w-12
            h-12
            focus:outline-none focus:shadow-outline
            px-4
          "
          type="search"
          placeholder=" Pencarian"
        />
      </div>
      <Spinner v-if="isLoading" />
      <TableSellingData
        v-else
        v-for="item in items"
        :key="item.area_name"
        :title="item.area_name"
        :title_id="item.area_id"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
    <div v-if="this.$route.query.value == 'Distributor'">
      <div class="mt-6 mb-8">
        <input
          v-model="search"
          class="
            drop-shadow-sm
            border-2 border-gray-200
            w-12
            h-12
            focus:outline-none focus:shadow-outline
            px-4
          "
          type="search"
          placeholder=" Pencarian"
        />
      </div>
      <Spinner v-if="isLoading" />
      <TableSellingData
        v-else
        v-for="item in items"
        :key="item.distributor_name"
        :title="item.distributor_name"
        :title_id="item.distributor_id"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
    <div v-if="this.$route.query.value == 'Outlet'">
      <div class="mt-6 mb-4">
        <input
          v-model="search"
          class="
            drop-shadow-sm
            border-2 border-gray-200
            w-12
            h-12
            focus:outline-none focus:shadow-outline
            px-4
          "
          type="search"
          placeholder=" Pencarian"
        />
      </div>

      <Spinner v-if="isLoading" />
      <TableSellingData
        v-else
        v-for="(item, index) in items"
        :key="index"
        :title="item.outlet_name"
        :title_id="`${encodeURIComponent(item.outlet_id)}`"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
  </div>
</template>

<script>
import Spinner from '../atoms/Spinner'
import TableSellingData from '../molecules/TableSellingData.vue'

export default {
  components: {
    TableSellingData,
    Spinner,
  },

  data() {
    return {
      search: '',
      items: [],
      isLoading: true,
      awaitSearch: false,
    }
  },
  props: ['hirarki', 'keys'],
  mounted() {
    this.getdataTable()
  },

  computed: {
    // filteredOutlet() {
    //   return this.items.filter((outlet) =>
    //     outlet.outlet_name.toLowerCase().includes(this.search.toLowerCase())
    //   )
    // },
  },

  methods: {
    getdataTable() {
      const params = {
        page: `${this.$route.query.page}`,
        keyword: this.search,
      }
      if (this.search === '') {
        delete params.keyword
      } else if (this.search) {
        delete params.page
        this.isLoading = true
      }

      this.$axios
        .$get(`/api/v2/sales/summary/${this.hirarki}`, {
          params,
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((res) => {
          this.isLoading = false
          this.items = res.data.desc
        })
        .catch(() => (this.loading = false))
    },
  },
  watch: {
    search: {
      handler() {
        if (!this.awaitSearch) {
          setTimeout(() => {
            this.awaitSearch = false
            this.isLoading = true
            this.getdataTable()
          }, 2000)
        }
        this.awaitSearch = true
      },
    },
  },
}
</script>

<style>
</style>
