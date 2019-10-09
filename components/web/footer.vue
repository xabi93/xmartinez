<template>
  <footer class="bg-header-gb w-full">
    <div class="container mx-auto pt-6 pb-3 px-10 sm:pt-16 sm:pb-8 text-center">
      <mail-me />
      <social class="border-white mt-6 w-full mx-auto" />
    </div>
    <span class="text-gray-600 text-xs mt-1">
      Made with <fa :icon="hearth" /> and <fa :icon="vuejs" />
    </span>
  </footer>
</template>

<script>
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'

import Social from './social'
import MailMe from './mail-me'

export default {
  name: 'Footer',
  components: {
    Social,
    MailMe
  },
  computed: {
    hearth() {
      return faHeart
    },
    vuejs() {
      return faVuejs
    }
  }
}
</script>
