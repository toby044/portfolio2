<template>
    <div>
        <NuxtLayout name="article-layout">
            <div class="c-article-slug-container">
                <!-- <span class="text-xl font-semibold"></span>
                <h1
                    v-if="page?.title"
                    class="text-9xl -tracking-[3.5px] leading-[80%] font-semibold mb-10"
                >
                    {{ page.title }}
                </h1>
                <pre>{{ page }}</pre> -->
                <ContentRenderer
                    v-if="page && page.body"
                    :value="page"
                />
            </div>
        </NuxtLayout>
    </div>
</template>
<script setup>
const route = useRoute();

// definePageMeta({
//     pageTransition: { name: "article-page", mode: "out-in" },
// });

const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("article").path(route.path).first();
});
// if (!page.value) {
//     throw createError({
//         statusCode: 404,
//         statusMessage: `Page not found for path: ${route.path}`,
//     });
// }
</script>
