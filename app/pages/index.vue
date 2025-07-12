<template>
    <div>Index pages</div>
</template>
<script setup>
const { data: articles } = await useAsyncData("blog", () =>
    queryCollection("article").all()
);
const { data: projects } = await useAsyncData("blog", () =>
    queryCollection("project").all()
);
</script>
