<template>
  <div>
    <Loading
      class="fixed min-h-full min-w-full bg-fixed bg-purple-900 z-50 top-0"
      v-if="loading"
    />
    <Navbar :nav-title="'DATA PENJUALAN PER WILAYAH'" />
    <div class="px-2 bg-gray-100">
      <div class="mt-20 mb-8">
        <autocomplete
          class="shadow-sm border py-2 rounded-md"
          style="z-index: -999"
          placeholder="Pencarian"
          :search="search"
        ></autocomplete>
        <!-- <button
          class="border bg-red-500 text-center"
          @click="sendKeyword"
          type=" button"
        >
          click
        </button> -->
      </div>

      <Tabs @click="addParams" @getTab="getTab" :tabs="tabs">
        <template #activeTab_0>
          <TableSellingData
            v-for="data in dataWilayah"
            :key="data.wilayah"
            :title="data.wilayah"
            :target="data.targetconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.percentage"
            :selisih="data.diffconvert"
            :title_id="data.head_region_id"
          />
        </template>
        <template #activeTab_1>
          <TableSellingData
            v-for="data in dataRegion"
            :key="data.region"
            :title="data.region"
            :title_id="data.region_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.percentage"
          />
        </template>

        <template #activeTab_2>
          <TableSellingData
            v-for="data in dataTableArea"
            :key="data.area_name"
            :title="data.area_name"
            :title_id="data.area_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.percentage"
          >
          </TableSellingData>
          <pagination
            class="mb-4"
            :records="+dataPageArea"
            v-model="page"
            :per-page="1"
            @paginate="myCallback"
          >
          </pagination>
        </template>
        <template #activeTab_3>
          <TableSellingData
            v-for="data in dataTableDistributor"
            :key="data.distributor"
            :title="data.distributor"
            :title_id="data.distributor_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.percentage"
          >
          </TableSellingData>
          <pagination
            class="mb-4"
            :records="+dataPage"
            v-model="page"
            :per-page="4"
            @paginate="myCallback"
          >
          </pagination>
        </template>
        <template #activeTab_4>
          <TableSellingData
            v-for="data in dataOutlet"
            :key="data.outlet_name"
            :title="data.outlet_name"
            :title_id="data.outlet_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.percentage"
          />
          <pagination
            class="mb-4"
            :records="+dataPageOutlet"
            v-model="page"
            :per-page="104"
            @paginate="myCallback"
          >
          </pagination>
        </template>
      </Tabs>
    </div>

    <BottomNav />
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import Pagination from 'vue-pagination-2'
import Loading from '../molecules/Loading.vue'
import BottomNav from '../molecules/BottomNav.vue'
import TableSellingData from '../molecules/TableSellingData.vue'
import Tabs from '../molecules/Tabs.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    Loading,
    Navbar,
    TableSellingData,
    Tabs,
    BottomNav,
    Pagination,
    Autocomplete,
  },
  props: [
    'dataTableWilayah',
    'dataTableRegion',
    'dataTableArea',
    'dataTableDistributor',
    'dataTableOutlet',
    'dataPage',
    'dataPageArea',
    'dataPageOutlet',
    'onFunc',
    'onFuncArea',
    'onFuncOutlet',
  ],

  data() {
    return {
      loading: true,
      page: +this.$route.query.page,
      tabs: [
        {
          name: 'Wilayah',
        },
        {
          name: 'Region',
        },
        {
          name: 'Area',
        },
        {
          name: 'Distributor',
        },

        {
          name: 'Outlet',
        },
      ],
      tabCategories: '',
      dataWilayah: [],
      dataRegion: [],
      dataArea: [],
      dataDistributor: [],
      dataOutlet: [],
      routes: this.$route.query.page,
      values: '',
      valuesArea: '',
      valuesOutlet: '',
    }
  },

  methods: {
    getTab(value) {
      this.tabCategories = value
    },

    setData() {
      this.dataWilayah = this.dataTableWilayah
      this.dataRegion = this.dataTableRegion
      this.dataArea = this.dataTableArea
      this.dataDistributor = this.dataTableDistributor
      this.dataOutlet = this.dataTableOutlet
    },

    async checkData() {
      this.loading = true
      const res = await this.dataTableOutlet
      if (res) {
        this.loading = false
      }
    },

    addParams(value) {
      this.$router.push({
        path: `${this.$route.path}`,
        query: { value, page: 1 },
      })
    },
    myCallback(page) {
      this.$router.push({
        path: `${this.$route.fullPath}`,
        query: { page },
      })
    },

    search(input) {
      if (this.$route.query.value === 'Distributor') {
        this.values = input
      } else if (this.$route.query.value === 'Area') {
        this.valuesArea = input
      } else if (this.$route.query.value === 'Outlet') {
        this.valuesOutlet = input
      }

      if (input.length < 0) {
        return []
      }
      if (this.$route.query.value === `Wilayah`) {
        this.dataWilayah = this.dataTableWilayah
      } else if (this.$route.query.value === `Region`) {
        this.dataRegion = this.dataTableRegion
      } else if (this.$route.query.value === `Area`) {
        this.dataArea = this.dataTableArea
      } else if (this.$route.query.value === `Distributor`) {
        this.dataDistributor = this.dataTableDistributor
      } else if (this.$route.query.value === `Outlet`) {
        this.dataOutlet = this.dataTableOutlet
      }
    },

    sendKeyword() {
      this.$router.push({
        path: `${this.$route.fullPath}`,
        query: { keyword: this.values },
      })
    },
    getKeyword() {
      this.$emit('onFunc', this.values)
    },
    getKeywordArea() {
      this.$emit('onFuncArea', this.valuesArea)
    },
    getKeywordOutlet() {
      this.$emit('onFuncOutlet', this.valuesOutlet)
    },
  },
  watch: {
    dataTableWilayah: 'setData',
    dataTableRegion: 'setData',
    dataTableArea: 'setData',
    dataTableDistributor: 'setData',
    dataTableOutlet: ['setData', 'checkData'],
    '$route.query.page'() {
      window.location.reload()
    },
    '$route.query.keyword'() {
      window.location.reload()
    },
    values: 'getKeyword',
    valuesArea: 'getKeywordArea',
    valuesOutlet: 'getKeywordOutlet',
  },
}
</script>

<style scoped>
/deep/ .VuePagination {
  @apply flex justify-center;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

/deep/ .autocomplete-input {
  @apply px-3;
}

/deep/ .autocomplete {
  @apply static;
}

/deep/ input {
  @apply w-full py-1;
}
/deep/ .VuePagination__count {
  @apply hidden;
}

/deep/ .autocomplete-input {
  outline: none;
}

/deep/ .autocomplete {
  position: unset !important;
}
</style>
