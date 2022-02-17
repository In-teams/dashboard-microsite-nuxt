<template>
  <div>
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="mt-20 px-2">
      <TableFourColoumn
        :title-header="'RINGKASAN PENJUALAN PER QUARTER'"
        :style-header="'px-2 py-3 bg-purple-900 rounded-t-2xl'"
      >
        <template #trow>
          <Skeleton v-if="isLoading" />
          <Accordion
            v-else
            class="p-2"
            v-for="data in dataTableQuarter"
            :key="data.kuartal"
            :title="data.kuartal"
            :pencapaian="data.pencapaian"
          >
            <div class="flex justify-between border-b border-white py-2">
              <h3 class="text-xs uppercase">Target penjualan</h3>
              <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
            </div>
            <div class="flex justify-between border-b border-white py-2">
              <h3 class="text-xs uppercase">Aktual penjualan</h3>
              <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
            </div>
            <div class="flex justify-between pt-2">
              <h3 class="text-xs uppercase">selisih penjualan</h3>
              <p
                :class="
                  parseInt(data.diffconvert) <= 0
                    ? 'text-red-500'
                    : 'text-black'
                "
                class="font-bold text-sm"
              >
                Rp. {{ data.diffconvert }}
              </p>
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
            <Skeleton v-if="isLoading" />
            <Accordion
              v-else
              class="p-2"
              v-for="data in dataTableTahun"
              :key="data.bulan"
              :title="data.bulan"
              :pencapaian="data.pencapaian"
            >
              <div class="flex justify-between border-b border-white py-2">
                <h3 class="text-xs uppercase">Target penjualan</h3>
                <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
              </div>
              <div class="flex justify-between border-b border-white py-2">
                <h3 class="text-xs uppercase">Aktual penjualan</h3>
                <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
              </div>
              <div class="flex justify-between pt-2">
                <h3 class="text-xs uppercase">selisih penjualan</h3>
                <p
                  :class="
                    parseInt(data.diffconvert) <= 0
                      ? 'text-red-500'
                      : 'text-black'
                  "
                  class="font-bold text-sm"
                >
                  Rp. {{ data.diffconvert }}
                </p>
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
import Skeleton from '../atoms/Skeleton.vue'
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../molecules/Accordion.vue'
import TableFourColoumn from '../molecules/TableFourColoumn.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    Skeleton,
    Accordion,
    Navbar,
    TableFourColoumn,
    BottomNav,
  },
  props: ['dataTableQuarter', 'dataTableTahun'],
  data() {
    return {
      isLoading: true,
      listThead: ['QUARTER', 'TARGET', 'AKTUAL', '%'],
      listTheadBulan: ['BULAN', 'TARGET', 'AKTUAL', '%'],
    }
  },
  methods: {
    async checkData() {
      this.isLoading = true
      const res = await this.dataTableTahun
      if (res) {
        this.isLoading = false
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