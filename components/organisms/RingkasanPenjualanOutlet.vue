<template>
  <div>
    <Loading
      class="fixed min-h-full min-w-full bg-fixed bg-purple-900 z-50 top-0"
      v-if="loading"
    />
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="px-2 py-2 bg-gray-100 mt-2">
      <TableTwoColoumn
        class="border-b-2 mt-14"
        v-show="data.outlet_name != 'Total Pencapaian'"
        v-for="data in dataOutlet"
        :key="data.outlet_name"
        :poin-perolehan="data.achieveconvert"
        :poin-penukaran="data.redeemconvert"
        :sisa-poin="data.diff_pointconvert"
      >
        <template #tableTitle>
          <div class="px-2 py-2 bg-red-600 rounded-t-2xl p-20">
            <div class="max-w-md mx-auto">
              <p class="text-center text-white font-bold">{{ params }}</p>
              <p class="text-center text-white font-bold">
                {{ data.outlet_name }}
              </p>
            </div>
          </div>
        </template>
        <template #tableContent>
          <div class="grid grid-cols-2 py-2">
            <div>
              <p class="text-gray-400 text-xs text-center tracking-wide py-2">
                TARGET PENJUALAN
              </p>
              <p class="text-gray-900 font-bold text-sm text-center">
                Rp.{{ data.targetconvert }}
              </p>
            </div>
            <div>
              <p class="text-gray-400 text-xs text-center tracking-wide py-2">
                AKTUAL PENJUALAN
              </p>
              <p
                :class="
                  parseInt(data.aktualconvert) <= 0
                    ? 'text-red-500'
                    : 'text-black'
                "
                class="text-gray-900 font-bold text-sm text-center"
              >
                Rp. {{ data.aktualconvert }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 py-2">
            <div>
              <p class="text-gray-400 text-xs text-center tracking-wide">
                SELISIH PENJUALAN
              </p>
            </div>
            <div>
              <p
                :class="
                  parseInt(data.diffconvert) <= 0
                    ? 'text-red-500'
                    : 'text-black'
                "
                class="text-gray-900 font-bold text-sm text-center"
              >
                Rp. {{ data.diffconvert }}
              </p>
            </div>
          </div>
        </template>
        <template #table>
          <div class="grid grid-cols-12 gap-1 px-1 py-2">
            <ListAccordionHome
              class="col-span-12 px-1"
              :pencapaian="'Tekan untuk melihat detail list'"
            >
              <div class="px-4">
                <CardWithThreeColoumn
                  :title="'Sudah Registrasi'"
                  :icons="'https://i.ibb.co/frcsgQB/check-icon.png'"
                  :points="data.registStatus"
                />
                <CardWithThreeColoumn
                  :border-none="false"
                  :title="'Persentase Pencapaian'"
                  :icons="'https://i.ibb.co/FKNcqtn/trophy-icon.png'"
                  :points="data.percentage"
                />
              </div>
            </ListAccordionHome>
          </div>
        </template>
      </TableTwoColoumn>
      <div class="grid grid-cols-12 gap-2 py-4">
        <nuxt-link
          class="col-span-6"
          :to="`/formulir-registrasi/${$route.params.name}`"
        >
          <CardRegistrasi
            :data-title="'Foto atau Upload Formulir Registrasi'"
            :data-img="'https://img.icons8.com/ios/50/000000/camera--v3.png'"
          />
        </nuxt-link>
        <nuxt-link
          class="col-span-6"
          :to="`/formulir-redemption/${$route.params.name}`"
        >
          <CardRegistrasi
            :data-title="'Foto atau Upload Formulir Redemption'"
            :data-img="'https://img.icons8.com/ios/50/000000/camera--v3.png'"
          />
        </nuxt-link>

        <CardRegistrasi
          class="py-2"
          :data-title="'Cek Data Registrasi'"
          :data-img="'https://i.ibb.co/YPx4n41/regist-icon.png'"
        />

        <CardRegistrasi
          class="py-2"
          :data-title="'Transaksi Penukaran'"
          :data-img="'https://i.ibb.co/8x2Y1hg/gift-icon.png'"
        />
      </div>

      <Title
        class="pt-2"
        :title="'Ringkasan Data Penjualan & Data Poin'"
        :style-title="'font-bold'"
      />

      <Subtitle
        :style-subtitle="'font-normal text-xs pt-1'"
        :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
      />

      <Tabs url="home" :tabs="tabs">
        <template #activeTab_0>
          <TableFourColoumn
            :title-header="'RINGKASAN PER QUARTER'"
            :style-header="' py-3 bg-purple-900  rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataQuarter"
                :key="data.kuartal"
                class="p-2"
                :title="data.kuartal"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">Perolehan penjualan</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">Penukaran penjualan</h3>
                  <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
                </div>
                <div class="flex justify-between pt-2">
                  <h3 class="text-xs uppercase">Sisa penjualan</h3>
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
          <div class="py-4">
            <TableFourColoumn
              :title-header="'RINGKASAN PER TAHUN'"
              :style-header="'px-2 py-3 bg-purple-900  rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataMonth"
                  :key="data.bulan"
                  class="p-2"
                  :title="data.bulan"
                  :pencapaian="data.pencapaian"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Perolehan penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Penukaran penjualan</h3>
                    <p class="font-bold text-sm">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">Sisa penjualan</h3>
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
        </template>
        <template #activeTab_1>
          <TableFourColoumn
            :title-header="'RINGKASAN PER QUARTER'"
            :style-header="'px-2 py-3 bg-purple-900  rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataPoinQuarter"
                :key="data.quarter"
                class="p-2"
                :title="data.quarter"
                :pencapaian="data.achieveconvert"
              >
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">Perolehan Poin</h3>
                  <p class="font-bold text-sm">Rp. {{ data.targetconvert }}</p>
                </div>
                <div class="flex justify-between border-b border-white py-2">
                  <h3 class="text-xs uppercase">Penukaran poin</h3>
                  <p class="font-bold text-sm">Rp. {{ data.aktualconvert }}</p>
                </div>
                <div class="flex justify-between pt-2">
                  <h3 class="text-xs uppercase">Sisa poin</h3>
                  <p class="font-bold text-sm">{{ data.achieveconvert }}</p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
          <div class="py-4">
            <TableFourColoumn
              :title-header="'RINGKASAN PER TAHUN'"
              :style-header="'px-2 py-3 bg-purple-900  rounded-t-2xl'"
            >
              <template #trow>
                <Accordion
                  v-for="data in dataPoin"
                  :key="data.month"
                  class="p-2"
                  :title="data.month"
                  :pencapaian="data.achieveconvert"
                >
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Perolehan Poin</h3>
                    <p class="font-bold text-base">
                      Rp. {{ data.targetconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between border-b border-white py-2">
                    <h3 class="text-xs uppercase">Penukaran Poin</h3>
                    <p class="font-bold text-base">
                      Rp. {{ data.aktualconvert }}
                    </p>
                  </div>
                  <div class="flex justify-between pt-2">
                    <h3 class="text-xs uppercase">Sisa Poin</h3>
                    <p class="font-bold text-base">{{ data.achieveconvert }}</p>
                  </div>
                </Accordion>
              </template>
            </TableFourColoumn>
          </div>
        </template>
      </Tabs>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import ListAccordionHome from '../molecules/ListAccordionHome.vue'
import Loading from '../molecules/Loading.vue'
import BottomNav from '../molecules/BottomNav.vue'
import Accordion from '../../components/molecules/Accordion.vue'
import CardWithThreeColoumn from '../../components/molecules/CardWithThreeColoumn.vue'
import listCardRegistrasi from '../../data/list-card-registrasi.json'
import CardRegistrasi from '../../components/molecules/CardRegistrasi.vue'
import Title from '../../components/atoms/Title.vue'
import Subtitle from '../../components/atoms/Subtitle.vue'
import TableFourColoumn from '../../components/molecules/TableFourColoumn.vue'
import Tabs from '../../components/molecules/Tabs.vue'
import listContentCard from '../../data/list-content-card.json'
import TableTwoColoumn from '../../components/molecules/TableTwoColoumn.vue'
import Navbar from '../../components/molecules/Navbar.vue'
export default {
  props: [
    'dataOutlet',
    'dataQuarter',
    'dataMonth',
    'dataPoinQuarter',
    'dataPoin',
  ],
  components: {
    ListAccordionHome,
    Loading,
    Accordion,
    Title,
    Subtitle,
    Navbar,
    TableTwoColoumn,
    Tabs,
    TableFourColoumn,
    CardRegistrasi,
    CardWithThreeColoumn,
    BottomNav,
  },
  data() {
    return {
      lists: listCardRegistrasi.list,
      contents: listContentCard.list3,
      listTheadPercent: ['BULAN', 'TARGET', 'AKTUAL', '%'],
      listThead: ['BULAN', 'TARGET', 'AKTUAL', 'POIN'],
      tabs: ['Penjualan', 'Point Reward'],
      params: this.$route.params.name,
      loading: true,
    }
  },
  methods: {
    getPoint(key) {
      return this.dataOutlet[key]
    },

    async checkData() {
      this.loading = true
      const res = await this.dataOutlet
      if (res) {
        this.loading = false
      }
    },
  },
  watch: {
    dataOutlet: 'checkData',
  },
}
</script>

<style>
</style>