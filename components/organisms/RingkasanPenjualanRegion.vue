<template>
  <div>
    <Navbar :nav-title="'RINGKASAN DATA PENJUALAN'" />
    <div class="px-2 mt-20">
      <TableTwoColoumn
        v-show="data.region != 'Total Pencapaian'"
        v-for="data in dataRegion"
        :key="data.region"
        :poin-perolehan="data.achieveconvert"
        :poin-penukaran="data.redeemconvert"
        :sisa-poin="data.diff_pointconvert"
        :isLoading="isLoading"
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
          <Skeleton v-if="isLoading" />
          <div v-if="!isLoading" class="">
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
              <div class="self-center">
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
          </div>
        </template>
        <template #table>
          <div v-if="!isLoading" class="grid grid-cols-12 gap-1 px-1 py-2">
            <ListAccordionHome
              class="col-span-12 px-1"
              :pencapaian="'Tekan untuk melihat detail list'"
            >
              <div class="px-4">
                <CardWithThreeColoumn
                  :title="'Persentase Pencapaian'"
                  :icons="'https://i.ibb.co/FKNcqtn/trophy-icon.png'"
                  :points="data.percentage"
                />
                <CardWithThreeColoumn
                  :title="'AO/RO'"
                  :icons="'https://i.ibb.co/3cq5cB1/vs-icon.png'"
                  :points="data.aoro"
                />
                <CardWithThreeColoumn
                  :title="'Sudah Registrasi'"
                  :icons="'https://i.ibb.co/frcsgQB/check-icon.png'"
                  :points="data.regist"
                />
                <CardWithThreeColoumn
                  :title="'Belum Registrasi'"
                  :icons="'https://i.ibb.co/3fHkCYc/x-icon.png'"
                  :points="data.notregist"
                />
                <CardWithThreeColoumn
                  :title="'Total Peserta'"
                  :icons="'https://i.ibb.co/znLrr3W/outlet-icon.png'"
                  :points="data.outlet"
                />
                <CardWithThreeColoumn
                  :title="'Progres Registrasi'"
                  :icons="'https://i.ibb.co/4mLKSvS/loading-icon.png'"
                  :points="data.regist_progress"
                />
              </div>
            </ListAccordionHome>
          </div>
        </template>
        <template #buttonDetail>
          <div v-if="!isLoading" class="flex justify-between mx-auto px-4 py-2">
            <Paragraph
              class="self-center text-left"
              :style-paragraph="'text-xs text-gray-400 font-medium'"
              :paragraph="'  Tekan tombol untuk lihat detail'"
            />
            <nuxt-link :to="`/selling-detail-region/${data.region_id}`">
              <Button
                :title-button="'Detail'"
                :style-button="'text-center items-center flex justify-center'"
                :style-title-button="' border-2 border-indigo-200 bg-blue-100 p-2 rounded-2xl text-xs text-black font-bold'"
              />
            </nuxt-link>
          </div>
        </template>
      </TableTwoColoumn>
      <div class="py-3">
        <TableFourColoumn
          :title-header="'REGISTRASI'"
          :style-header="' py-3 bg-red-600 rounded-t-2xl tracking-wide'"
          :data-table-registrasi="dataTableRegistrasi"
        >
          <template #trow>
            <Skeleton v-if="isLoading" />
            <Accordion
              v-else
              :border="'red'"
              class="p-2"
              v-for="data in dataTableRegistrasi"
              :key="data.level"
              :title="data.level"
              :pencapaian="data.total"
            >
              <div>
                <div id="level1" class="block">
                  <div
                    v-if="data.level == 'Level 1'"
                    class="flex justify-between py-2"
                    v-show="data['1A'] !== 0"
                  >
                    <h3 class="text-xs uppercase self-center">LEVEL 1A</h3>
                    <p class="font-bold text-sm">
                      {{ data['1A'] }} / {{ data['1Apercent'] }}
                    </p>
                  </div>
                  <div
                    v-if="data.level == 'Level 1'"
                    class="flex justify-between py-2"
                    v-show="data['1A'] !== 0"
                  >
                    <h3 class="text-xs uppercase self-center">STATUS</h3>
                    <p class="font-bold text-sm">
                      {{ data['1Astatus'].split('-').shift() }}
                    </p>
                  </div>
                  <div
                    v-if="data.level == 'Level 1'"
                    class="block"
                    v-show="data['1A'] !== 0"
                  >
                    <div class="flex justify-between">
                      <p
                        class="font-bold text-sm self-center py-2 text-red-400"
                      >
                        {{ data['1Astatus'].split('-').pop() }}
                      </p>
                    </div>
                  </div>
                </div>
                <div id="level2" class="block">
                  <div
                    v-if="data.level == 'Level 2'"
                    class="flex justify-between py-2"
                    v-show="data['2A'] !== 0"
                  >
                    <h3 class="text-xs uppercase self-center">LEVEL 2A</h3>
                    <p class="font-bold text-sm">
                      {{ data['2A'] }} / {{ data['2Apercent'] }}
                    </p>
                  </div>
                  <div
                    v-if="data.level == 'Level 2'"
                    class="flex justify-between py-2"
                    v-show="data['2A'] !== 0"
                  >
                    <h3 class="text-xs uppercase self-center">STATUS</h3>
                    <p class="font-bold text-sm">
                      {{ data['2Astatus'].split('-').shift() }}
                    </p>
                  </div>
                  <div
                    v-if="data.level == 'Level 2'"
                    class="block"
                    v-show="data['2A'] !== 0"
                  >
                    <div class="flex justify-between">
                      <p
                        class="font-bold text-sm self-center py-2 text-red-400"
                      >
                        {{ data['2Astatus'].split('-').pop() }}
                      </p>
                    </div>
                  </div>
                </div>
                <div id="level3" class="block">
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3A'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3A</h3>
                      <p class="font-bold text-sm">
                        {{ data['3A'] }} / {{ data['3Apercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3A'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Astatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3A'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Astatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3B'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3B</h3>
                      <p class="font-bold text-sm">
                        {{ data['3B'] }} / {{ data['3Epercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3B'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Bstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3B'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Bstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3C'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3C</h3>
                      <p class="font-bold text-sm">
                        {{ data['3C'] }} / {{ data['3Cpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3C'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Cstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3C'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Cstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3D'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3D</h3>
                      <p class="font-bold text-sm">
                        {{ data['3D'] }} / {{ data['3Dpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3D'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Dstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3D'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Dstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3E'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3E</h3>
                      <p class="font-bold text-sm">
                        {{ data['3E'] }} / {{ data['3Epercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3E'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Estatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3E'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Estatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3F'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3F</h3>
                      <p class="font-bold text-sm">
                        {{ data['3F'] }} / {{ data['3Fpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3F'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Fstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3F'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Fstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3G'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3G</h3>
                      <p class="font-bold text-sm">
                        {{ data['3G'] }} / {{ data['3Gpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3G'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Gstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3G'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Gstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3H'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 3H</h3>
                      <p class="font-bold text-sm">
                        {{ data['3H'] }} / {{ data['3Hpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="flex justify-between py-2"
                      v-show="data['3H'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['3Hstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 3'"
                      class="block"
                      v-show="data['3H'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['3Hstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="level4" class="block">
                  <div class="">
                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4A'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 4A</h3>
                      <p class="font-bold text-sm">
                        {{ data['4A'] }} / {{ data['4Apercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4A'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['4Astatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="block"
                      v-show="data['4A'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['4Cstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4B'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 4B</h3>
                      <p class="font-bold text-sm">
                        {{ data['4B'] }} / {{ data['4Bpercent'] }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4B'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['4Bstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="block"
                      v-show="data['4B'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['4Cstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4C'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">LEVEL 4C</h3>
                      <p class="font-bold text-sm">
                        {{ data['4C'] }} / {{ data['4Cpercent'] }}
                      </p>
                    </div>

                    <div
                      v-if="data.level == 'Level 4'"
                      class="flex justify-between py-2"
                      v-show="data['4C'] !== 0"
                    >
                      <h3 class="text-xs uppercase self-center">STATUS</h3>
                      <p class="font-bold text-sm">
                        {{ data['4Cstatus'].split('-').shift() }}
                      </p>
                    </div>
                    <div
                      v-if="data.level == 'Level 4'"
                      class="block"
                      v-show="data['4C'] !== 0"
                    >
                      <div class="flex justify-between">
                        <p
                          class="
                            font-bold
                            text-sm
                            self-center
                            py-2
                            text-red-400
                          "
                        >
                          {{ data['4Cstatus'].split('-').pop() }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </template>
        </TableFourColoumn>
      </div>
      <div class="pb-2">
        <TableFourColoumn
          :title-header="'KLUSTER PERSENTASE PENCAPAIAN'"
          :style-header="'px-2 py-3 bg-red-600 rounded-t-2xl'"
        >
          <template #trow>
            <Skeleton v-if="isLoading" />
            <Accordion
              v-else
              :border="'red'"
              class="p-2"
              v-for="data in dataPencapaian"
              :key="data.cluster"
              :title="data.cluster"
              :pencapaian="data.percentage"
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
                <h3 class="text-xs uppercase">sisa penjualan</h3>
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
      </div>
      <Title
        class="pt-3"
        :title="'10 Besar Pencapaian Nasional'"
        :style-title="'font-bold'"
      />

      <Subtitle
        :style-subtitle="'font-normal text-xs pt-1'"
        :subtitle="'Pilih tombol yang akan ditampilkan detail penjualannya'"
      />
      <Tabs class="mb-4" url="home" :tabs="tabs">
        <template #activeTab_0>
          <TableFourColoumn
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Skeleton v-if="isLoading" />
              <Accordion
                v-else
                class="p-2"
                v-for="data in dataArea"
                :key="data.area_name"
                :title="data.area_name"
                :pencapaian="data.percentage"
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
                  <h3 class="text-xs uppercase">sisa penjualan</h3>
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
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Skeleton v-if="isLoading" />
              <Accordion
                v-else
                class="p-2"
                v-for="data in dataDistributor"
                :key="data.distributor"
                :title="data.distributor"
                :pencapaian="data.percentage"
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
                  <h3 class="text-xs uppercase">sisa penjualan</h3>
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
            :title-header="'RINGKASAN PENJUALAN 10 BESAR'"
            :style-header="'px-2 py-3 bg-purple-900 border-2 rounded-t-2xl'"
          >
            <template #trow>
              <Skeleton v-if="isLoading" />
              <Accordion
                v-else
                class="p-2"
                v-for="data in dataOutlet"
                :key="data.outlet_name"
                :title="data.outlet_name"
                :pencapaian="data.percentage"
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
                  <h3 class="text-xs uppercase">sisa penjualan</h3>
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
    </div>
    <BottomNav />
  </div>
</template>

 <script>
import ListAccordionHome from '../molecules/ListAccordionHome.vue'
import Skeleton from '../atoms/Skeleton.vue'
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
    'dataPencapaian',
    'dataRegion',
    'dataDistributor',
    'dataArea',
    'dataOutlet',
    'dataTableRegistrasi',
  ],
  components: {
    ListAccordionHome,
    Skeleton,
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
      tabs: ['Area', 'Distributor', 'Outlet'],
      isLoading: true,
    }
  },
  computed: {},
  methods: {
    getPoint(key) {
      return this.dataRegion[key]
    },

    async checkData() {
      this.isLoading = true
      const res = await this.dataRegion
      if (res) {
        this.isLoading = false
      }
    },
  },
  watch: {
    dataRegion: 'checkData',
  },
}
</script>

<style>
</style>