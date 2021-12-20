<template>
  <div class="py-2 mx-auto xl:w-full px-2">
    <div v-if="title !== 'Total Pencapaian'">
      <div class="max-w-md mx-auto">
        <ListAccordion :pencapaian="title_id" :title="title" :border="'white'">
          <div
            v-if="title !== 'Total Pencapaian'"
            class="rounded-b-xl pt-2 border-gray-300"
          >
            <div class="flex justify-between gap-4 border-b">
              <div>
                <p class="text-black text-xs text-center py-3 tracking-wide">
                  TARGET PENJUALAN
                </p>
              </div>
              <div class="self-center">
                <p
                  class="
                    text-gray-900
                    font-bold
                    self-center
                    text-md text-center
                  "
                >
                  Rp.{{ target }}
                </p>
              </div>
            </div>

            <div class="flex justify-between gap-4 border-b">
              <div>
                <p class="text-black text-xs text-center py-3 tracking-wide">
                  AKTUAL PENJUALAN
                </p>
              </div>
              <div class="self-center">
                <p
                  :class="parseInt(aktual) < 0 ? 'text-red-500' : 'text-black'"
                  class="text-gray-900 font-bold text-md text-center"
                >
                  Rp.{{ aktual }}
                </p>
              </div>
            </div>

            <div class="flex justify-between gap-4 border-b">
              <div>
                <p class="text-black text-xs text-center py-3 tracking-wide">
                  SELISIH PENJUALAN
                </p>
              </div>
              <div class="self-center">
                <p
                  :class="parseInt(selisih) < 0 ? 'text-red-500' : 'text-black'"
                  class="text-gray-900 font-bold text-md text-center"
                >
                  Rp.{{ selisih }}
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="self-center py-2">
                <CardWithThreeColoumn
                  :icons="'image/trophy-icon.png'"
                  :title="'Pencapaian'"
                  :points="pencapaian"
                />
              </div>

              <div
                class="self-center text-center w-28"
                v-if="
                  $route.fullPath == '/penjualan-perwilayah?value=Outlet&page=1'
                "
              >
                <nuxt-link :to="`/ringkasan-penjualan-outlet/${title_id}`">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'border-2 border-indigo-300 text-black bg-blue-100 rounded-full py-1 '"
                    :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center '"
                  />
                </nuxt-link>
              </div>
              <div
                class="self-center text-center w-32"
                v-if="
                  $route.fullPath ==
                  '/penjualan-perwilayah?value=Wilayah&page=1'
                "
              >
                <nuxt-link :to="`/ringkasan-penjualan-wilayah/${title_id}`">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'border-2 border-indigo-300 text-black bg-blue-100 rounded-full py-1 '"
                    :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
                  />
                </nuxt-link>
              </div>
              <div
                class="self-center text-center w-32"
                v-if="
                  $route.fullPath == '/penjualan-perwilayah?value=Region&page=1'
                "
              >
                <nuxt-link :to="`/ringkasan-penjualan-region/${title_id}`">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'border-2 border-indigo-300 text-black bg-blue-100 rounded-full py-1 '"
                    :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
                  />
                </nuxt-link>
              </div>

              <div
                class="self-center text-center w-32"
                v-if="
                  $route.fullPath == '/penjualan-perwilayah?value=Area&page=1'
                "
              >
                <nuxt-link :to="`/ringkasan-penjualan-area/${title_id}`">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'border-2 border-indigo-300 text-black bg-blue-100 rounded-full py-1 '"
                    :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
                  />
                </nuxt-link>
              </div>
              <div
                class="self-center text-center w-32"
                v-if="
                  $route.fullPath ==
                  '/penjualan-perwilayah?value=Distributor&page=1'
                "
              >
                <nuxt-link :to="`/ringkasan-penjualan-distributor/${title_id}`">
                  <Button
                    :title-button="'Detail'"
                    :style-button="'border-2 border-indigo-300 text-black bg-blue-100 rounded-full py-1 '"
                    :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
        </ListAccordion>
      </div>
    </div>
  </div>
</template>

<script>
import ListAccordion from '../molecules/ListAccordion.vue'
import Button from '../atoms/Button.vue'
import listContentCard from '../../data/list-content-card.json'
import CardWithThreeColoumn from '../molecules/CardWithThreeColoumn.vue'

export default {
  props: ['title', 'target', 'aktual', 'pencapaian', 'title_id', 'selisih'],
  components: {
    Button,
    CardWithThreeColoumn,
    ListAccordion,
  },
  data() {
    return {
      currentPage: 1,
      content: listContentCard.list_2,
    }
  },
}
</script>


<style scoped>
</style>