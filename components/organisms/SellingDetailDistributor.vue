<template>
  <div>
    <Loading
      class="fixed min-h-full min-w-full bg-fixed bg-purple-900 z-50 top-0"
      v-if="loading"
    />
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="mt-16 px-2">
      <TableFourColoumn
        :title-header="'RINGKASAN PENJUALAN PER QUARTER'"
        :style-header="'px-2 py-3 bg-purple-900 rounded-t-2xl'"
      >
        <template #trow>
          <Accordion
            class="p-2"
            v-for="data in dataTableQuarter"
            :key="data.kuartal"
            :title="data.kuartal"
            :pencapaian="data.pencapaian"
          >
            <div class="flex justify-between border-b border-white py-2">
              <h3 class="text-xs uppercase">Target</h3>
              <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
            </div>
            <div class="flex justify-between border-b border-white py-2">
              <h3 class="text-xs uppercase">Aktual</h3>
              <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
            </div>
            <div class="flex justify-between pt-2">
              <h3 class="text-xs uppercase">Pencapaian</h3>
              <p class="font-bold text-sm">{{ data.pencapaian }}</p>
            </div>
          </Accordion>
        </template>
      </TableFourColoumn>

      <div class="py-2.5">
        <TableFourColoumn
          :title-header="'RINGKASAN PENJUALAN PER TAHUN'"
          :style-header="'px-2 py-3 bg-purple-900 rounded-t-2xl'"
        >
          <template #trow>
            <Accordion
              class="p-2"
              v-for="data in dataTableTahun"
              :key="data.bulan"
              :title="data.bulan"
              :pencapaian="data.pencapaian"
            >
              <div class="flex justify-between border-b border-white py-2">
                <h3 class="text-xs uppercase">Target</h3>
                <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
              </div>
              <div class="flex justify-between border-b border-white py-2">
                <h3 class="text-xs uppercase">Aktual</h3>
                <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
              </div>
              <div class="flex justify-between pt-2">
                <h3 class="text-xs uppercase">Pencapaian</h3>
                <p class="font-bold text-sm">{{ data.pencapaian }}</p>
              </div>
            </Accordion>
          </template>
        </TableFourColoumn>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import Loading from '../molecules/Loading.vue'
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../molecules/Accordion.vue'
import TableFourColoumn from '../molecules/TableFourColoumn.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    Loading,
    Accordion,
    Navbar,
    TableFourColoumn,
    BottomNav,
  },
  props: ['dataTableQuarter', 'dataTableTahun'],
  data() {
    return {
      loading: true,
      listThead: ['QUARTER', 'TARGET', 'AKTUAL', '%'],
      listTheadBulan: ['BULAN', 'TARGET', 'AKTUAL', '%'],
    }
  },
  methods: {
    async checkData() {
      this.loading = true
      const res = await this.dataTableTahun
      if (res) {
        this.loading = false
      }
    },
  },
  watch: {
    dataTableTahun: 'checkData',
  },
}
</script>

<style>
</style>