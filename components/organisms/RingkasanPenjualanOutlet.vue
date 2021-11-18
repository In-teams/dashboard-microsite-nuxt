<template>
  <div>
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="px-2">
      <TableTwoColoumn
        class="border-b-2 mt-16"
        v-show="data.outlet_name != 'Total Pencapaian'"
        v-for="data in dataOutlet"
        :key="data.outlet_name"
        :poin-perolehan="data.achieveconvert"
        :poin-penukaran="data.redeemconvert"
        :sisa-poin="data.diffconvert"
      >
        <template #tableTitle>
          <div class="px-2 py-3 bg-red-600 border-2 rounded-t-2xl p-20">
            <div class="max-w-md mx-auto">
              <p class="text-center text-white font-bold">{{ params }}</p>
              <p class="text-center text-white font-bold">
                {{ data.outlet_name }}
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
              :title="'Registrasi'"
              :icons="'image/left_arrow.svg'"
              :points="data.regist"
            />
            <CardWithThreeColoumn
              :title="'Pencapaian'"
              :icons="'image/trophy-icon.png'"
              :points="data.percentage"
            />
          </div>
          <div
            class="grid grid-cols-2 gap-1 px-1 py-2 border-r-2 border-l-2"
          ></div>
        </template>
      </TableTwoColoumn>
      <div class="grid grid-cols-12 gap-2 py-2">
        <nuxt-link
          class="col-span-6"
          :to="`/formulir-registrasi/${$route.params.name}`"
        >
          <CardRegistrasi
            :data-title="'Foto atau Upload Formulir Registrasi'"
            :data-img="'image/down_arrow.png'"
          />
        </nuxt-link>
        <nuxt-link
          class="col-span-6"
          :to="`/formulir-redemption/${$route.params.name}`"
        >
          <CardRegistrasi
            :data-title="'Foto atau Upload Formulir Redemption'"
            :data-img="'image/redemption-icon.png'"
          />
        </nuxt-link>

        <CardRegistrasi
          :data-title="'Cek Data Registrasi'"
          :data-img="'image/regist-icon.png'"
        />

        <CardRegistrasi
          :data-title="'Transaksi Penukaran'"
          :data-img="'image/gift-icon.png'"
        />
      </div>

      <Title
        class="pt-2"
        :title="'Ringkasan Data Penjualan & Data Poin'"
        :style-title="'font-bold'"
      />

      <Subtitle
        :style-subtitle="'font-normal text-sm'"
        :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
      />
      <Tabs url="home" :tabs="tabs">
        <template #activeTab_0>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN PER QUARTER'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataQuarter"
                :key="data.kuartal"
                class="p-2"
                :title="data.kuartal"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between">
                  <h3>Target</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.targetconvert }}
                  </p>
                </div>
                <div class="flex justify-between py-2">
                  <h3>Aktual</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.aktualconvert }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <h3>Pencapaian</h3>
                  <p class="font-bold text-base">{{ data.pencapaian }}</p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN PER TAHUN'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataMonth"
                :key="data.bulan"
                class="p-2"
                :title="data.bulan"
                :pencapaian="data.pencapaian"
              >
                <div class="flex justify-between">
                  <h3>Target</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.targetconvert }}
                  </p>
                </div>
                <div class="flex justify-between py-2">
                  <h3>Aktual</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.aktualconvert }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <h3>Pencapaian</h3>
                  <p class="font-bold text-base">{{ data.pencapaian }}</p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
        </template>
        <template #activeTab_1>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN PER QUARTER'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataPoinQuarter"
                :key="data.quarter"
                class="p-2"
                :title="data.quarter"
                :pencapaian="data.achieveconvert"
              >
                <div class="flex justify-between">
                  <h3>Target</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.targetconvert }}
                  </p>
                </div>
                <div class="flex justify-between py-2">
                  <h3>Aktual</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.aktualconvert }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <h3>Pencapaian</h3>
                  <p class="font-bold text-base">{{ data.achieveconvert }}</p>
                </div>
              </Accordion>
            </template>
          </TableFourColoumn>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN PER TAHUN'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Accordion
                v-for="data in dataPoin"
                :key="data.month"
                class="p-2"
                :title="data.month"
                :pencapaian="data.achieveconvert"
              >
                <div class="flex justify-between">
                  <h3>Target</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.targetconvert }}
                  </p>
                </div>
                <div class="flex justify-between py-2">
                  <h3>Aktual</h3>
                  <p class="font-bold text-base">
                    Rp. {{ data.aktualconvert }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <h3>Pencapaian</h3>
                  <p class="font-bold text-base">{{ data.achieveconvert }}</p>
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
    Accordion,
    Title,
    Subtitle,
    Navbar,
    TableTwoColoumn,
    Tabs,
    TableFourColoumn,
    CardRegistrasi,
    CardWithThreeColoumn,
    BottomNav
  },
  data() {
    return {
      lists: listCardRegistrasi.list,
      contents: listContentCard.list3,
      listTheadPercent: ['BULAN', 'TARGET', 'AKTUAL', '%'],
      listThead: ['BULAN', 'TARGET', 'AKTUAL', 'POIN'],
      tabs: ['Penjualan', 'Point Reward'],
      params: this.$route.params.name,
    }
  },
  methods: {
    getPoint(key) {
      return this.dataOutlet[key]
    },
  },
}
</script>

<style>
</style>