<template>
  <div class="py-2 mx-auto xl:w-full">
    <div
      v-if="title !== 'Total Pencapaian'"
      class="py-2 bg-purple-900 rounded-t-2xl"
    >
      <div class="max-w-md mx-auto">
        <Title
          :style-title="'text-center text-md text-white tracking-wide'"
          :title="title_id"
        />
        <div class="grid grid-cols-12">
          <Subtitle
            class="col-span-12"
            :style-subtitle="'text-center text-white text-sm tracking-wide '"
            :subtitle="title"
          />
        </div>
      </div>
    </div>

    <div
      v-if="title !== 'Total Pencapaian'"
      class="
        border-r border-b-2 border-l
        rounded-b-xl
        py-1
        border-gray-300
        bg-white
      "
    >
      <div class="grid grid-cols-2 py-2">
        <div>
          <p class="text-gray-400 text-xs text-center py-2 tracking-wide">
            TARGET PENJUALAN
          </p>
          <p class="text-gray-900 font-bold text-md text-center">
            Rp.{{ target }}
          </p>
        </div>

        <div>
          <p class="text-gray-400 text-xs text-center py-2 tracking-wide">
            AKTUAL PENJUALAN
          </p>
          <p
            :class="parseInt(aktual) < 0 ? 'text-red-500' : 'text-blue-500'"
            class="text-gray-900 font-bold text-md text-center"
          >
            Rp.{{ aktual }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 py-1">
        <div>
          <p class="text-gray-400 pt-1 text-xs text-center py-2 tracking-wide">
            SELISIH PENJUALAN
          </p>
          <p
            :class="parseInt(selisih) < 0 ? 'text-red-500' : 'text-blue-500'"
            class="text-gray-900 font-bold text-md text-center"
          >
            Rp.{{ selisih }}
          </p>
        </div>
        <div class="self-center px-2 py-2">
          <CardWithThreeColoumn
            :icons="'image/trophy-icon.png'"
            :title="'Pencapaian'"
            :points="pencapaian"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 py-1">
        <div class="col-span-7 px-2 self-center">
          <p
            class="
              text-xs text-gray-400
              whitespace-nowrap
              font-bold
              pt-1
              text-center
            "
          >
            Tekan tombol lihat detail
          </p>
        </div>
        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Outlet'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-outlet/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border border-blue-100 text-black bg-blue-100 rounded-full py-1 w-full col-span-4'"
              :style-title-button="'text-sm text-black font-bold text-center '"
            />
          </nuxt-link>
        </div>
        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Wilayah'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-wilayah/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border border-blue-100 text-black bg-blue-100 rounded-full py-1 w-full col-span-4'"
              :style-title-button="'text-sm text-black font-bold text-center'"
            />
          </nuxt-link>
        </div>
        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Region'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-region/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border border-purple-700 active:bg-purple-900 rounded-full py-1 w-full col-span-4'"
              :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
            />
          </nuxt-link>
        </div>

        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Area'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-area/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border border-purple-700 active:bg-purple-900 rounded-full py-1 w-full col-span-4'"
              :style-title-button="'text-sm text-purple-900 hover:text-white font-bold text-center'"
            />
          </nuxt-link>
        </div>
        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Distributor'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-distributor/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border border-purple-700 active:bg-purple-900 rounded-full py-1 w-full col-span-4'"
              :style-title-button="'text-xs text-purple-900 font-bold '"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="grid grid-cols-8 py-1 px-2"></div>
    </div>
  </div>
</template>

<script>
import Button from '../atoms/Button.vue'
import listContentCard from '../../data/list-content-card.json'
import CardWithThreeColoumn from '../molecules/CardWithThreeColoumn.vue'
import Title from '../atoms/Title.vue'
import Subtitle from '../atoms/Subtitle.vue'
export default {
  props: ['title', 'target', 'aktual', 'pencapaian', 'title_id', 'selisih'],
  components: {
    Button,
    Title,
    Subtitle,
    CardWithThreeColoumn,
  },
  data() {
    return {
      content: listContentCard.list_2,
    }
  },
}
</script>

<style>
</style>