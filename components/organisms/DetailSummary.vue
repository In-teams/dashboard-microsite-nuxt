<template>
  <div>
    <HeaderGeneral link="/home" isWhite="true" styleCustom="m-4 z-10" />
    <div class="fixed">
      <img class="w-full" src="../../assets/image/banner-2.png" alt="" />
    </div>
    <div
      class="
        bg-white
        absolute
        rounded-t-2xl
        h-auto
        w-full
        mt-64
        xl:max-w-3xl xl:mt-96
      "
    >
      <div
        class="px-4 py-3 xl:px-6 xl:py-8"
        v-for="ewallet in ewallets.items"
        :key="ewallet"
      >
        <EwalletSummary
          :title="title"
          :no_wa="no_wa"
          :nama_penerima="nama_penerima.nama_penerima"
          :tgl_terima="ewallets.status_transaksi.tanggal_terima"
          :tgl_kirim="ewallets.status_transaksi.tanggal_kirim"
          v-if="
            ewallet.product.category === 'PULSA' ||
            ewallet.product.category === 'EWALLET'
          "
        >
          <div>
            <p class="text-base font-normal text-gray-500 mt-2">
              {{ ewallet.nama_produk }}
            </p>
            <div class="flex flex-row justify-between w-10/12 mb-6">
              <!-- <p class="text-gray-500 text-base">
            1X145 Poin
              </p> -->
              <p class="text-base font-semibold">
                {{ ewallet.point_satuan }} Poin x {{ ewallet.quantity }} Pcs =
                {{ ewallet.total_point }} Poin
              </p>
            </div>
            <hr class="h-6" />
          </div>
        </EwalletSummary>
        <MoneySummary
          :title="title"
          :nama_rekening="nama_rekening"
          :nama_bank="nama_bank"
          :nomor_rekening="nomor_rekening"
          v-if="
            ewallet.product.category === 'REBATE' ||
            ewallet.product.category === 'POINT2CASH'
          "
        >
          <div>
            <p class="text-base font-normal text-gray-500">
              {{ ewallet.nama_produk }}
            </p>

            <div class="flex flex-row justify-between w-10/12 mt-2 mb-6">
              <p class="text-base font-semibold">
                {{ ewallet.point_satuan }} Poin x {{ ewallet.quantity }} Pcs =
                {{ ewallet.total_point }} Poin
              </p>
            </div>
            <hr class="h-10" />
          </div>
        </MoneySummary>
        <ProductSummary
          :alamat="alamat"
          :provinsi="provinsi"
          :kabupaten="kabupaten"
          :kecamatan="kecamatan"
          :kode_pos="kode_pos"
          :kelurahan="kelurahan"
          :rt_rw="rt_rw"
          :title="title"
          :no_wa="no_wa"
          :nama_penerima="nama_penerima"
          v-if="ewallet.product.category === 'PRODUCT'"
        >
          <div>
            <p class="text-base font-normal text-gray-500 mt-2">
              {{ ewallet.nama_produk }}
            </p>
            <div class="flex flex-row justify-between w-10/12 mb-6">
              <!-- <p class="text-gray-500 text-base">
            1X145 Poin
              </p> -->
              <p class="text-base font-semibold">
                {{ ewallet.point_satuan }} Poin
              </p>
            </div>
            <hr class="h-6" />
          </div>
        </ProductSummary>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSummary from '../organisms/ProductSummary.vue'
import MoneySummary from '../organisms/MoneySummary.vue'
import EwalletSummary from '../organisms/EwalletSummary.vue'
import HeaderGeneral from '../molecules/HeaderGeneral.vue'
export default {
  data() {
    return {
      ewallets: [],
      title: '',
      no_wa: '',
      nomor_rekening: '',
      nama_rekening: '',
      nama_bank: '',
      alamat: '',
      provinsi: '',
      kabupaten: '',
      kecamatan: '',
      kelurahan: '',
      kode_pos: '',
      rt_rw: '',
      nama_penerima: '',
    }
  },
  components: {
    HeaderGeneral,
    EwalletSummary,
    MoneySummary,
    ProductSummary,
  },
  methods: {
    async getDetailEwallet() {
      const response = await this.$axios.$get(
        `/api/v1/outlet/${this.$route.params.id}/redemptions/${this.$route.params.outlet}`,
        {
          params: {
            include: ['items.product', 'status_transaksi', 'outlet'],
          },
          headers: {
            Authorization: localStorage.token2,
          },
        }
      )
      this.ewallets = response.data
      this.title = response.data.status_transaksi
      this.nama_penerima = response.data.status_transaksi
      this.no_wa = response.data.outlet.no_wa
      this.nomor_rekening = response.data.outlet.nomor_rekening
      this.nama_rekening = response.data.outlet.nama_rekening
      this.nama_bank = response.data.outlet.nama_bank
      this.alamat = response.data.outlet.alamat1
      this.provinsi = response.data.outlet.propinsi
      this.kabupaten = response.data.outlet.kabupaten
      this.kecamatan = response.data.outlet.kecamatan
      this.kelurahan = response.data.outlet.kelurahan
      this.kode_pos = response.data.outlet.kodepos
      this.rt_rw = response.data.outlet.rtrw
      return response
    },
  },
  mounted() {
    this.getDetailEwallet()
  },
}
</script>

<style>
</style>