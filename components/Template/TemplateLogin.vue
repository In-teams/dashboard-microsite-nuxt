<template>
  <div>
    <div
      class="
        h-screen
        bg-white
        relative
        flex
        space-y-10
        justify-center
        items-center
      "
    >
      <div class="bg-white md:shadow-lg shadow-none rounded p-4 w-full">
        <a aria-label="Linkedin" href="#">
          <img class="h-28 mx-auto" src="image/mvg-icon.png" alt="" srcset="" />
        </a>
        <form class="space-y-5 mt-5">
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              v-model="username"
              name=""
              id=""
              placeholder="Username"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="password"
              v-model="password"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <button>
              <a class="pl-2 outline-none border-none"> Lupa Password </a>
            </button>
          </div>
          <div class="flex self-center">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
                v-model="sk"
              />
            </label>
            <a
              @click="toggleModal = !toggleModal"
              class="
                font-bold
                text-blue-700
                hover:bg-blue-200 hover:underline
                rounded-full
                item-center
                px-2
              "
              href="#"
              >Syarat dan Ketentuan</a
            >
          </div>
          <div
            v-if="toggleModal"
            class="
              fixed
              inset-0
              flex
              justify-center
              items-center
              z-50
              min-h-screen
              max-h-full
            "
          >
            <div class="relative mx-auto max-w-2xl h-screen overflow-y-auto">
              <div
                class="bg-white w-auto h-auto rounded shadow-2xl flex flex-col"
              >
                <div class="text-2xl font-bold text-center">Header text</div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, similique. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio, similique. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio, similique. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, similique.
                  <button
                    class="absolute top-0 right-0 text-white w-1/5 bg-red-500"
                    @click="toggleModal = false"
                  >
                    X
                  </button>
                </span>
              </div>
            </div>
          </div>
          <button
            @click.prevent="getLogin()"
            class="
              w-full
              text-center
              bg-blue-700
              hover:bg-blue-900
              rounded-full
              text-white
              py-3
              font-medium
              disabled:opacity-50
              cursor-not-allowed
            "
            :disabled="sk === false"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      toggleModal: false,
      sk: false,
    }
  },
  methods: {
    getLogin() {
      axios
        .post(`http://api.apolo.inosis.id/api/v1/auth`, {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          const result = response.data.data
          if (+result.level === 1) {
            localStorage.token = result.token
            localStorage.user_id = result.user_id
            this.$router.push(`/home`)
          } else {
            console.log(this.username, this.password)
          }
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style scoped>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}
.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #6b7280;
}
.label {
  transition: all 0.2s ease-out;
  top: 0.1rem;

  left: 0;
}
</style>