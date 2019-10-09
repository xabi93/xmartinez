<template>
  <div>
    <my-header />
    <div class="container mx-auto my-20">
      <about-me />
      <experience />
    </div>
  </div>
</template>

<script>
import MyHeader from '~/components/header'
import AboutMe from '~/components/sections/about-me'
import Experience from '~/components/sections/experience'

export default {
  components: {
    MyHeader,
    AboutMe,
    Experience
  }
}
</script>
