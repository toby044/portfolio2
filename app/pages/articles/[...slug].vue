<template>
    <div>
        <NuxtLayout name="article-layout">
            <div class="c-article-slug-container">
                <span
                    v-if="page?.date"
                    class="text-xl font-semibold"
                >
                    {{
                        new Date(page.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })
                    }}
                </span>
                <h1
                    v-if="page?.title"
                    class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:-tracking-[1px] lg:leading-[85%] font-semibold mb-10"
                >
                    {{ page.title }}
                </h1>
                <ContentRenderer
                    v-if="page && page.body"
                    :value="page"
                    class="s-rich-text"
                />
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

// if (!page.value) {
//     throw createError({
//         statusCode: 404,
//         statusMessage: `Page not found for slug: ${slug}`,
//     });
// }
</script>
