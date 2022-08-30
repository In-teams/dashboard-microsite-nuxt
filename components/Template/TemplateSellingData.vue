<template>
  <div>
    <!-- :data-table-region="dataTableRegion" :data-table-wilayah="dataTableWilayah"
    :data-table-area="dataTableArea"
    :data-table-distributor="dataTableDistributor"
    :data-table-outlet="dataTableOutlet" :data-page="dataPage"
    :data-page-area="dataPageArea" :data-page-outlet="dataPageOutlet"
    @onFunc="getKeyword" @onFuncArea="getKeywordArea"
    @onFuncOutlet="getKeywordOutlet" -->
    <SellingData />
  </div>
</template>

<script>
// import axios from 'axios'
import SellingData from '../organisms/SellingData.vue'
export default {
  components: {
    SellingData,
  },
  data() {
    return {
      dataTableWilayah: {
        data: [],
      },
      dataTableRegion: {
        data: [],
      },
      dataTableArea: {
        data: [],
      },
      dataTableDistributor: {
        data: [],
      },
      dataTableOutlet: {
        data: [],
      },
      dataPage: {
        data: [],
      },
      dataPageArea: {
        data: [],
      },
      dataPageOutlet: {
        data: [],
      },
      queryRoute: this.$route.query.page,

      keySearch: '',
      keySearchArea: '',
      keySearchOutlet: '',
    }
  },
  mounted() {
    // this.getdataTableWilayah()
    // this.getdataTableRegion()
    // this.getdataTableArea()
    // this.getdataTableDistributor()
    // this.getdataTableOutlet()
    // this.getPage()
    // this.getPageArea()
    // this.getPageOutlet()
  },
  methods: {
    // getKeyword(keyword) {
    //   this.keySearch = keyword
    // },
    // getKeywordArea(keyword) {
    //   this.keySearchArea = keyword
    // },
    // getKeywordOutlet(keyword) {
    //   this.keySearchOutlet = keyword
    // },
    // getdataTableWilayah() {
    //   axios
    //     .get(`/api/v1/sales/summary/hr`, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataTableWilayah = res.data.data.desc))
    //     .catch((err) => console.log(err))
    // },
    // getdataTableRegion() {
    //   axios
    //     .get(`/api/v1/sales/summary/region`, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataTableRegion = res.data.data.desc))
    //     .catch((err) => console.log(err))
    // },
    // getdataTableArea() {
    //   const params = {
    //     page: `${this.$route.query.page}`,
    //     keyword: this.keySearchArea,
    //   }
    //   if (this.keySearchArea === '') {
    //     delete params.keyword
    //   }
    //   axios
    //     .get(`/api/v1/sales/summary/area`, {
    //       params,
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataTableArea = res.data.data.desc))
    //     .catch((err) => console.log(err))
    // },
    // getPageArea() {
    //   axios
    //     .get(`/api/v1/sales/summary/area`, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataPageArea = res.data.data.totalPage))
    //     .catch((err) => console.log(err))
    // },
    // getdataTableDistributor() {
    //   const params = {
    //     page: `${this.$route.query.page}`,
    //     keyword: this.keySearch,
    //   }
    //   if (this.keySearch === '') {
    //     delete params.keyword
    //   }
    //   axios
    //     .get(`/api/v1/sales/summary/distributor`, {
    //       params,
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataTableDistributor = res.data.data.desc))
    //     .catch((err) => console.log(err))
    // },
    // getPage() {
    //   axios
    //     .get(`/api/v1/sales/summary/distributor`, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataPage = res.data.data.totalPage))
    //     .catch((err) => console.log(err))
    // },
    // getdataTableOutlet() {
    //   const params = {
    //     page: `${this.$route.query.page}`,
    //     keyword: this.keySearchOutlet,
    //   }
    //   if (this.keySearchOutlet === '') {
    //     delete params.keyword
    //   }
    //   axios
    //     .get(`/api/v1/sales/summary/outlet`, {
    //       params,
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataTableOutlet = res.data.data.desc))
    //     .catch((err) => console.log(err))
    // },
    // getPageOutlet() {
    //   axios
    //     .get(`/api/v1/sales/summary/outlet`, {
    //       headers: {
    //         Authorization: localStorage.token,
    //       },
    //     })
    //     .then((res) => (this.dataPageOutlet = res.data.data.totalPage))
    //     .catch((err) => console.log(err))
    // },
  },
  // watch: {
  //   keySearch: 'getdataTableDistributor',
  //   keySearchArea: 'getdataTableArea',
  //   keySearchOutlet: 'getdataTableOutlet',
  // },
}
</script>

<style>
</style>