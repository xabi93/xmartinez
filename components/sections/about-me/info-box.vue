<template>
  <div class="shadow mb-2 px-6 py-2">
    <span class="text-xl" v-text="text" />
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
