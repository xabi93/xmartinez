<template>
  <a :href="link" target="_blank" class="px-2 text-gray-600 hover:text-white">
    <fa :icon="icon" class="fa-2x" />
  </a>
</template>
<script>
export default {
  name: 'SocialLink',
  props: {
    link: {
      type: [String],
      required: true
    },
    icon: {
      type: Object,
      required: true
    }
  }
}
</script>
