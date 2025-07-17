<template>
    <div>
        <PageHeader
            v-if="page?.title"
            :title="page?.title"
            :description="page?.description"
            :crumbs="[
                {
                    title: 'Articles',
                    url: '/articles',
                },
            ]"
        />
        <ContentRenderer
            v-if="page"
            :value="page"
        />
    </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("project").path(route.path).first();
});
if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Page not found",
    });
}
</script>
