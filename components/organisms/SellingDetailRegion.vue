<template>
  <div>
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
            <div class="flex justify-between border-b border-purple-300">
              <h3 class="text-sm">Target</h3>
              <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
            </div>
            <div class="flex justify-between border-b border-purple-300 py-2">
              <h3 class="text-sm">Aktual</h3>
              <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
            </div>
            <div class="flex justify-between">
              <h3 class="text-sm">Pencapaian</h3>
              <p class="font-bold text-sm">{{ data.pencapaian }}</p>
            </div>
          </Accordion>
        </template>
      </TableFourColoumn>
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
            <div class="flex justify-between border-b border-purple-300">
              <h3 class="text-sm">Target</h3>
              <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
            </div>
            <div class="flex justify-between border-b border-purple-300 py-2">
              <h3 class="text-sm">Aktual</h3>
              <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
            </div>
            <div class="flex justify-between">
              <h3 class="text-sm">Pencapaian</h3>
              <p class="font-bold text-sm">{{ data.pencapaian }}</p>
            </div>
          </Accordion>
        </template>
      </TableFourColoumn>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../molecules/Accordion.vue'
import TableFourColoumn from '../molecules/TableFourColoumn.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    Accordion,
    Navbar,
    TableFourColoumn,
    BottomNav,
  },
  props: ['dataTableQuarter', 'dataTableTahun'],
  data() {
    return {
      listThead: ['QUARTER', 'TARGET', 'AKTUAL', '%'],
      listTheadBulan: ['BULAN', 'TARGET', 'AKTUAL', '%'],
    }
  },
}
</script>

<style>
</style>