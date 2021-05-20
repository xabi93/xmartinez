<template>
  <li class="flex border-solid border-b-2 border-gray-600 display-inline py-2">
    <span class="fa-li">
      <fa :icon="icon" class="flex-initial" />
    </span>
    <component
      :is="link ? 'a' : 'span'"
      :href="link || ''"
      target="_blank"
      rel="noopener"
      class="no-underline"
    >
      {{ text }}
    </component>
  </li>
</template>
<script>
export default {
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    icon: {
      type: Object,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },
}
</script>
