<template>
  <div class="flex flex-row py-2 px-2 text-left">
    <div class="flex-col">
      <div class="text-lg font-semibold">{{ props.title }}</div>
      <div class="my-auto text-sm font-mono">{{ props.summary }}</div>
      <div class="text-xs font-semibold">by {{ props.author }}</div>
    </div>
    <div class="flex flex-col ml-auto mr-0">
      <div class="mt-0 mb-auto mr-0 text-right text-lg font-semibold">
        # {{ props.index }}
      </div>
      <p v-if="props.timestamp" class="mt-auto mb-0 text-xs font-semibold">
        {{ dateFromString(props.timestamp) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dateFromString } from '@/composables/useDateFromString';

const props = defineProps({
  author: String,
  title: String,
  summary: String,
  index: Number, //replace with actual automatic indexes
  timestamp: String,
});
</script>
