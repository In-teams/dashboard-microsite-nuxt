<template>
  <div>
    <Navbar :nav-title="'DATA PENJUALAN PER WILAYAH'" />
    <div class="px-2">
      <Search @getKeyword="getKeyword" />

      <Tabs
        @click="addParams"
        @getTab="getTab"
        url="wilayah-detail"
        :tabs="tabs"
      >
        <template #activeTab_0>
          <TableSellingData
            v-for="data in dataWilayah"
            :key="data.wilayah"
            :title="data.wilayah"
            :target="data.targetconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.pencapaian"
            :selisih="data.diffconvert"
            :title_id="data.head_region_id"
          />
        </template>
        <template #activeTab_1>
          <TableSellingData
            v-for="data in dataTableRegion"
            :key="data.region"
            :title="data.region"
            :title_id="data.region_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.pencapaian"
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
            :pencapaian="data.pencapaian"
          />
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
            :pencapaian="data.pencapaian"
          />
        </template>
        <template #activeTab_4>
          <TableSellingData
            v-for="data in dataTableOutlet"
            :key="data.outlet_name"
            :title="data.outlet_name"
            :title_id="data.outlet_id"
            :target="data.targetconvert"
            :selisih="data.diffconvert"
            :aktual="data.aktualconvert"
            :pencapaian="data.pencapaian"
          />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import TableSellingData from '../molecules/TableSellingData.vue'
import Search from '../molecules/Search.vue'
import Tabs from '../molecules/Tabs.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    Navbar,
    TableSellingData,
    Tabs,
    Search,
  },
  props: [
    'dataTableWilayah',
    'dataTableRegion',
    'dataTableArea',
    'dataTableDistributor',
    'dataTableOutlet',
  ],

  data() {
    return {
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
    }
  },

  methods: {
    getTab(value) {
      this.tabCategories = value
    },
    getKeyword(value) {
      if (+this.tabCategories === 0) {
        const data = this.dataTableWilayah.filter((data) => {
          return data.wilayah.toLowerCase().includes(value.toLowerCase())
        })
        this.dataWilayah = data
      }
    },
    setData() {
      this.dataWilayah = this.dataTableWilayah
    },

    addParams(value) {
      this.$router.push({
        path: `${this.$route.path}`,
        query: { value },
      })
    },
  },
  watch: {
    dataTableWilayah: 'setData',
  },
}
</script>

<style>
</style>
