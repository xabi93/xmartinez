<template>
  <a href="/CV.pdf" target="_blank" rel="noopener" aria-label="download cv">
    <div
      class="
        font-bold
        inline-block
        rounded-full
        bg-link
        py-2
        px-4
        text-white
        transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1
        hover:scale-110
      "
    >
      <fa :icon="file" class="text-white" />
    </div>
  </a>
</template>

<script>
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'CV',
  computed: {
    file() {
      return faFileDownload
    },
  },
}
</script>
