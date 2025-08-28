<template>
  <div>
    <NuxtLayout name="article-layout" :showLongRead="false">
      <h1 class="text-4xl font-bold mb-4">Articles</h1>
      <p class="mb-8 text-sm italic">
        I keep coming back to the thought that I want to explore things in depth
        while writing about them. This part of my page will hopefully inspire me
        to write things down as I grow or become interested in new topics.
      </p>
      <ul class="pr-10 h-fit sticky top-16 left-0 block">
        <li
          v-for="(item, index) in articles"
          :key="item.id"
          class="flex gap-x-4 mb-6 text-xl font-semibold transition-opacity duration-200 group"
        >
          <span>{{ index + 1 }}</span>
          <NuxtLink :to="item.path" class="block group-hover:underline">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { data: articles } = useAsyncData("article", () =>
  queryCollection("article").all()
);
</script>
