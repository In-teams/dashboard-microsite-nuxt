<template>
  <div>
    <Navbar :NavTitle="'FORMULIR REGISTRASI'" />
    <div class="px-2 mt-20">
      <Title
        :styleTitle="'text-black font-bold'"
        :title="'Foto atau Unggah Formulir Registrasi'"
      />
      <Subtitle
        :subtitle="'Formulir Registrasi difoto / diunggah jika sudah datanya'"
        :styleSubtitle="'text-xs'"
      />

      <div class="py-2 mt-4">
        <div class="border-2 border-gray-400 rounded-xl py-10 text-center">
          <label
            v-show="this.images == null"
            class="flex flex-col px-4 cursor-pointer text-purple-600"
          >
            <svg
              class="object-center mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#9b59b6">
                  <path
                    d="M83.85,13.76c-6.54406,0 -12.64469,4.86438 -15.265,11.61l-2.15,5.59h-18.275v-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44h-24.08c-1.89469,0 -3.44,1.54531 -3.44,3.44v4.8375c-9.84969,3.02344 -17.2,11.87875 -17.2,22.6825v72.24c0,13.26281 10.81719,24.08 24.08,24.08h123.84c13.26281,0 24.08,-10.81719 24.08,-24.08v-72.24c0,-13.26281 -10.81719,-24.08 -24.08,-24.08h-7.955l-2.15,-5.59c-2.62031,-6.74562 -8.7075,-11.61 -15.265,-11.61zM83.85,20.64h38.7c2.63375,0 7.17563,2.98313 8.815,7.2025l3.01,7.8475c0.52406,1.31688 1.81406,2.16344 3.225,2.15h10.32c9.54063,0 17.2,7.65938 17.2,17.2v72.24c0,9.54063 -7.65937,17.2 -17.2,17.2h-123.84c-9.54062,0 -17.2,-7.65937 -17.2,-17.2v-72.24c0,-8.55969 6.16781,-15.61437 14.2975,-16.985c1.65281,-0.25531 2.87563,-1.66625 2.9025,-3.3325v-3.7625h17.2v3.44c0,1.89469 1.54531,3.44 3.44,3.44h24.08c1.41094,0.01344 2.70094,-0.83312 3.225,-2.15l3.01,-7.8475c1.63938,-4.21937 6.18125,-7.2025 8.815,-7.2025zM103.2,44.72c-24.64437,0 -44.72,20.07563 -44.72,44.72c0,24.64438 20.07563,44.72 44.72,44.72c24.64438,0 44.72,-20.07562 44.72,-44.72c0,-24.64437 -20.07562,-44.72 -44.72,-44.72zM24.08,48.16c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88zM103.2,51.6c20.93563,0 37.84,16.90438 37.84,37.84c0,20.93563 -16.90437,37.84 -37.84,37.84c-20.93562,0 -37.84,-16.90437 -37.84,-37.84c0,-20.93562 16.90438,-37.84 37.84,-37.84z"
                  ></path>
                </g>
              </g>
            </svg>
            <span class="mt-2 text-purple-900 text-base leading-normal text-sm">
              Foto atau unggah formulir registrasi</span
            >
            <input
              type="file"
              accept="image/png, image/jpeg"
              @change="uploadFile"
              name="image"
              id="files"
              class="hidden"
            />
          </label>
          <div class="w-full h-1/5" id="preview">
            <img class="mx-auto" v-if="images" :src="images" />
          </div>
        </div>
      </div>
      <Button
        @tesClick="submitFile"
        :titleButton="'Kirim Formulir Registrasi'"
        :styleTitleButton="'text-base'"
        :styleButton="'border-2 border-gray-400 rounded-full text-center bg-purple-200 py-3'"
      />

      <Title
        class="pt-4"
        :styleTitle="'text-black font-bold'"
        :title="'Formulir Registrasi'"
      />
      <Subtitle
        class="pb-2"
        :subtitle="'Tekan foto di bawah ini untuk melihat detail'"
        :styleSubtitle="'text-xs'"
      />
      <div class="grid grid-cols-12 gap-2">
        <CardPhoto
          class="col-span-6"
          v-for="data in dataRegistrasi"
          :key="data.id"
          :tanggal-upload="data.tgl_upload"
          :img="data.filename"
        />
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import BottomNav from '../molecules/BottomNav.vue'
import CardPhoto from '../molecules/CardPhoto.vue'
import Button from '../atoms/Button.vue'
import Subtitle from '../atoms/Subtitle.vue'
import Title from '../atoms/Title.vue'
import Navbar from '../molecules/Navbar.vue'
export default {
  components: {
    CardPhoto,
    Button,
    Subtitle,
    Navbar,
    Title,
    BottomNav,
  },
  props: ['dataRegistrasi'],
  data() {
    return {
      images: null,
    }
  },
  methods: {
    uploadFile(event) {
      this.images = event.target.files[0]
      this.createBase64Image(this.images)
      console.log(event, 'ini')
    },
    createBase64Image(fileObject) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.images = e.target.result
      }
      reader.readAsDataURL(fileObject)
    },
    showFilePreview(e) {
      const files = e.target.files[0] || e.dataTransfer.files[0]
      if (!files.length) return
      this.images = URL.createObjectURL(files[0])
    },
    submitFile(event) {
      const formData = {
        outlet_id: this.$route.params.name,
        file: this.images,
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJNZGx6MDEiLCJuYW1lIjoiIiwidXNlcl9wcm9maWxlIjoiUkVHSU9OICBKQVZBIDEgLSBHUkVBVEVSIEpBS0FSVEEiLCJsZXZlbCI6IjIiLCJlbWFpbCI6IiIsInNjb3BlIjoiUjEiLCJwaG90byI6bnVsbCwicmVnaWQiOiJjZU1yNEM3aGFvMDpBUEE5MWJINXc4OG51REYyWGs0eXpYN2dMWWh1b180Mkt1S1Bma0dqNkduc2p1dmFIcDg3SjY4MjF6ZnVLOXMwV1o2MURNUS03bHV6Skp2TkpnYU5wUVFOT1RjcGlKRXlzTzlBOWJ0MUNNdm82a3Ribmhna1FIV0Ridkc5TGVMTlZ2TUlUVVZoNzJGZyJ9LCJpYXQiOjE2MzYwMDg0NjZ9.pFIalrX5sXFt5E47oOxXiOB4ZqpRZg2wwk2fy7l4yhI',
      }
      axios
        .post('http://api.apolo.inosis.id/api/v1/registration/', formData, {
          headers,
        })
        .then(() => {
          Swal.fire({
            title: 'Sukses Upload',
            icon: 'Success',
          }).then((result) => {
            if (result.value) {
              this.images = null
            }
          })
        })
    },
  },
}
</script>

