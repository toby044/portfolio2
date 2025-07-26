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
                    class="fixed inset-0 top-0 left-0 z-[2] bg-[var(--theme-background)] px-6 py-20"
                >
                    <ul class="">
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
                    <button
                        class="absolute top-4 right-4 cursor-pointer"
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
const router = useRouter();
const route = useRoute();
if (route.path === "/article" && articles.value?.length > 0) {
    router.replace(articles.value[0].path);
}

const isOpen = ref(false);
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
    transition: all 0.3s ease-in-out;
}

.longread-scroll-in-enter-from,
.longread-scroll-in-leave-to {
    transform: translateX(-100%);
}
</style>
