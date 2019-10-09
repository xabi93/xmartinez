<template>
  <layout title="Experience">
    <timeline>
      <item
        date-start="Nov 2018"
        date-end="Present"
        title="Software developer"
        location="Arex"
        link="https://arex.io/"
      >
        Working as a software developer on Node.js and Golang microservices on
        back-end and Vue.js on front-end. Now, we are working on migrate a
        monolith into microservices while we improve current functionalities. At
        first this was challenging because I changed from PHP to Node.js and
        Golang.
      </item>
      <item
        date-start="Nov 2018"
        date-end="Present"
        title="Software developer"
        location="Arex"
        link="https://arex.io/"
      >
        Working as a software developer on Node.js and Golang microservices on
        back-end and Vue.js on front-end. Now, we are working on migrate a
        monolith into microservices while we improve current functionalities. At
        first this was challenging because I changed from PHP to Node.js and
        Golang.
      </item>
    </timeline>
  </layout>
</template>

<script>
import Layout from '../layout'
import Timeline from './timeline'
import Item from './item'

export default {
  name: 'AboutMe',
  components: {
    Layout,
    Timeline,
    Item
  }
}
</script>
