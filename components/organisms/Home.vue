<template>
  <div>
    <Banner />
    <CardWithContent>
      <template #content>
        <p>Hai, <span class="font-bold text-xs"></span></p>
        <p class="text-xxxs lg:text-blue">
          Tekan tombol dibawah ini untuk lihat detail penjualan lainnya
        </p>
        <div class="py-3">
          <p class="bg-pink-300 px-3 py-3 rounded-full text-center text-sm">
            Periode update per tanggal :
            <span class="font-bold"> 22 januari 2021 </span>
          </p>
        </div>
        <ButtonGroup />
        <TableTwoColoumn
          :poin-perolehan="dataTableNational.achieveconvert"
          :poin-penukaran="dataTableNational.redeemconvert"
          :sisa-poin="dataTableNational.diffconvert"
        >
          <template #tableTitle>
            <div class="px-2 py-3 bg-red-600 rounded-t-2xl p-20">
              <div class="max-w-md mx-auto">
                <p class="text-center text-white font-bold">NASIONAL</p>
              </div>
            </div>
          </template>
          <template #tableContent>
            <div class="grid grid-cols-2 border-r-2 border-l-2 py-2">
              <div>
                <p class="text-gray-400 text-xs text-center py-1">
                  TARGET PENJUALAN
                </p>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp.{{ dataTableNational.targetconvert }}
                </p>
              </div>
              <div>
                <p class="text-gray-400 text-xs text-center py-1">
                  AKTUAL PENJUALAN
                </p>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp.{{ dataTableNational.aktualconvert }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 py-2 border-r-2 border-l-2">
              <div>
                <p class="text-gray-400 pt-1 text-xs text-center">
                  SELISIH PENJUALAN
                </p>
              </div>
              <div>
                <p class="text-gray-900 font-bold text-sm text-center">
                  Rp.{{ dataTableNational.diffconvert }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 px-2 py-2 border-r-2 border-l-2">
              <CardWithThreeColoumn
                :title="'Pencapaian'"
                :icons="'image/trophy-icon.png'"
                :points="dataTableNational.percentage"
              />
              <CardWithThreeColoumn
                :title="'AO/RO'"
                :icons="'image/vs-icon.png'"
                :points="dataTableNational.aoro"
              />
              <CardWithThreeColoumn
                :title="'Registrasi'"
                :icons="'image/check-icon.png'"
                :points="dataTableNational.regist"
              />
              <CardWithThreeColoumn
                :title="'Registrasi'"
                :icons="'image/x-icon.png'"
                :points="dataTableNational.notregist"
              />
              <CardWithThreeColoumn
                :title="'Total '"
                :icons="'image/outlet-icon.png'"
                :points="dataTableNational.total_outlet"
              />
              <CardWithThreeColoumn
                :title="'Progres'"
                :icons="'image/loading-icon.png'"
                :points="dataTableNational.percen_regist"
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
                :style-paragraph="'text-xxxs text-gray-400 font-bold'"
                :paragraph="'Tekan tombol untuk lihat detail'"
              />
              <nuxt-link to="/selling-detail">
                <Button
                  :title-button="'Detail'"
                  :style-button="'border-2 rounded-full py-1 bg-pink-300 text-center'"
                  :style-title-button="'text-xs text-black font-bold'"
                />
              </nuxt-link>
            </div>
          </template>
        </TableTwoColoumn>
        <TableFourColoumn
          :title-header="'KLUSTER PERSENTASE PENCAPAIAN'"
          :style-header="' py-3 bg-red-600 rounded-t-2xl'"
          :data-table-cluster="dataTableCluster"
        >
          <template #trow>
            <Accordion
              class="p-2"
              v-for="data in dataTableCluster"
              :key="data.cluster"
              :title="data.cluster"
              :pencapaian="data.pencapaian"
            >
              <div class="flex justify-between border-b border-red-200">
                <h3 class="text-sm">Target</h3>
                <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
              </div>
              <div class="py-2">
                <div class="flex justify-between border-b border-red-200">
                  <h3 class="text-sm">Aktual</h3>
                  <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
                </div>
              </div>
              <div class="flex justify-between">
                <h3 class="text-sm">Pencapaian</h3>
                <p class="font-bold text-sm">
                  {{ data.pencapaian }}
                </p>
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
          :style-subtitle="'font-normal text-xs'"
          :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
        />
        <Tabs url="home" :tabs="tabs">
          <template #activeTab_0>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableWilayah"
                  :key="data.wilayah"
                  class="p-2"
                  :title="data.wilayah"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b-2">
                    <h3 class="text-xs">Target</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between py-2 border-b-2">
                    <h3 class="text-xs">Aktual</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-xs">Pencapaian</h3>
                    <p class="font-bold text-sm text-purple-900">
                      {{ data.pencapaian }}
                    </p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </template>
          <template #activeTab_1>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableRegion"
                  :key="data.region"
                  class="p-2"
                  :title="data.region"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b-2">
                    <h3 class="text-xs">Target</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between py-2 border-b-2">
                    <h3 class="text-xs">Aktual</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-xs">Pencapaian</h3>
                    <p class="font-bold text-sm text-purple-900">
                      {{ data.percentage }}
                    </p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </template>
          <template #activeTab_2>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableArea"
                  :key="data.area_name"
                  class="p-2"
                  :title="data.area_name"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b-2">
                    <h3 class="text-xs">Target</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between py-2 border-b-2">
                    <h3>Aktual</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3>Pencapaian</h3>
                    <p class="font-bold text-sm text-purple-900">
                      {{ data.percentage }}
                    </p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </template>
          <template #activeTab_3>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableDistributor"
                  :key="data.distributor"
                  class="p-2"
                  :title="data.distributor"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b-2">
                    <h3 class="text-xs">Target</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between py-2 border-b-2">
                    <h3 class="text-xs">Aktual</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-xs">Pencapaian</h3>
                    <p class="font-bold text-sm text-purple-900">
                      {{ data.percentage }}
                    </p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </template>
          <template #activeTab_4>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableOutlet"
                  :key="data.outlet_name"
                  class="p-2"
                  :title="data.outlet_name"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b-2">
                    <h3 class="text-xs">Target</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between py-2 border-b-2">
                    <h3 class="text-xs">Aktual</h3>
                    <p class="font-bold text-sm text-purple-900">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-xs">Pencapaian</h3>
                    <p class="font-bold text-sm text-purple-900">
                      {{ data.percentage }}
                    </p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </template>
        </Tabs>
      </template>
    </CardWithContent>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../molecules/Accordion.vue'
import CardWithThreeColoumn from '../molecules/CardWithThreeColoumn.vue'
import Tabs from '../molecules/Tabs.vue'
import Title from '../atoms/Title.vue'
import Subtitle from '../atoms/Subtitle.vue'
import TableFourColoumn from '../molecules/TableFourColoumn.vue'
import Paragraph from '../atoms/Paragraph.vue'
import Button from '../atoms/Button.vue'
import TableTwoColoumn from '../molecules/TableTwoColoumn.vue'
import ButtonGroup from '../molecules/ButtonGroup.vue'
import CardWithContent from '../molecules/CardWithContent.vue'
import Banner from '../molecules/Banner.vue'
export default {
  components: {
    Accordion,
    CardWithThreeColoumn,
    Tabs,
    Title,
    Subtitle,
    TableFourColoumn,
    Paragraph,
    TableTwoColoumn,
    Banner,
    CardWithContent,
    ButtonGroup,
    Button,
    BottomNav,
  },
  props: [
    'userName',
    'dataTableNational',
    'dataTableCluster',
    'dataTableRegion',
    'dataTableWilayah',
    'dataTableArea',
    'dataTableDistributor',
    'dataTableOutlet',
  ],
  data() {
    return {
      listTheadCluster: ['BULAN', 'TARGET', 'AKTUAL', '%'],
      listThead: ['KETERANGAN', 'TARGET', 'AKTUAL', '%'],
      tabs: ['Wilayah', 'Region', 'Area', 'Distributor', 'Outlet'],
    }
  },

  methods: {
    getPoint(key) {
      return this.dataTableNational[key]
    },
  },
}
</script>

<style>
</style>