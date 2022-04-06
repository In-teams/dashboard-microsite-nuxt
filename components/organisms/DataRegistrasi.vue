<template>
  <div class="bg-gray-100">
    <div>
      <div class="flex flex-row items-center">
        <div>
          <img src="#" alt="" />
        </div>
        <div class="ml-4 my-4">
          <h1 class="text-xl font-semibold">Data Registrasi</h1>

          <p class="text-base font-light">Mohon Lengkapi data dibawah ini</p>
        </div>
      </div>
      <div class="bg-purple-800 py-2 mx-4 rounded-md flex items-center">
        <h1 class="text-center mx-auto text-white text-xl font-semibold">
          {{ this.$route.params.id }}
        </h1>
      </div>
    </div>
    <div class="ml-4 my-4">
      <h1 class="text-lg font-medium">Input Data Outlet</h1>
      <p class="text-sm text-gray-400">
        Nomor EKTP & Nomor Handphone/WA wajib diisi
      </p>
    </div>
    <form @submit="sendData">
      <div class="relative mb-4 ml-4">
        <input
          name=""
          :class="styleInput"
          type="text"
          v-model="Outlet.outlet_name"
        />
        <label
          :class="`${styleLabel} ${
            Outlet.outlet_name ? labelInActive : labelActive
          }`"
        >
          Nama
        </label>
      </div>
      <div class="flex flex-row justify-around w-11/12 mb-4">
        <div>
          <input
            type="radio"
            id="ektp"
            value="personal"
            v-model="Outlet.jenis_badan"
            :required="!Outlet.jenis_badan && Outlet.ektp == ''"
          />
          <label for="ektp">EKTP</label>
        </div>
        <div>
          <input
            type="radio"
            id="npwp"
            value="PT/CV/FIRMA"
            v-model="Outlet.jenis_badan"
            :required="!Outlet.jenis_badan && Outlet.npwp == ''"
          />
          <label for="npwp">NPWP</label>
        </div>
      </div>
      <div class="relative mb-4 ml-4">
        <div v-if="Outlet.jenis_badan === 'personal'">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.ektp"
            maxlength="16"
            minlength="16"
            :required="Outlet.ektp == ''"
            pattern="[0-9]*"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.ektp ? labelInActive : labelActive
            }`"
          >
            EKTP
          </label>
        </div>
        <div v-if="Outlet.jenis_badan === 'PT/CV/FIRMA'">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.npwp"
            maxlength="15"
            minlength="15"
            :required="Outlet.npwp == ''"
            pattern="[0-9]*"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.npwp ? labelInActive : labelActive
            }`"
          >
            NPWP
          </label>
        </div>
      </div>
      <div class="relative mb-4 ml-4">
        <input
          name=""
          :class="styleInput"
          type="text"
          v-model="Outlet.no_wa"
          maxLength="13"
          minLength="11"
          pattern="[0-9]*"
          :required="!Outlet.no_wa"
        />
        <label
          :class="`${styleLabel} ${Outlet.no_wa ? labelInActive : labelActive}`"
        >
          No. HP
        </label>
      </div>
      <div class="relative mb-4 ml-4">
        <input
          name=""
          :class="styleInput"
          type="text"
          v-model="Outlet.alamat1"
          :required="!Outlet.alamat1"
        />
        <label
          :class="`${styleLabel} ${
            Outlet.alamat1 ? labelInActive : labelActive
          }`"
        >
          Alamat Pengiriman Hadiah
        </label>
      </div>
      <div class="flex flex-row justify-around w-11/12">
        <div class="relative mb-4 ml-4">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.rtrw"
            :required="!Outlet.rtrw"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.rtrw ? labelInActive : labelActive
            }`"
          >
            RT/RW
          </label>
        </div>

        <div class="relative mb-4 ml-4 -mr-3">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.kodepos"
            maxLength="5"
            minLength="5"
            pattern="[0-9]*"
            :required="!Outlet.kodepos"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.kodepos ? labelInActive : labelActive
            }`"
          >
            Kode Pos
          </label>
        </div>
      </div>

      <div class="mb-4 ml-4">
        <select
          name="dataProvinsi"
          v-model="Outlet.propinsi"
          class="w-11/12 py-3 px-2"
          @change="getDataCities"
        >
          <option disabled selected value="0">Pilih Provinsi</option>
          <option v-for="(item, i) in provinces" :value="item.id" :key="i">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-4 ml-4">
        <select
          name="dataKabupaten"
          v-model="Outlet.kabupaten"
          class="w-11/12 py-3 px-2"
          @change="getDataDistrict"
        >
          <option disabled selected value="0">Pilih Kabupaten</option>
          <option v-for="(item, i) in cities" :value="item.id" :key="i">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-4 ml-4">
        <select
          name="dataKecamatan"
          v-model="Outlet.kecamatan"
          class="w-11/12 py-3 px-2"
          @change="getDataSubDistrict"
        >
          <option disabled selected value="0">Pilih Kecamatan</option>
          <option v-for="(item, i) in districts" :value="item.id" :key="i">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-4 ml-4">
        <select
          name="dataKelurahan"
          v-model="Outlet.kelurahan"
          class="w-11/12 py-3 px-2"
        >
          <option disabled selected value="0">Pilih Kelurahan</option>
          <option v-for="(item, i) in subDistricts" :value="item.id" :key="i">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div
        class="
          w-full
          border
          rounded
          bg-white
          flex
          item-center
          justify-center
          mb-10
        "
      >
        <!--        v-if="Outlet.jenis_badan==='PT/CV/FIRMA'"-->
        <div class="py-10 text-center" v-if="Outlet.jenis_badan === 'personal'">
          <label for="forImage">
            <img
              :class="
                Outlet.ektp_file
                  ? 'object-fill h-auto w-full mx-auto cursor-pointer'
                  : 'object-contain w-16 mx-auto cursor-pointer'
              "
              :src="`${
                !Outlet.ektp_file
                  ? require('../../assets/image/upload.svg')
                  : Outlet.ektp_file
              }`"
              alt=""
            />
          </label>
          <input
            name="ektp_file"
            @change="sendImage"
            type="file"
            id="forImage"
            class="hidden invisible"
          />
          <h1 class="text-center font-normal text-base mt-2">
            {{ `${Outlet.ektp_file ? 'Foto Ktp Anda' : 'Upload KTP Anda'}` }}
          </h1>
        </div>
        <div
          class="py-10 text-center"
          v-if="Outlet.jenis_badan === 'PT/CV/FIRMA'"
        >
          <label for="forImage3">
            <img
              :class="
                Outlet.npwp_file
                  ? 'object-fill h-auto w-full mx-auto cursor-pointer'
                  : 'object-contain w-16 mx-auto cursor-pointer'
              "
              :src="`${
                !Outlet.npwp_file
                  ? require('../../assets/image/upload.svg')
                  : Outlet.npwp_file
              }`"
              alt=""
            />
          </label>
          <input
            name="npwp_file"
            @change="sendImage"
            type="file"
            id="forImage3"
            class="hidden invisible"
          />
          <h1 class="text-center font-normal text-base mt-2">
            {{ `${Outlet.npwp_file ? 'Foto NPWP Anda' : 'Upload NPWP Anda'}` }}
          </h1>
        </div>
      </div>

      <div class="mb-4 ml-4">
        <h1 class="text-lg font-medium">Informasi Rekening Bank</h1>
      </div>
      <div class="relative mb-4 ml-4">
        <input
          name=""
          :class="styleInput"
          type="text"
          v-model="Outlet.nama_rekening"
          :required="!Outlet.nama_rekening"
        />
        <label
          :class="`${styleLabel} ${
            Outlet.nama_rekening ? labelInActive : labelActive
          }`"
        >
          Nama Nasabah
        </label>
      </div>
      <div class="relative mb-4 ml-4">
        <input
          name=""
          :class="styleInput"
          type="text"
          v-model="Outlet.nomor_rekening"
          :required="!Outlet.nomor_rekening"
        />
        <label
          :class="`${styleLabel} ${
            Outlet.nomor_rekening ? labelInActive : labelActive
          }`"
        >
          No Rekening
        </label>
      </div>
      <div class="relative mb-4 ml-4">
        <select
          name="dataBank"
          class="w-11/12 py-3 px-2"
          v-model="Outlet.nama_bank"
        >
          <option disabled selected value="0">Pilih Bank</option>
          <option v-for="(item, i) in dataBank" :value="item.id_bank" :key="i">
            {{ item.nama_bank }}
          </option>
        </select>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <div class="relative mb-4 ml-4">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.cabang_bank"
            :required="!Outlet.cabang_bank"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.cabang_bank ? labelInActive : labelActive
            }`"
          >
            Cabang Bank
          </label>
        </div>
        <div class="relative mb-4 mx-4 mr-4">
          <input
            name=""
            :class="styleInput"
            type="text"
            v-model="Outlet.kota_bank"
            :required="!Outlet.kota_bank"
          />
          <label
            :class="`${styleLabel} ${
              Outlet.kota_bank ? labelInActive : labelActive
            }`"
          >
            Kota Bank
          </label>
        </div>
      </div>
      <div
        class="
          w-full
          border
          rounded
          bg-white
          flex
          item-center
          justify-center
          mb-8
        "
      >
        <div class="py-10 text-center">
          <label for="forImage2">
            <img
              :class="
                Outlet.bank_file
                  ? 'object-fill h-auto w-full mx-auto cursor-pointer'
                  : 'object-contain w-16 mx-auto cursor-pointer'
              "
              :src="`${
                !Outlet.bank_file
                  ? require('../../assets/image/upload.svg')
                  : Outlet.bank_file
              }`"
              alt=""
            />
          </label>
          <input
            name="bank_file"
            @change="sendImage"
            type="file"
            id="forImage2"
            class="hidden invisible"
          />
          <h1 class="text-center font-normal text-base mt-2">
            {{
              `${Outlet.bank_file ? 'Foto Buku Bank Anda' : 'Upload Buku Bank'}`
            }}
          </h1>
        </div>
      </div>
      <Button
        class="
          mx-auto
          bg-purple-800
          rounded-full
          py-2
          justify-center
          flex flex-row
          items-center
          w-9/12
          mb-10
        "
        :isTitle="true"
        type="submit"
      >
        <div>
          <div><h1 class="text-xl text-white mx-auto">Kirim</h1></div>
          <!-- <div class="ml-8">
            <img class="w-8 h-8" src="#" alt="" />
          </div> -->
        </div>
      </Button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  data() {
    return {
      styleInput:
        'bg-gray-100 appearance-none border border-blue-100 rounded-lg w-11/12 py-3 px-3 text-gray-700 font-semibold focus:outline-none focus:border-blue-300',
      styleLabel:
        'bg-gray-100 absolute left-2 w-auto px-2 text-gray-400 cursor-text focus:text-sm transition-all',
      labelActive: 'focus:-top-3 top-3 focus:text-gray-400 ',
      labelInActive: '-top-3 text-gray-400 text-sm ',
      Outlet: {},
      dataBank: [],
      provinces: [],
      cities: [],
      districts: [],
      subDistricts: [],
    }
  },

  methods: {
    async getDataOutlet() {
      const result = await axios.get(
        `https://api.apolo.v2.inosis.id/api/v1/registration/${this.$route.params.id}`,
        {
          headers: {
            Authorization: localStorage.token2,
          },
        }
      )
      const dataOutlet = result.data.data
      if (!dataOutlet.jenis_badan && !dataOutlet.ektp && dataOutlet.npwp)
        dataOutlet.jenis_badan = 'PT/CV/FIRMA'
      if (!dataOutlet.jenis_badan && dataOutlet.ektp && !dataOutlet.npwp)
        dataOutlet.jenis_badan = 'personal'
      if (!dataOutlet.jenis_badan && !dataOutlet.ektp && !dataOutlet.npwp)
        dataOutlet.jenis_badan = 'personal'

      this.Outlet = dataOutlet
      this.getDataCities()
      this.getDataProvinces()
      this.getDataDistrict()
      this.getDataSubDistrict()
      return result
      // this.dataProvinsi = result.data.data.propinsi.toUpperCase()
      // this.dataKabupaten = result.data.data.kabupaten.toUpperCase()
      // this.dataKecamatan = result.data.data.kecamatan.toUpperCase()
      // this.dataKelurahan = result.data.data.kelurahan.toUpperCase()
    },
    async getDataBank() {
      const result = await axios.get(
        'https://api.app-quarter.inosis.id/api/v1/banks',
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      )
      this.dataBank = result.data.data
      return result
    },
    async getDataProvinces() {
      const result = await this.$axios.$get('/api/v2/provinces', {
        params: {
          per_page: 100,
        },
        headers: {
          Authorization: localStorage.token2,
        },
      })

      this.provinces = result.data
      this.getDataCities()
      return result
    },
    async getDataCities() {
      if (this.Outlet.propinsi) {
        const result = await this.$axios.$get(
          `/api/v2/provinces/${this.Outlet.propinsi}/cities`,
          {
            headers: {
              Authorization: localStorage.token2,
            },
          }
        )
        this.cities = result.data
        this.getDataDistrict()
        return result
      }
    },
    async getDataDistrict() {
      if (this.Outlet.propinsi && this.Outlet.kabupaten) {
        const result = await this.$axios.$get(
          `/api/v2/provinces/${this.Outlet.propinsi}/cities/${this.Outlet.kabupaten}/districts`,
          {
            params: {
              per_page: 100,
            },
            headers: {
              Authorization: localStorage.token2,
            },
          }
        )
        this.districts = result.data
        this.getDataSubDistrict()
        return result
      }
    },
    async getDataSubDistrict() {
      if (
        this.Outlet.propinsi &&
        this.Outlet.kabupaten &&
        this.Outlet.kecamatan
      ) {
        const result = await this.$axios.$get(
          `/api/v2/provinces/${this.Outlet.propinsi}/cities/${this.Outlet.kabupaten}/districts/${this.Outlet.kecamatan}/subdistricts`,
          {
            params: {
              per_page: 100,
            },
            headers: {
              Authorization: localStorage.token2,
            },
          }
        )
        this.subDistricts = result.data
        return result
      }
    },
    async sendData(event) {
      event.preventDefault()
      const ektpFile = this.Outlet.ektp_file
      const npwpFile = this.Outlet.npwp_file
      const bankFile = this.Outlet.bank_file
      if (
        this.Outlet.jenis_badan === 'personal' ||
        this.Outlet.jenis_badan === 'PT/CV/FIRMA'
      ) {
        if (this.findType === 'ektp') {
          if (ektpFile?.includes('https')) {
            delete this.Outlet.ektp_file
            delete this.Outlet.npwp
            delete this.Outlet.npwp_file
          } else {
            delete this.Outlet.npwp
            delete this.Outlet.npwp_file
          }
        } else if (this.findType === 'npwp') {
          if (npwpFile?.includes('https')) {
            delete this.Outlet.npwp_file
            delete this.Outlet.ektp
            delete this.Outlet.ektp_file
          } else {
            delete this.Outlet.ektp
            delete this.Outlet.ektp_file
            console.log('asdasdasd')
          }
        }
        if (bankFile?.includes('https')) {
          delete this.Outlet.bank_file
        }
        const formData = {
          ...this.Outlet,
          type: this.findType,
        }

        const result = await this.$axios.put(
          `/api/v1/registration/${this.$route.params.id}`,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem('token2'),
            },
          }
        )
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Diubah',
          showConfirmButton: true,
          // timer: 1500,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
          }
        })

        return result
      } else {
        alert('Jenis Badan Harus Personal atau PT/CV/FIRMA')
      }
    },

    base64File(file, cb) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        cb(reader.result)
      }
      reader.onerror = function (error) {
        cb(error)
      }
    },
    async sendImage(event) {
      try {
        const file = await event.target.files[0]
        this.base64File(file, (result) => {
          if (result) {
            if (event.target.name === 'ektp_file')
              this.Outlet.ektp_file = result
            if (event.target.name === 'bank_file')
              this.Outlet.bank_file = result
            if (event.target.name === 'npwp_file')
              this.Outlet.npwp_file = result
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  watch: {
    'Outlet.propinsi': 'getDataCities',
    'Outlet.kabupaten': 'getDataDistrict',
    'Outlet.kecamatan': 'getDataSubDistrict',
  },
  computed: {
    findType() {
      let typeEktp = ''
      const jenis = this.Outlet.jenis_badan
      if (jenis === 'PT/CV/FIRMA' || jenis === 'personal') {
        typeEktp = 'ektp'
      } else {
        typeEktp = 'npwp'
      }
      return typeEktp
    },
  },
  mounted() {
    this.getDataOutlet()
    this.getDataCities()
    this.getDataProvinces()
    this.getDataDistrict()
    this.getDataSubDistrict()
    this.getDataBank()
  },
}
</script>

<style>
</style>