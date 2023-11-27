<template>
  <main class="bg-black">
    <div
      class="relative bg-gradient-to-br from-orange-500/5 via-purple-800/20 to-blue-700/20"
    >
      <video
        v-show="dynamicBg"
        autoplay
        loop
        muted
        onloadstart="this.playbackRate=0.25"
        disable-picture-in-picture
        src="../public/mp4/LTR_BG_VID.mp4"
        type="video/mp4"
        class="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      <NuxtLink
        to="/legal/"
        class="absolute bottom-4 left-4 h-fit z-50 text-gray-500 hover:text-white text-sm font-mono"
        >Legal Notice</NuxtLink
      >
      <NuxtLink
        to="/privacy/"
        class="absolute bottom-8 left-4 h-fit z-50 text-gray-500 hover:text-white text-sm font-mono"
        >Privacy</NuxtLink
      >
      <div class="absolute bottom-6 right-6 h-fit z-50 scale-100 md:scale-[1.5] lg:scale-[2] text-gray-500 hover:text-white">
        <a href="https://github.com/Limit-Theory-Redux/ltheory" target="_blank">
          <v-icon class="i-mdi-github"/>
        </a>
      </div>
      <NuxtPage
        draggable="false"
        class="z-20 animate-fade-in backdrop-blur-[4px] backdrop-saturate-[75%] "
      />
    </div>
  </main>
</template>

<script setup>
let dynamicBg = ref(true);
</script>
