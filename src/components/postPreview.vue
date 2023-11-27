<template>
  <div class="flex flex-row py-2 px-2 text-left">
    <div class="flex-col">
      <div class="text-lg font-semibold">{{ props.title }}</div>
      <div class="my-auto text-sm font-mono">{{ props.summary }}</div>
      <div class="text-xs font-semibold">by {{ props.author }}</div>
    </div>
    <div class="ml-auto mr-0 my-auto">
      # {{props.index}}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  author: String,
  title: String,
  summary: String,
  index: Number //replace with actual automatic indexes
});
</script>
