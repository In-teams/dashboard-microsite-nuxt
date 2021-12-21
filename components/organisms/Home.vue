<template>
  <div>
    <Loading
      class="fixed min-h-full min-w-full bg-fixed bg-purple-900 z-50"
      v-if="loading"
    />
    <Banner />

    <CardWithContent>
      <template #content>
        <div class="py-2 px-2">
          <p
            class="px-3 py-3 rounded-lg text-center text-sm border bg-blue-100"
          >
            Periode update per tanggal :
            <span class="font-bold text-red-500"> 22 januari 2021 </span>
          </p>
        </div>

        <div class="px-4">
          <p class="">
            Hai,
            <span class="font-bold text-red-500 text-base uppercase">{{
              user
            }}</span>
          </p>
          <p class="text-xs lg:text-blue">
            Tekan tombol dibawah ini untuk lihat detail penjualan
          </p>
        </div>

        <div class="py-2">
          <ButtonGroup />
        </div>

        <TableTwoColoumn
          :poin-perolehan="dataTableNational.achieveconvert"
          :poin-penukaran="dataTableNational.redeemconvert"
          :sisa-poin="dataTableNational.diff_poinconvert"
        >
          <template #tableTitle>
            <div class="px-2 py-3 bg-red-600 rounded-t-2xl p-20">
              <div class="max-w-md mx-auto">
                <p class="text-center text-white font-bold tracking-wider">
                  NASIONAL
                </p>
              </div>
            </div>
          </template>
          <template #tableContent>
            <div class="">
              <div class="grid grid-cols-2 py-2">
                <div>
                  <p
                    class="text-gray-400 text-xs text-center py-1 tracking-wide"
                  >
                    TARGET PENJUALAN
                  </p>
                  <p class="text-gray-900 font-bold text-sm text-center">
                    Rp.{{ dataTableNational.targetconvert }}
                  </p>
                </div>
                <div>
                  <p
                    class="text-gray-400 text-xs text-center py-1 tracking-wide"
                  >
                    AKTUAL PENJUALAN
                  </p>
                  <p class="text-gray-900 font-bold text-sm text-center">
                    Rp.{{ dataTableNational.aktualconvert }}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-2 py-2">
                <div>
                  <p
                    class="text-gray-400 pt-1 text-xs text-center tracking-wide"
                  >
                    SELISIH PENJUALAN
                  </p>
                </div>
                <div>
                  <p
                    :class="
                      parseInt(dataTableNational.diffconvert) < 0
                        ? 'text-red-500'
                        : 'text-black'
                    "
                    class="text-gray-900 font-bold text-sm text-center"
                  >
                    Rp.{{ dataTableNational.diffconvert }}
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template #buttonDetail>
            <div class="px-4 py-2">
              <div class="flex justify-between">
                <Paragraph
                  class="self-center text-left"
                  :style-paragraph="'text-xs text-gray-400 font-semibold'"
                  :paragraph="'Tekan tombol untuk lihat detail'"
                />
                <nuxt-link to="/selling-detail">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'text-center items-center flex justify-center '"
                    :style-title-button="'border-2 border-indigo-200 bg-blue-100 p-2 rounded-2xl text-xs text-black font-bold'"
                  />
                </nuxt-link>
              </div>
            </div>
          </template>
          <template #table>
            <div>
              <div class="grid grid-cols-12 gap-1 px-1 py-2">
                <ListAccordionHome
                  class="col-span-12 px-1"
                  :pencapaian="'Tekan untuk melihat detail list'"
                >
                  <div class="px-4">
                    <CardWithThreeColoumn
                      class=""
                      :title="'Persentase Pencapaian'"
                      :icons="'https://i.ibb.co/FKNcqtn/trophy-icon.png'"
                      :points="dataTableNational.percentage"
                    />
                    <CardWithThreeColoumn
                      class="col-span-5"
                      :title="'AO/RO'"
                      :icons="'https://i.ibb.co/3cq5cB1/vs-icon.png'"
                      :points="dataTableNational.aoro"
                    />
                    <CardWithThreeColoumn
                      :title="'Sudah Registrasi'"
                      :icons="'https://i.ibb.co/frcsgQB/check-icon.png'"
                      :points="dataTableNational.regist"
                    />
                    <CardWithThreeColoumn
                      :title="'Belum Registrasi'"
                      :icons="'https://i.ibb.co/3fHkCYc/x-icon.png'"
                      :points="dataTableNational.notregist"
                    />
                    <CardWithThreeColoumn
                      :title="'Total Peserta'"
                      :icons="'https://i.ibb.co/znLrr3W/outlet-icon.png'"
                      :points="dataTableNational.total_outlet"
                    />
                    <CardWithThreeColoumn
                      :title="'Progres Registrasi'"
                      :icons="'https://i.ibb.co/4mLKSvS/loading-icon.png'"
                      :points="dataTableNational.percen_regist"
                    />
                  </div>
                </ListAccordionHome>
              </div>
            </div>
          </template>
        </TableTwoColoumn>
        <div class="py-4">
          <TableFourColoumn
            :title-header="'REGISTRASI'"
            :style-header="' py-3 bg-red-600 rounded-t-2xl tracking-wide'"
            :data-table-registrasi="dataTableRegistrasi"
          >
            <template #trow>
              <Accordion
                :border="'red'"
                class="p-2"
                v-for="data in dataTableRegistrasi"
                :key="data.area"
                :title="data.area"
                :pencapaian="data.total"
              >
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">level 1</h3>
                  <p class="font-bold text-sm">{{ data.Level1 }}</p>
                </div>

                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">level 2</h3>
                  <p class="font-bold text-sm">{{ data.Level2 }}</p>
                </div>
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">level 3</h3>
                  <p class="font-bold text-sm">{{ data.Level3 }}</p>
                </div>
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">level 4</h3>
                  <p class="font-bold text-sm">{{ data.Level4 }}</p>
                </div>

                <div class="flex justify-between pt-2">
                  <h3 class="text-xs uppercase">total level</h3>
                  <p class="font-bold text-sm">
                    {{ data.total }}
                  </p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
        </div>
        <div class="pb-2">
          <TableFourColoumn
            :title-header="'KLUSTER PERSENTASE PENCAPAIAN'"
            :style-header="' py-3 bg-red-600 rounded-t-2xl tracking-wide'"
            :data-table-cluster="dataTableCluster"
          >
            <template #trow>
              <Accordion
                :border="'red'"
                class="p-2"
                v-for="data in dataTableCluster"
                :key="data.cluster"
                :title="data.cluster"
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
                  <h3 class="text-xs uppercase">Selisih penjualan</h3>
                  <p class="font-bold text-sm">
                    {{ data.pencapaian }}
                  </p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
        </div>

        <div class="py-2">
          <Title
            class=""
            :title="'10 Besar Pencapaian Nasional'"
            :style-title="'font-bold'"
          />

          <Subtitle
            :style-subtitle="'font-normal text-xs'"
            :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
          />
        </div>
        <Tabs :level="level" class="" url="home" :tabs="tabs">
          <template #activeTab_0>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'py-3 bg-purple-900 rounded-t-2xl tracking-wide'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableWilayah"
                  :key="data.wilayah"
                  class="p-2"
                  :title="data.wilayah"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Target Penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Aktual Penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">Selisih Penjualan</h3>
                    <p
                      :class="
                        parseInt(data.diffconvert) < 0
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
          </template>
          <template #activeTab_1>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'py-3 bg-purple-900 rounded-t-2xl tracking-wide'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableRegion"
                  :key="data.region"
                  class="p-2"
                  :title="data.region"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Target penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Aktual penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">Selisih penjualan</h3>
                    <p
                      :class="
                        parseInt(data.diffconvert) < 0
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
          </template>
          <template #activeTab_2>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'py-3 bg-purple-900 rounded-t-2xl tracking-wide'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableArea"
                  :key="data.area_name"
                  class="p-2"
                  :title="data.area_name"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Target penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Aktual penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">selisih penjualan</h3>
                    <p
                      :class="
                        parseInt(data.diffconvert) < 0
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
          </template>
          <template #activeTab_3>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'py-3 bg-purple-900 rounded-t-2xl tracking-wide'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableDistributor"
                  :key="data.distributor"
                  class="p-2"
                  :title="data.distributor"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Target penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Aktual penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">Pencapaian penjualan</h3>
                    <p
                      :class="
                        parseInt(data.diffconvert) < 0
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
          </template>
          <template #activeTab_4>
            <TableFourColoumn
              class="mb-16"
              :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
              :style-header="'py-3 bg-purple-900 rounded-t-2xl tracking-wide'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataTableOutlet"
                  :key="data.outlet_name"
                  class="p-2"
                  :title="data.outlet_name"
                  :pencapaian="data.percentage"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Target penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Aktual penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">selisih penjualan</h3>
                    <p
                      :class="
                        parseInt(data.diffconvert) < 0
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
          </template>
        </Tabs>
      </template>
    </CardWithContent>
    <BottomNav />
  </div>
</template>

<script>
import ListAccordionHome from '../molecules/ListAccordionHome.vue'
import Loading from '../molecules/Loading.vue'
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
    ListAccordionHome,
    Loading,
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
    'dataTableRegistrasi',
  ],
  data() {
    return {
      listTheadCluster: ['BULAN', 'TARGET', 'AKTUAL', '%'],
      listThead: ['KETERANGAN', 'TARGET', 'AKTUAL', '%'],
      tabs: ['Wilayah', 'Region', 'Area', 'Distributor', 'Outlet'],
      loading: true,
      user: this.$route.params.name,
      level: this.$route.params.id,
    }
  },

  methods: {
    getPoint(key) {
      return this.dataTableNational[key]
    },

    // getUserId() {
    //   if (localStorage.user_id) {
    //     localStorage.user_id = this.user
    //   }
    // },

    async checkData() {
      this.loading = true

      const res = await this.dataTableNational
      if (res) {
        this.loading = false
      }
    },
  },

  watch: {
    dataTableNational: 'checkData',
  },
}
</script>

<style>
</style>