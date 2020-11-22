<template>
  <layout id="experience" :title="data.title">
    <div class="timeline-container relative">
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
    Item,
  },
  data() {
    return {
      data: this.$t('sections.experience'),
    }
  },
}
</script>

<style scoped>
.timeline-container::before {
  content: '';
  position: absolute;
  width: 0.25rem;
  background-color: #e2e8f0;
  top: 0;
  bottom: 0;
  left: 2.35rem;
}
</style>
