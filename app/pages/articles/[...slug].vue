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
            v-if="page && page.body"
            :value="page"
        />
    </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("article").path(route.path).first();
});
</script>
