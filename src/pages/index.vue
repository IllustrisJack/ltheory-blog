<template>
  <div class="flex flex-col h-screen w-screen justify-center text-center">
    <img
      src="../public/svg/LTR_TITLE.svg"
      class="mt-auto mr-auto mb-12 ml-auto px-12 w-auto drop-shadow-md noselect"
      draggable="false"
    />
    <p
      class="px-12 text-md lg:text-xl xl:text-2xl 2xl:text-4xl font-mono font-bold"
    >
      A blog dedicated to the <p class="text-md lg:text-xl xl:text-2xl 2xl:text-4xl font-mono font-bold drop-shadow-sm text-gradient-animated">Limit Theory Redux</p> open source project.
    </p>
    <NuxtLink
      to="/posts/"
      class="mt-12 mb-auto text-xl sm:text-2xl lg:text-4xl font-bold font-mono text-gray-300 hover:text-white hover:underline underline-offset-4"
    >
      Browse Posts
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
