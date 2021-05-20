<template>
  <a
    :href="link"
    :aria-label="label"
    target="_blank"
    rel="noopener"
    class="px-2 text-gray-600 hover:text-white"
  >
    <fa :icon="icon" class="fa-2x" />
  </a>
</template>
<script>
export default {
  name: 'SocialLink',
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: [String],
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
}
</script>
