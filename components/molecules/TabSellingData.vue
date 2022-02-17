<template>
  <div>
    <div v-if="this.$route.query.value == 'Wilayah'">
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
      <TableSellingData
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
import TableSellingData from '../molecules/TableSellingData.vue'

export default {
  components: {
    TableSellingData,
  },

  data() {
    return {
      keySearch: this.keys,
      items: [],
    }
  },
  props: ['hirarki', 'keys'],
  mounted() {
    this.getdataTable()
  },

  methods: {
    sendTable() {
      this.$emit('sendTable', this.items)
    },

    getdataTable() {
      // const params = {
      //   page: `${this.$route.query.page}`,
      //   keyword: this.keySearch,
      // }
      // if (this.keySearch === '') {
      //   delete params.keyword
      // }
      this.$axios.$get(
        `/api/v2/sales/summary/${this.hirarki}`,
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      )
        .then((res) => (this.items = res.data.desc))
        .catch((err) => console.log(err))
    },
  },
  watch: {
    keySearch: ['getdataTable'],
    items: ['sendTable'],
  },
}
</script>

<style>
</style>
