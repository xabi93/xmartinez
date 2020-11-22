<template>
  <layout id="contact" title="contact"></layout>
</template>

<script>
import Layout from '../layout'

export default {
  name: 'Contact',
  components: {
    Layout,
  },
  data() {
    return {
      data: this.$t('sections.contact'),
    }
  },
}
</script>
