<template>
  <layout title="About me">
    <div class="flex flex-row flex-wrap justify-between">
      <div class="md:w-8/12 w-full text-xl">
        <p>
          My name is Xabier Martinez Moreno, I was born in Basque Country in
          1993, but moved to Barcelona some years ago.
        </p>
        <p>
          I'm Software Developer, mainly focused on backend development, but I
          dont discard any opportunity to learn and work with new tools. About
          my personality, I'm an ambitious developer, always looking for new
          challenges. I also love work in team.
        </p>
        <p>
          I spend my free time between learning new things to improve my self as
          developer, and doing sport, as it gives me the opportunity to beat
          myself.
        </p>
      </div>
      <div class="md:w-3/12 w-full mb-2">
        <info-box text="Xabier Martinez Moreno" icon="smile" />
        <info-box :text="age" icon="birthday-cake" />
        <info-box text="Barcelona, Spain" icon="home" />
        <info-box text="Software developer" icon="keyboard" />
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '../layout'
import InfoBox from './info-box'

export default {
  name: 'AboutMe',
  components: {
    Layout,
    InfoBox
  },
  data() {
    return {
      birthday: new Date(1993, 1, 17),
      currentDate: new Date()
    }
  },
  computed: {
    age() {
      return (
        (this.currentDate.getTime() - this.birthday.getTime()) / 31536000000
      )
    }
  },
  mounted() {
    setInterval(() => {
      this.currentDate = new Date()
    }, 1000)
  }
}
</script>
