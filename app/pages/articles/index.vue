<template>
    <NuxtLayout name="article-layout">
        <div>stuff in the layout</div>
    </NuxtLayout>
</template>
<script setup>
const { data: articles } = await useAsyncData("articles", () =>
    queryCollection("article").all()
);
</script>
