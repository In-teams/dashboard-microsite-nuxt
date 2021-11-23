<template>
  <div>
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="px-2 mt-16">
      <TableTwoColoumn
        v-show="data.region != 'Total Pencapaian'"
        v-for="data in dataRegion"
        :key="data.region"
        :poin-perolehan="data.achieveconvert"
        :poin-penukaran="data.redeemconvert"
        :sisa-poin="data.diff_pointconvert"
      >
        <template #tableTitle>
          <div class="px-2 py-3 bg-red-600 border-2 rounded-t-2xl p-20">
            <div class="max-w-md mx-auto">
              <p class="text-center text-white font-bold">
                {{ data.region_id }}
              </p>
              <p class="text-center text-white font-bold">
                {{ data.region }}
              </p>
            </div>
          </div>
        </template>
        <template #tableContent>
          <div class="grid grid-cols-2 border-r-2 border-l-2">
            <div>
              <p class="text-gray-400 font-bold text-xs text-center">
                TARGET PENJUALAN
              </p>
              <p class="text-gray-900 font-bold text-sm text-center">
                Rp.{{ data.targetconvert }}
              </p>
            </div>
            <div>
              <p class="text-gray-400 font-bold text-xs text-center">
                AKTUAL PENJUALAN
              </p>
              <p class="text-gray-900 font-bold text-sm text-center">
                Rp. {{ data.aktualconvert }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 py-2 border-r-2 border-l-2">
            <div>
              <p class="text-gray-400 font-bold pt-1 text-xs text-center">
                SELISIH PENJUALAN
              </p>
            </div>
            <div>
              <p class="text-gray-900 font-bold text-sm text-center">
                Rp. {{ data.diff }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-1 px-1 py-2 border-r-2 border-l-2">
            <CardWithThreeColoumn
              :title="'Pencapaian'"
              :icons="'image/trophy-icon.png'"
              :points="data.percentage"
            />
            <CardWithThreeColoumn
              :title="'AO/RO'"
              :icons="'image/versus-icon.png'"
              :points="data.aoro"
            />
            <CardWithThreeColoumn
              :title="'Registrasi'"
              :icons="'image/check-icon.png'"
              :points="data.regist"
            />
            <CardWithThreeColoumn
              :title="'Registrasi'"
              :icons="'image/x-icon.png'"
              :points="data.notregist"
            />
            <CardWithThreeColoumn
              :title="'Total'"
              :icons="'image/outlet-icon.png'"
              :points="data.outlet"
            />
            <CardWithThreeColoumn
              :title="'Progres'"
              :icons="'image/loading-icon.png'"
              :points="data.regist_progress"
            />
          </div>
        </template>
        <template #buttonDetail>
          <div
            class="
              grid grid-cols-4
              mx-auto
              px-4
              border-r-2 border-l-2 border-b-2
              py-2
            "
          >
            <Paragraph
              class="col-span-3 self-center text-left"
              :style-paragraph="'text-xxs text-gray-400 font-bold'"
              :paragraph="'Tekan detail untuk lihat ringkasan penjualan'"
            />
            <nuxt-link :to="`/selling-detail-region/${data.region_id}`">
              <Button
                :title-button="'Detail'"
                :style-button="'border-2 rounded-full py-1 bg-pink-300 text-center'"
                :style-title-button="'text-xs text-black font-bold '"
              />
            </nuxt-link>
          </div>
        </template>
      </TableTwoColoumn>
      <TableFourColoumn
        :title-header="'KLUSTER PERSENTASE PENCAPAIAN'"
        :style-header="'px-2 py-3 bg-red-600 border-2 rounded-t-2xl'"
      >
        <template #trow>
          <Accordion
            class="p-2"
            v-for="data in dataPencapaian"
            :key="data.cluster"
            :title="data.cluster"
            :pencapaian="data.pencapaian"
          >
            <div class="flex justify-between border-b border-red-300">
              <h3 class="text-sm">Target</h3>
              <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
            </div>
            <div class="flex justify-between border-b border-red-300 py-2">
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
      <Title
        class="pt-2"
        :title="'10 Besar Pencapaian Nasional'"
        :style-title="'font-bold'"
      />

      <Subtitle
        :style-subtitle="'font-normal text-sm'"
        :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
      />
      <Tabs url="home" :tabs="tabs">
        <template #activeTab_0>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                class="p-2"
                v-for="data in dataRegion"
                :key="data.region"
                :title="data.region"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between border-b border-purple-300">
                  <h3 class="text-sm">Target</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div
                  class="flex justify-between border-b border-purple-300 py-2"
                >
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
        </template>
        <template #activeTab_1>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                class="p-2"
                v-for="data in dataDistributor"
                :key="data.distributor"
                :title="data.distributor"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between border-b border-purple-300">
                  <h3 class="text-sm">Target</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div
                  class="flex justify-between border-b border-purple-300 py-2"
                >
                  <h3 class="text-sm">Aktual</h3>
                  <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
                </div>
                <div class="flex justify-between">
                  <h3>Pencapaian</h3>
                  <p class="font-bold text-sm">{{ data.pencapaian }}</p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
        </template>
        <template #activeTab_2>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                class="p-2"
                v-for="data in dataArea"
                :key="data.area_name"
                :title="data.area_name"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between border-b border-purple-300">
                  <h3 class="text-sm">Target</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div
                  class="flex justify-between border-b border-purple-300 py-2"
                >
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
        </template>

        <template #activeTab_3>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                class="p-2"
                v-for="data in dataOutlet"
                :key="data.outlet_name"
                :title="data.outlet_name"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between border-b border-purple-300">
                  <h3 class="text-sm">Target</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div
                  class="flex justify-between border-b border-purple-300 py-2"
                >
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
        </template>
      </Tabs>
    </div>
    <BottomNav />
  </div>
</template>

 <script>
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../molecules/Accordion.vue'
import Title from '../atoms/Title.vue'
import Subtitle from '../atoms/Subtitle.vue'
import Tabs from '../molecules/Tabs.vue'
import TableFourColoumn from '../molecules/TableFourColoumn.vue'
import Paragraph from '../atoms/Paragraph.vue'
import Button from '../atoms/Button.vue'
import CardWithThreeColoumn from '../molecules/CardWithThreeColoumn.vue'
import TableTwoColoumn from '../molecules/TableTwoColoumn.vue'
import Navbar from '../molecules/Navbar.vue'

export default {
  props: [
    'dataRingkasanWilayah',
    'dataPencapaian',
    'dataRegion',
    'dataDistributor',
    'dataArea',
    'dataOutlet',
  ],
  components: {
    Title,
    Accordion,
    Subtitle,
    TableFourColoumn,
    Navbar,
    Paragraph,
    Button,
    CardWithThreeColoumn,
    TableTwoColoumn,
    Tabs,
    BottomNav,
  },
  data() {
    return {
      datas: '',
      listThead: ['BULAN', 'TARGET', 'AKTUAL', '%'],
      tabs: ['Region', 'Distributor', 'Area', 'Outlet'],
    }
  },
  computed: {},
  methods: {
    getPoint(key) {
      return this.dataRingkasanWilayah[key]
    },
  },
}
</script>

<style>
</style>