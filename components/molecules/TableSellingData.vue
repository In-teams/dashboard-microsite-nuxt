<template>
  <div class="py-2 mx-auto xl:w-full">
    <div
      v-if="title !== 'Total Pencapaian'"
      class="py-2 bg-purple-900 border rounded-t-2xl p-20"
    >
      <div class="max-w-md mx-auto">
        <Title
          :style-title="'text-center text-white font-bold'"
          :title="title_id"
        />

        <Subtitle
          :style-subtitle="' text-center text-white font-bold  '"
          :subtitle="title"
        />
      </div>
    </div>
    <div
      v-if="title !== 'Total Pencapaian'"
      class="border-r-2 border-b-2 border-l-2 rounded-b-xl py-1 border-gray-300"
    >
      <div class="grid grid-cols-2">
        <div>
          <p class="text-gray-400 font-bold text-xs text-center">
            TARGET PENJUALAN
          </p>
          <p class="text-gray-900 font-bold text-md text-center">
            Rp.{{ target }}
          </p>
        </div>

        <div>
          <p class="text-gray-400 font-bold text-xs text-center">
            AKTUAL PENJUALAN
          </p>
          <p class="text-gray-900 font-bold text-md text-center">
            Rp.{{ aktual }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 py-1">
        <div>
          <p class="text-gray-400 font-bold pt-1 text-xs text-center">
            SELISIH PENJUALAN
          </p>
          <p class="text-gray-900 font-bold text-md text-center">
            Rp.{{ selisih }}
          </p>
        </div>
        <div class="self-center px-2">
          <CardWithThreeColoumn
            :icons="'image/pink-trophy-icon.png'"
            :title="'Pencapaian'"
            :points="pencapaian"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 py-1">
        <div class="col-span-7 px-2 self-center">
          <p
            class="
              text-gray-400
              whitespace-nowrap
              font-bold
              pt-1
              text-xxs text-left
            "
          >
            Tekan tombol lihat detail penjualan
          </p>
        </div>
        <div
          class="self-center col-span-5 px-2 text-center"
          v-if="$route.fullPath == '/penjualan-perwilayah?value=Outlet'"
        >
          <nuxt-link :to="`/ringkasan-penjualan-outlet/${title_id}`">
            <Button
              :title-button="'Detail'"
              :style-button="'border-2 rounded-full py-1 bg-pink-300 w-full col-span-4'"
              :style-title-button="'text-xs text-black font-bold text-center'"
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
              :style-button="'border-2 rounded-full py-1 bg-pink-300 w-full col-span-4'"
              :style-title-button="'text-xs text-black font-bold text-center'"
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
              :style-button="'border-2 rounded-full py-1 bg-pink-300 w-full col-span-4'"
              :style-title-button="'text-xs text-black font-bold text-center'"
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
              :style-button="'border-2 rounded-full py-1 bg-pink-300 w-full col-span-4'"
              :style-title-button="'text-xs text-black font-bold text-center'"
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
              :style-button="'border-2 rounded-full py-1 bg-pink-300 w-full col-span-4'"
              :style-title-button="'text-xs text-black font-bold '"
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