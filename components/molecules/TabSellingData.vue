<template>
  <div>
    <div v-if="this.$route.query.value == 'Wilayah'">
      <Spinner v-if="isLoading" />
      <TableSellingData
        v-for="item in items"
        :key="item.wilayah"
        :title="item.wilayah"
        :title_id="item.wilayah_head_id"
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
      <Spinner v-if="isLoading" />
      <TableSellingData
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
      <Spinner v-if="isLoading" />
      <TableSellingData
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
      <div class="mt-20 mb-8">
        <input
          v-model="search"
          class="
            drop-shadow-2xl
            border-2 border-gray-200
            w-12
            h-12
            focus:outline-none focus:shadow-outline
            px-4
          "
          type="search"
          name=""
          placeholder=" Pencarian"
          id=""
        />
      </div>

      <Spinner v-if="isLoading" />
      <TableSellingData
        v-else
        v-for="item in items"
        :key="item.outlet_name"
        :title="item.outlet_name"
        :title_id="item.outlet_id"
        :target="item.targetconvert"
        :selisih="item.diffconvert"
        :aktual="item.aktualconvert"
        :pencapaian="item.percentage"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      keySearch: this.keys,
      items: [],
      isLoading: true,
    }
  },
  props: ['hirarki', 'keys'],
  mounted() {
    this.getdataTable()
  },

  computed: {
    filteredOutlet() {
      return this.items.filter((outlet) =>
        outlet.outlet_name.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },

  methods: {
    sendTable() {
      this.$emit('sendTable', this.items)
    },

    getdataTable() {
      const params = {
        page: `${this.$route.query.page}`,
        keyword: this.search,
      }
      if (this.search === '') {
        delete params.keyword
      } else if (this.search) {
        delete params.page
        this.isLoading = false
      }

      axios
        .get(
          `https://api.apolo.inosis.id/api/v1/sales/summary/${this.hirarki}`,
          {
            params,
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((res) => {
          this.items = res.data.data.desc
          this.isLoading = false
        })
        .catch(() => (this.loading = false))
    },
  },
  watch: {
    keySearch: ['getdataTable'],
    items: ['sendTable'],
    search: {
      handler({ search }) {
        this.getdataTable()
        this.isLoading = true
      },
    },
  },
}
</script>

<style>
</style>