<template>
  <div class="flex flex-col h-screen w-screen justify-center text-center">
    <p
      class="mt-auto px-12 text-4xl font-mono font-bold text-gradient-animated drop-shadow-sm"
    >
      Browse
    </p>
    <ContentNavigation v-slot="{ navigation }" :query="postQuery">
      <div
        v-for="link in navigation"
        :key="link._path"
        class="flex flex-col px-12 mt-4 mb-4 h-[24rem] md:h-[21rem] lg:h-[21rem]"
      >
        <!--TODO: Implement this searchbar, just hiding it for now-->
        <v-card-text
          class="flex-none w-[18rem] sm:w-[18rem] md:w-[24rem] lg:w-[32rem] mx-auto my-0 px-0 py-0"
          v-if="false"
        >
          <v-text-field
            v-model="input"
            density="compact"
            label="Search posts"
            variant="filled"
            append-inner-icon="i-mdi:magnify"
            single-line
            hide-details
            @update:model-value="searchPosts()"
          ></v-text-field>
        </v-card-text>
        <NuxtLink
          v-for="(child, index) in returnPage(link.children)"
          :key="child._path"
          :to="child._path"
          :class="[
            (index % 2 === 0) === startWithLeft
              ? 'animate-slide-in-left'
              : 'animate-slide-in-right',
            'w-[18rem] sm:w-[18rem] md:w-[24rem] lg:w-[32rem] my-2 mx-auto bg-gradient-to-r from-gray-500/10 to-gray-500/5 bg-opacity-30',
          ]"
        >
          <PostPreview
            :author="child.author"
            :title="child.title"
            :summary="child.description"
            :index="child.post_number"
          />
        </NuxtLink>
      </div>
      <v-pagination
        :length="pages.length"
        v-model="selectedPage"
        size="small"
        variant="text"
        prev-icon="i-mdi:menu-left"
        next-icon="i-mdi:menu-right"
        class="w-[14rem] sm:w-[18rem] md:w-[24rem] lg:w-[32rem] mx-auto"
        @update:modelValue="newRandomSlideInDirection()"
      />
      <NuxtLink
        to="/"
        class="mt-4 mb-auto text-2xl font-bold font-mono text-gray-300 hover:text-white hover:underline underline-offset-4"
      >
        Home
      </NuxtLink>
    </ContentNavigation>
  </div>
</template>

<script setup>
useHead({
  title: "Posts",
});

const posts = await queryContent("posts").where({ published: true }).find();
sortByIndex(posts);

const postsPerPage = 3;
const selectedPage = ref(1);
const pages = ref(paginateArray(posts));

// TODO: Search
const input = ref('')
const results = ref('')

const postQuery = {
  where: [{ _path: /^\/posts/ }],
};

const startWithLeft = ref(randomBoolean());

function randomBoolean() {
  return Math.random() < 0.5;
}

function newRandomSlideInDirection() {
  startWithLeft.value = randomBoolean();
}

function returnPage() {
  const page = pages.value[selectedPage.value - 1] || 0;
  return page;
}

function paginateArray(dataArray) {
  const pages = [];
  for (let i = 0; i < dataArray.length; i += postsPerPage) {
    pages.push(dataArray.slice(i, i + postsPerPage));
  }
  return pages;
}

function sortByIndex(posts) {
  if (!Array.isArray(posts) || posts.length === 0 || !posts[0].post_number) {
    console.error("Post array error");
    return;
  }

  posts.sort((a, b) => {
    return b.post_number - a.post_number;
  });
}
</script>

<style>
.v-card-text {
  flex: 0 !important;
}

.v-field {
  border-radius: 0 !important;
}
</style>
