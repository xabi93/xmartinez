<template>
  <div>
    <my-header />
    <div class="container mx-auto">
      <about-me />
      <experience />
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '~/components/header'
import AboutMe from '~/components/sections/about-me'
import Experience from '~/components/sections/experience'
import MyFooter from '~/components/footer'

export default {
  components: {
    MyHeader,
    AboutMe,
    Experience,
    MyFooter,
  },
}
</script>
