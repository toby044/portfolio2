<template>
    <div>
        <BreadCrumb :crumbs="[{ title: 'Home', url: '/' }]" />

        <ul>
            <li
                v-for="item in projects"
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
const { data: projects } = await useAsyncData("projects", () =>
    queryCollection("project").all()
);
</script>
