<template>
  <layout id="experience" :title="data.title">
    <div class="timeline-container relative sm:timeline-container-sm">
      <item v-for="(item, i) in data.list" :key="i" :job="item" class="mb-5" />
    </div>
  </layout>
</template>

<script>
import Layout from '../layout'
import Item from './item'

export default {
  name: 'AboutMe',
  components: {
    Layout,
    Item
  },
  data() {
    return {
      data: this.$t('sections.experience')
    }
  }
}
</script>

<style scoped>
@responsive {
  .timeline-container::before {
    @apply absolute w-1 bg-gray-400 top-0 bottom-0;

    content: '';
    left: 1.5rem;
  }
  .timeline-container-sm::before {
    left: 2.5rem;
  }
}
</style>
