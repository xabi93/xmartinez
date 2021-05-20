<template>
  <a :href="`mailto:${$t('contact.email.url')}`">
    <div
      class="font-bold inline-block rounded-full bg-link py-2 px-6 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <span>{{ $t('contact.email.talk') }}</span>
      <fa :icon="plane" class="ml-2" />
    </div>
  </a>
</template>
<script>
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MailMe',
  computed: {
    plane() {
      return faPaperPlane
    },
  },
}
</script>
