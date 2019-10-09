<template>
  <div class="w-full lg:flex">
    <div class="flex justify-between leading-normal sm:p-4">
      <img
        :alt="job.company"
        :src="require(`~/assets/img/companies/${job.logo}`)"
        class="w-12 h-12 rounded-full mr-4 border border-grey-light z-10 bg-white"
      />
      <div>
        <div class="text-sm">
          <p>
            <span class="text-black font-bold text-xl block md:inline">{{
              job.title
            }}</span>
            {{ $d(new Date(job.start), 'yearMonth') }}
            -
            {{ endDate }}
          </p>
          <a
            :href="job.website"
            target="_blank"
            rel="noopener"
            class="text-link font-semibold"
            >{{ job.company }}</a
          >
        </div>
        <ul class="">
          <li
            v-for="(desc, i) in job.description"
            :key="i"
            class="my-3 text-grey-darker text-base flex"
          >
            <div class="mr-2">
              <fa :icon="check" />
            </div>
            <div class="text-justify">
              {{ desc }}
            </div>
          </li>
        </ul>
        <div>
          <tag v-for="(tag, i) in job.tags" :key="i" :name="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isNil } from 'ramda'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Tag from './tag'

export default {
  name: 'Item',
  components: {
    Tag
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    endDate() {
      return isNil(this.job.end)
        ? this.$t('sections.experience.present')
        : this.$d(new Date(this.job.end), 'yearMonth')
    },
    check() {
      return faCheck
    }
  }
}
</script>
