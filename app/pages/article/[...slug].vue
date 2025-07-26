<template>
    <div>
        <NuxtLayout name="article-layout">
            <div class="c-article-slug-container mt-16">
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
                    class="text-9xl -tracking-[3.5px] font-semibold mb-10"
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
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("article").path(route.path).first();
});

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: `Page not found for path: ${route.path}`,
    });
}
</script>
