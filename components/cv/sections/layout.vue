<template>
  <section>
    <h3
      class="font-sans border-solid border-b-2 border-gray-600 font-black text-2xl capitalize"
    >
      {{ title }}
    </h3>
    <div class="pt-5">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>
