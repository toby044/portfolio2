<template>
  <div>
    <NuxtLayout name="article-layout">
      <div class="c-article-slug-container" v-if="page">
        <NuxtLink to="/articles" class="flex items-center group mb-8 hover:underline lg:hidden">
          <Icon
            name="mdi:arrow-left"
            class="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-200 mr-2"
          />
          Go back
        </NuxtLink>
        <span v-if="date" class="text-xl font-semibold">
          {{
            new Date(date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          }}
        </span>
        <h1
          v-if="title"
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:-tracking-[1px] lg:leading-[85%] font-semibold mb-10"
        >
          {{ title }}
        </h1>
        <ContentRenderer v-if="body" :value="page" class="s-rich-text" />
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

const { data: page } = await useAsyncData(`article-${slug}`, () =>
  queryCollection("article").path(`/articles/${slug}`).first()
);

const date = computed(() => page.value?.date);
const title = computed(() => page.value?.title);
const body = computed(() => page.value?.body);

// watch(page, (val) => {
//     console.log(val);
// });

// if (!page.value) {
//     throw createError({
//         statusCode: 404,
//         statusMessage: `Page not found for slug: ${slug}`,
//     });
// }
</script>
