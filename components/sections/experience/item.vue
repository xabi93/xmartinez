<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div
      class="border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal"
    >
      <div class="bg-white flex items-center border-b border-grey-lighter">
        <div>
          <img
            class="h-12 w-12 rounded-full bg-black"
            src="~/assets/img/arex.png"
          />
        </div>
        <div class="ml-4 flex-1 py-4">
          <div class="flex items-bottom justify-between">
            <p class="text-grey-darkest">{{ location }}</p>
            <p class="text-xs text-grey-darkest">{{ dateInterval }}</p>
          </div>
          <p class="text-grey-dark mt-1 text-sm">{{ title }}</p>
        </div>
      </div>

      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem nihil.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    dateStart: {
      type: [String],
      required: true
    },
    dateEnd: {
      type: [String],
      default: null
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  computed: {
    dateInterval() {
      return this.dateEnd
        ? `${this.dateStart} - ${this.dateEnd}`
        : this.dateStart
    }
  }
}
</script>
