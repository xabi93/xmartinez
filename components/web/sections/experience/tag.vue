<template>
  <span class="inline-block border px-3 py-1 text-sm font-medium mr-2 my-1">
    {{ name }}
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
