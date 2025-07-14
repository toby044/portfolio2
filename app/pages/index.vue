<template>
    <div>Index pages</div>
    <pre>{{ projects }}</pre>
    <pre>{{ articles }}</pre>
</template>
<script setup>
const { data: articles } = await useAsyncData("articles", () =>
    queryCollection("article").all()
);
const { data: projects } = await useAsyncData("projects", () =>
    queryCollection("project").all()
);
</script>
