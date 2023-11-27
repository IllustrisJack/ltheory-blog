<template>
  <main
    class="flex flex-col h-screen w-screen overflow-scroll scrollbar-hide"
  >
    <div class="flex flex-row mx-auto mt-12">
      <NuxtLink
        to="/"
        class="mr-16 text-2xl text-center font-bold font-mono text-gray-300 hover:text-white hover:underline underline-offset-4"
      >
        Home
      </NuxtLink>
    </div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <div
          class="w-5/6 md:w-1/2 mt-12 mb-12 mx-auto px-8 py-8 bg-gray-500/5 rounded-md"
        >
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <template #not-found>
        <div
          class="flex flex-col h-screen w-screen justify-center text-center backdrop-blur-lg"
        >
          <p
            class="mt-auto px-12 text-4xl font-mono font-bold text-gradient-animated drop-shadow-sm"
          >
            Document not found
          </p>
          <NuxtLink to="/" class="mt-12 mb-auto text-2xl font-bold font-mono">
            Back to home
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts"></script>
