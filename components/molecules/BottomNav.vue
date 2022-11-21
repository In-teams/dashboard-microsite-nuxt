<template>
  <div class="w-full h-14">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section
      id="bottom-navigation"
      style="min-width: 340px; max-width: 640px"
      class="block fixed mx-auto inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs " class="flex">
        <a
          @click="to"
          class="
            w-full
            focus:text-teal-500
            hover:text-teal-500
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <div class="mx-auto flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
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
                stroke-dasharray
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#000000">
                  <path
                    d="M85.82503,14.33333c-1.14611,0.03914 -2.24966,0.44378 -3.14941,1.15479l-50.92953,40.12353c-6.46397,5.09418 -10.24609,12.87841 -10.24609,21.10807v68.40527c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-35.83333c0,-1.05724 0.73442,-1.79167 1.79167,-1.79167h17.91667c1.05724,0 1.79167,0.73442 1.79167,1.79167v35.83333c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-68.40527c0,-8.22966 -3.78213,-16.01389 -10.24609,-21.10807l-50.92953,-40.12353c-0.99396,-0.7852 -2.23327,-1.19417 -3.49935,-1.15479zM86,26.55306l47.60514,37.50602c3.8847,3.06149 6.14486,7.71798 6.14486,12.66064v66.61361h-32.25v-34.04167c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167h-17.91667c-6.86192,0 -12.54167,5.67974 -12.54167,12.54167v34.04167h-32.25v-66.61361c0,-4.94267 2.26016,-9.59916 6.14486,-12.66064z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <span class="tab tab-home block text-xs">Home</span>
        </a>

        <a
          href="#"
          class="
            w-full
            justify-center
            inline-block
            text-center
            click-pointer
            relativ
          "
        >
          <div
            class="flex justify-center absolute top-0 h-16 w-16"
            style="top: -2rem; left: 50%; transform: translateX(-50%)"
          >
            <img
              class="absolute"
              src="https://i.ibb.co/Yk5TC7R/icon-wa-v-2.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="absolute bottom-0 inset-x-0">
            <span class="tab tab-kategori text-xs">Whatsapp</span>
          </div>
        </a>

        <a
          @click="logout()"
          href="#"
          class="
            w-full
            focus:text-teal-500
            hover:text-teal-500
            justify-center
            inline-block
            text-center
            pt-2
            pb-1
          "
        >
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
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
                stroke-dasharray
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#000000">
                  <path
                    d="M85.89502,14.33333c-1.86415,0.02787 -3.64407,0.78102 -4.96207,2.09961l-21.5,21.5c-1.87223,1.79752 -2.62641,4.46675 -1.97168,6.97825c0.65472,2.5115 2.61605,4.47282 5.12755,5.12755c2.5115,0.65472 5.18073,-0.09946 6.97825,-1.97168l9.26628,-9.26627v65.11589c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-65.11589l9.26628,9.26627c1.79752,1.87223 4.46675,2.62641 6.97825,1.97168c2.5115,-0.65472 4.47282,-2.61605 5.12755,-5.12755c0.65472,-2.5115 -0.09946,-5.18073 -1.97168,-6.97825l-21.5,-21.5c-1.36945,-1.37003 -3.23513,-2.12741 -5.17204,-2.09961zM132.63232,33.95768c-2.91608,-0.04768 -5.57025,1.67634 -6.71224,4.35993c-1.14198,2.68359 -0.54402,5.79154 1.51221,7.8598c9.94438,10.2909 15.90104,24.24 15.90104,39.82259c0,31.74865 -25.58468,57.33333 -57.33333,57.33333c-31.74865,0 -57.33333,-25.58468 -57.33333,-57.33333c0,-15.41416 6.08798,-29.54321 15.93604,-39.83659c2.73661,-2.8603 2.63634,-7.3975 -0.22396,-10.13411c-2.8603,-2.73661 -7.3975,-2.63634 -10.13411,0.22396c-12.33995,12.89795 -19.9113,30.56024 -19.9113,49.74674c0,39.49518 32.17149,71.66667 71.66667,71.66667c39.49518,0 71.66667,-32.17149 71.66667,-71.66667c0,-19.26174 -7.45934,-36.87414 -19.93229,-49.78174c-1.32546,-1.41184 -3.16581,-2.22725 -5.10205,-2.26058z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <span class="tab tab-account block text-xs">Log Out</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.push(
        '/home/' + `${localStorage.user_id2}/${localStorage.level}`
      )
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('token2')
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_id2')
      localStorage.removeItem('level')
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
#bottom-navigation {
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.4));
}
</style>