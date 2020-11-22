<template>
  <div>
    <my-header />
    <div class="flex container mx-auto">
      <about-me class="w-3/12" />
      <div class="w-px mx-1 bg-gray-900" />
      <experience class="w-9/12" />
    </div>
  </div>
</template>

<script>
import MyHeader from '~/components/cv/header'
import Experience from '~/components/cv/sections/experience'
import AboutMe from '~/components/cv/sections/about-me'

export default {
  components: {
    MyHeader,
    Experience,
    AboutMe,
  },
}
</script>

<style lang="scss">
html,
body {
  width: 21cm;
  height: 29.7cm;
  margin-left: auto;
  margin-right: auto;
}
</style>
Footer
