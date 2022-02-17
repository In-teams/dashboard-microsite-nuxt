<template>
  <div>
    <!-- <Loading
      class="fixed min-h-full w-full bg-fixed bg-purple-900 z-50 top-0"
      v-if="loading"
    /> -->
    <Navbar :nav-title="'DATA PENJUALAN PER WILAYAH'" />
    <div class="px-2 bg-gray-100">
      <div class="mt-20 mb-8"></div>
      <Tabs @click="addParams" @getTab="getTab" :tabs="tabs">
        <template #activeTab_0>
          <TabSellingData
            v-if="$route.query.value == 'Wilayah'"
            :hirarki="'hr'"
          />
        </template>
        <template #activeTab_1>
          <TabSellingData
            v-if="$route.query.value == 'Region'"
            :hirarki="'region'"
          />
        </template>

        <template #activeTab_2>
          <TabSellingData
            v-if="$route.query.value == 'Area'"
            :hirarki="'area'"
          />

          <pagination
            class="mb-4"
            :records="5"
            v-model="page"
            :per-page="1"
            @paginate="myCallback"
          >
          </pagination>
        </template>
        <template #activeTab_3>
          <TabSellingData
            v-if="$route.query.value == 'Distributor'"
            :hirarki="'distributor'"
          />

          <pagination
            class="mb-4"
            :records="5"
            v-model="page"
            :per-page="1"
            @paginate="myCallback"
          >
          </pagination>
        </template>
        <template #activeTab_4>
          <TabSellingData
            v-if="$route.query.value == 'Outlet'"
            :hirarki="'outlet'"
            :keys="values"
            @sendTable="sendTable"
          />

          <pagination
            class="mb-4"
            v-model="page"
            :records="5"
            :per-page="1"
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
import Pagination from 'vue-pagination-2'
// import Loading from '../molecules/Loading.vue'
import BottomNav from '../molecules/BottomNav.vue'
// import TableSellingData from '../molecules/TableSellingData.vue'
import TabSellingData from '../molecules/TabSellingData.vue'
import Tabs from '../molecules/Tabs.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    TabSellingData,
    // Loading,
    Navbar,
    // TableSellingData,
    Tabs,
    BottomNav,
    Pagination,
  },

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
      getTables: [],
    }
  },

  methods: {
    getTab(value) {
      this.tabCategories = value
    },

    sendTable(value) {
      this.getTables = value
    },

    setData() {
      this.dataWilayah = this.dataTableWilayah
      this.dataRegion = this.dataTableRegion
      this.dataArea = this.dataTableArea
      this.dataDistributor = this.dataTableDistributor
      this.dataOutlet = this.dataTableOutlet
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
      if (this.$route.query.value === 'Outlet') {
        this.values = input
      }

      if (input.length < 0) {
        return []
      }
      if (this.$route.query.value === 'Outlet') {
        return this.getTables.filter((outlet) => {
          return outlet.outlet_name
            .toLowerCase()
            .startsWith(input.toLowerCase())
        })
      }
    },

    sendKeyword() {
      this.$router.push({
        path: `${this.$route.fullPath}`,
        query: { keyword: this.values },
      })
    },
  },
  watch: {
    dataTableWilayah: 'setData',
    dataTableRegion: 'setData',
    dataTableArea: 'setData',
    dataTableDistributor: 'setData',
    dataOutlet: ['setData'],
    '$route.query.page'() {
      window.location.reload()
    },
    '$route.query.keyword'() {
      window.location.reload()
    },
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
