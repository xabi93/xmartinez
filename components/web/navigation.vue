<template>
  <nav
    ref="navBar"
    :class="{ sticky: fixed, 'top-0': fixed }"
    class="w-full bg-gray-900"
  >
    <ul class="flex justify-around text-white">
      <li v-for="(s, id) in $t('sections')" :key="id" class="mr-3">
        <nuxt-link :to="{ path: '/', hash: `#${id}` }">{{ s.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      firstPosition: null,
      fixed: false
    }
  },
  mounted() {
    this.firstPosition = this.$el.getBoundingClientRect().top
    window.addEventListener('load', this.isInViewport)
    window.addEventListener('resize', this.isInViewport)
    window.addEventListener('scroll', this.isInViewport)
  },
  destroyed() {
    window.removeEventListener('load', this.isInViewport)
    window.removeEventListener('resize', this.isInViewport)
    window.removeEventListener('scroll', this.isInViewport)
  },
  methods: {
    isInViewport() {
      this.fixed = this.firstPosition < window.pageYOffset
    }
  }
}
</script>
