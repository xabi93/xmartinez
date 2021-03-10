<template>
  <footer class="bg-header-gb w-full">
    <div
      class="container mx-auto pt-6 pb-3 px-10 sm:pt-12 sm:pb-8 text-center text-white"
    >
      <mail-me />
      <span class="mx-2">or</span>
      <cv />
      <social class="border-white mt-6 w-full mx-auto" />
    </div>
    <div class="text-center">
      <span class="text-gray-600 text-xs mt-2">
        Made with <fa :icon="hearth" /> and <fa :icon="vuejs" />
      </span>
    </div>
  </footer>
</template>

<script>
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'

import Social from './social'
import MailMe from './mail-me'
import Cv from './cv'

export default {
  name: 'Footer',
  components: {
    Social,
    MailMe,
    Cv,
  },
  computed: {
    hearth() {
      return faHeart
    },
    vuejs() {
      return faVuejs
    },
  },
}
</script>
