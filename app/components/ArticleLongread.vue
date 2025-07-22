<template>
    <div class="c-article-long-read">
        <ul class="pr-10 h-fit sticky top-16 left-">
            <li
                v-for="(item, index) in articles"
                :key="item.id"
                class="c-article-long-read__link flex gap-x-4 mb-6 text-xl font-semibold transition-opacity duration-200"
            >
                <span>{{ index + 1 }}</span>
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
const { data: articles } = await useAsyncData("article", () =>
    queryCollection("article").all()
);
const router = useRouter();
const route = useRoute();
if (route.path === '/article' && articles.value?.length > 0) {
    router.replace(articles.value[0].path);
}
</script>
<style lang="postcss">
.c-article-long-read__link {
    opacity: 0.3;
}
.c-article-long-read__link:has(.router-link-exact-active) {
    opacity: 1;
}
</style>
