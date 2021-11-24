<template>
  <div>
    <header>
      <a
        aria-label="Linkedin"
        class="z-10 mt-9 absolute md:ml-12 ml-2"
        href="#"
      >
        <img class="h-20" src="image/mvg-icon.png" alt="" srcset="" />
      </a>
    </header>
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
        <h1 class="text-3xl font-bold leading-normal">Log in</h1>
        <p class="text-sm leading-normal"></p>
        <form class="space-y-5 mt-5">
          <div
            class="
              relative
              flex
              items-center
              border border-gray-500
              focus:ring focus:border-blue-500
              rounded
            "
          >
            <input
              id="password"
              class="
                w-full
                rounded
                px-3
                pt-5
                outline-none
                pb-2
                focus:outline-none
                active:outline-none
                input
                active:border-blue-500
              "
              type="text"
              v-model="username"
              autofocus
            />
            <label
              for="password"
              class="
                label
                absolute
                mb-0
                pl-3
                leading-tighter
                text-gray-500 text-base
                cursor-text
              "
              >Username</label
            >
          </div>
          <div
            class="
              relative
              flex
              items-center
              border border-gray-500
              focus:ring focus:border-blue-500
              rounded
            "
          >
            <input
              id="password"
              class="
                w-full
                rounded
                px-3
                pt-5
                outline-none
                pb-2
                focus:outline-none
                active:outline-none
                input
                active:border-blue-500
              "
              type="password"
              v-model="password"
            />
            <label
              for="password"
              class="
                label
                absolute
                mb-0
                pl-3
                leading-tighter
                text-gray-500 text-base
                cursor-text
              "
              >Password</label
            >
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