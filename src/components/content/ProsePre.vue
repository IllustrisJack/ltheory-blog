<template>
  <pre :class="$props.class" class="my-2 px-4 py-4 bg-indigo-900/25 rounded-lg text-gray-200"><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>
