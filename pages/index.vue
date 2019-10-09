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
import MyHeader from '~/components/web/header'
import AboutMe from '~/components/web/sections/about-me'
import Experience from '~/components/web/sections/experience'
import MyFooter from '~/components/web/footer'

export default {
  components: {
    MyHeader,
    AboutMe,
    Experience,
    MyFooter
  }
}
</script>
