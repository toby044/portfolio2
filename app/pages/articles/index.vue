<template>
    <div>
        <ul>
            <li
                v-for="post in articles"
                :key="post.id"
            >
                <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
const { data: articles } = await useAsyncData("blog", () =>
    queryCollection("article").all()
);
</script>
