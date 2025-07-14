<template>
    <div>
        <BreadCrumb :crumbs="[{ title: 'Forside', url: '/' }]" />
        <ul>
            <li
                v-for="item in articles"
                :key="item.id"
                class="py-2 border-b border-indigo-500 last:border-b-0"
            >
                <NuxtLink
                    :to="item.path"
                    class="block hover:underline"
                    >{{ item.title }}</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>
<script setup>
const { data: articles } = await useAsyncData("articles", () =>
    queryCollection("article").all()
);
</script>
