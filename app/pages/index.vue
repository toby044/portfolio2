<template>
    <div>
        <h1 class="font-bold text-3xl mb-4">Front page</h1>
        <NuxtLink
            v-if="articles?.length > 0"
            to="/articles"
            class="flex gap-1.5 items-center text-xl w-fit hover:underline"
        >
            <span>Articles</span>
            <Icon name="material-symbols:arrow-right-alt-rounded" />
        </NuxtLink>
        <NuxtLink
            v-if="projects?.length > 0"
            to="/projects"
            class="flex gap-1.5 items-center text-xl w-fit hover:underline"
        >
            <span>Projects</span>
            <Icon name="material-symbols:arrow-right-alt-rounded" />
        </NuxtLink>
    </div>
</template>
<script setup>
const { data: articles } = await useAsyncData("articles", () =>
    queryCollection("article").all()
);
const { data: projects } = await useAsyncData("projects", () =>
    queryCollection("project").all()
);
</script>
