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
      <NuxtLink
        to="/posts"
        class="text-2xl text-center font-bold font-mono text-gray-300 hover:text-white hover:underline underline-offset-4"
      >
        Back to Posts
      </NuxtLink>
    </div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <div
          class="w-5/6 md:w-1/2 mt-12 mb-12 mx-auto px-8 py-8 bg-gradient-to-b from-gray-500/10 to-transparent rounded-xl animate-slide-in-bottom"
        >
          <div
            class="flex flex-row mb-4 bg-gradient-to-r from-gray-500/20 to-transparent rounded-xl"
          >
            <a :href="getAuthor(doc.author)?.profile_url" target="_blank">
              <img
                class="w-12 rounded-full noselect"
                draggable="false"
                :src="getAuthor(doc.author)?.image_url"
              />
            </a>
            <div class="my-auto ml-4 font-mono font-semibold">
              {{ doc.author }}
            </div>
            <div class="flex flex-col ml-auto mr-0">
              <div class="mt-0 mb-auto text-right text-lg font-semibold">
              # {{ doc.post_number }}
              </div>
              <p v-if="doc.timestamp" class="mt-auto mb-0 text-xs font-semibold">
                {{ dateFromString(doc.timestamp) }}
              </p>
            </div>
          </div>
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

<script setup lang="ts">
import { dateFromString } from '@/composables/useDateFromString';

const { data } = await useAsyncData('authors', () => queryContent('/authors').findOne())

interface Author {
  name: string;
  profile_url: string;
  image_url: string;
}

let authors: Author[] = data.value?.authors;

function getAuthor(name: string): Author | undefined {
  for (const author of authors) {
    if (author.name === name) {
      return author;
    }
  }
}
</script>
