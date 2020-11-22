<template>
  <div class="w-full lg:flex">
    <div class="bg-white rounded-b p-4 flex justify-between leading-normal">
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
        <p class="text-grey-darker text-base text-justify">
          {{ job.description }}
        </p>
        <div class="mt-3">
          <tag v-for="(tag, i) in job.tags" :key="i" :name="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isNil } from 'ramda'

import Tag from './tag'

export default {
  name: 'Item',
  components: {
    Tag,
  },
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    endDate() {
      return isNil(this.job.end)
        ? this.$t('sections.experience.present')
        : this.$d(new Date(this.job.end), 'yearMonth')
    },
  },
}
</script>
