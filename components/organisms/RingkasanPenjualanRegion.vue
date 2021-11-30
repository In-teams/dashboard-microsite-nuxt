<template>
  <div>
    <Loading
      class="fixed min-h-full min-w-full bg-fixed bg-purple-900 z-50 top-0"
      v-if="loading"
    />
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
          <div class="px-2 py-3 bg-red-600 rounded-t-2xl p-20">
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
          <div class="border-r border-l">
            <div class="grid grid-cols-2 py-1">
              <div>
                <p class="text-gray-400 text-xs text-center py-2">
                  TARGET PENJUALAN
                </p>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp.{{ data.targetconvert }}
                </p>
              </div>
              <div>
                <p class="text-gray-400 text-xs text-center py-2">
                  AKTUAL PENJUALAN
                </p>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp. {{ data.aktualconvert }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 py-2">
              <div>
                <p class="text-gray-400 pt-1 text-xs text-center py-2">
                  SELISIH PENJUALAN
                </p>
              </div>
              <div>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp. {{ data.diff }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 py-1 px-1">
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
          </div>
        </template>
        <template #buttonDetail>
          <div
            class="
              grid grid-cols-4
              mx-auto
              px-4
              border-r border-l border-b
              rounded-b-2xl
              py-2
            "
          >
            <Paragraph
              class="col-span-3 self-center text-left"
              :style-paragraph="'text-xxs text-gray-400'"
              :paragraph="'  Tekan tombol untuk lihat detail'"
            />
            <nuxt-link :to="`/selling-detail-region/${data.region_id}`">
              <Button
                :title-button="'Detail'"
                :style-button="'border-2 rounded-full py-1 bg-blue-100 text-center items-center flex justify-center'"
                :style-title-button="'text-xs text-black font-bold '"
              />
            </nuxt-link>
          </div>
        </template>
      </TableTwoColoumn>
      <div class="py-4">
        <TableFourColoumn
          :title-header="'KLUSTER PERSENTASE PENCAPAIAN'"
          :style-header="'px-2 py-3 bg-red-600 rounded-t-2xl'"
        >
          <template #trow>
            <Accordion
              :border="'red'"
              class="p-2"
              v-for="data in dataPencapaian"
              :key="data.cluster"
              :title="data.cluster"
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
            :style-header="'px-2 py-3 bg-purple-900 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                class="p-2"
                v-for="data in dataRegion"
                :key="data.region"
                :title="data.region"
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
        </template>
      </Tabs>
    </div>
    <BottomNav />
  </div>
</template>

 <script>
import Loading from '../molecules/Loading.vue'
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
    Loading,
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
      loading: true,
    }
  },
  computed: {},
  methods: {
    getPoint(key) {
      return this.dataRingkasanWilayah[key]
    },

    async checkData() {
      this.loading = true
      const res = await this.dataRingkasanWilayah
      if (res) {
        this.loading = false
      }
    },
  },
  watch: {
    dataRingkasanWilayah: 'checkData',
  },
}
</script>

<style>
</style>