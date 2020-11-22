<template>
  <layout id="aboutMe" :title="data.title">
    <div class="flex flex-row flex-wrap justify-between">
      <div class="md:w-8/12 w-full text-justify">
        <p v-for="(p, i) in data.paragraphs" :key="i" v-text="p" />
      </div>
      <div class="hidden md:block md:w-3/12 w-full mb-2 fa-ul">
        <info-box :icon="smile" text="Xabier Martinez Moreno" />
        <info-box :text="age" :icon="birthdayCake" />
        <info-box :icon="location" text="Bilbao, Spain" />
        <info-box :icon="keyboard" text="Software developer" />
      </div>
    </div>
  </layout>
</template>

<script>
import { differenceInCalendarYears } from 'date-fns'
import {
  faBirthdayCake,
  faMapMarkerAlt,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

import Layout from '../layout'
import InfoBox from './info-box'

export default {
  name: 'AboutMe',
  components: {
    Layout,
    InfoBox,
  },
  data() {
    return {
      age: differenceInCalendarYears(Date.now(), new Date(1993, 1, 17)),
      currentDate: new Date(),
      data: this.$t('sections.aboutMe'),
    }
  },
  computed: {
    smile() {
      return faSmile
    },
    keyboard() {
      return faKeyboard
    },
    birthdayCake() {
      return faBirthdayCake
    },
    location() {
      return faMapMarkerAlt
    },
  },
  mounted() {
    setInterval(() => {
      this.currentDate = new Date()
    }, 1000)
  },
}
</script>
