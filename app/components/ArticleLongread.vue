<template>
    <div class="c-article-long-read">
        <div class="h-16 lg:hidden">
            <button
                class="relative block ml-auto cursor-pointer"
                @click="isOpen = !isOpen"
            >
                <Icon
                    name="mdi:menu"
                    class="size-10"
                />
            </button>
        </div>
        <Teleport to="body">
            <Transition name="longread-scroll-in">
                <div
                    v-if="isOpen"
                    class="fixed top-0 h-screen left-0 z-[2] bg-[var(--theme-background)] px-6 pt-[calc(var(--dynamic-site-header-height)+4em)] pb-20 w-screen"
                >
                    <span class="block mb-2 mt-16">Articles</span>
                    <ul class="">
                        <li
                            v-for="(item, index) in articles"
                            :key="item.id"
                            class="c-article-long-read__link flex gap-x-4 mb-6 text-xl font-semibold transition-opacity duration-200"
                            :style="{
                                '--index': index,
                            }"
                        >
                            <span>{{ index + 1 }}</span>
                            <NuxtLink
                                :to="item.path"
                                class="block lg:no-underline hover:underline underline"
                                >{{ item.title }}</NuxtLink
                            >
                        </li>
                    </ul>
                    <button
                        class="absolute top-[calc(var(--dynamic-site-header-height)+4em)] right-6 cursor-pointer"
                        @click="isOpen = !isOpen"
                    >
                        <Icon
                            name="mdi:close"
                            class="size-10 block"
                        />
                    </button>
                </div>
            </Transition>
        </Teleport>
        <!-- desktop -->
        <ul class="pr-10 h-fit sticky top-16 left-0 hidden lg:block">
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
const { data: articles } = useAsyncData("article", () =>
    queryCollection("article").all()
);
// const router = useRouter();
// const route = useRoute();
// if (route.path === "/article" && articles.value?.length > 0) {
//     router.replace(articles.value[0].path);
// }
const isOpen = ref(false);

watch(isOpen, (val) => {
    if (import.meta.client) {
        document.body.style.overflow = val ? "hidden" : "";
    }
});
</script>
<style lang="postcss">
.c-article-long-read__link {
    opacity: 0.3;
}
.c-article-long-read__link:has(.router-link-exact-active) {
    opacity: 1;
}

.longread-scroll-in-enter-active,
.longread-scroll-in-leave-active {
    transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    & .c-article-long-read__link {
        transition: all 500ms calc(var(--index, 0) * 50ms)
            cubic-bezier(0.4, 0, 0.2, 1);
    }
}

.longread-scroll-in-enter-from {
    clip-path: inset(0 100% 0 0);
    & .c-article-long-read__link {
        transform: translateY(calc((var(--index, 0) + 5) * 10px));
        opacity: 0;
    }
}
.longread-scroll-in-enter-to {
    clip-path: inset(0 0 0 0);
}
.longread-scroll-in-leave-from {
    clip-path: inset(0 0 0 0);
}
.longread-scroll-in-leave-to {
    clip-path: inset(0 100% 0 0); /* instead of 0 0 0 100% */
    & .c-article-long-read__link {
        transform: translateY(calc((var(--index, 0) + 5) * 10px));
        opacity: 0;
    }
}
</style>
