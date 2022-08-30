<template>
  <div>
    <HeaderGeneral title="List Transaksi" />
    <FilterProduct @onFunc="changeStatus" :status="status" />
    <div
      v-for="(item, i) in status === 'All'
        ? listTransaction
        : filterTransaction"
      :key="i"
    >
      <div v-for="data in item.items" :key="data">
        <CardDetail
          :image="item.image"
          :isDetail="true"
          :title="data.nama_produk"
          :caption="item.tgl_transaksi"
          :linkDetail="`/summary-detail/${item.kd_transaksi}/${item.no_id}`"
          :isLink="true"
          :item="item"
          :status="item.status_transaksi"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderGeneral from '../molecules/HeaderGeneral.vue'
import FilterProduct from '../molecules/FilterProduct.vue'
import CardDetail from '../molecules/CardDetail.vue'
export default {
  components: {
    HeaderGeneral,
    FilterProduct,
    CardDetail,
  },
  data() {
    return {
      listTransaction: [],
      filterTransaction: [],
      status: 'All',
    }
  },
  methods: {
    // async getListTransactionApi() {
    //   const result = await getListTransaction()
    //   this.listTransaction = result.data
    // },
    async getListTransaksi() {
      const result = await this.$axios.$get(
        `api/v1/outlet/${encodeURIComponent(
          this.$route.params.id
        )}/redemptions`,
        {
          params: {
            include: ['items.product', 'status_transaksi'],
          },
          headers: {
            Authorization: localStorage.token,
          },
        }
      )
      this.listTransaction = result.data
      return result
    },
    filterData() {
      if (this.status !== 'All') {
        const data = this.listTransaction.filter((e) => {
          return e.category === this.status
        })
        this.filterTransaction = data
      }
    },
    changeStatus(value) {
      this.status = value
    },
  },
  mounted() {
    // this.getListTransactionApi()
    this.filterData()
    this.getListTransaksi()
  },
  watch: {
    status: 'filterData',
  },
}
</script>

<style>
</style>