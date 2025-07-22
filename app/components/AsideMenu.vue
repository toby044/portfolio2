<template>
    <div
        class="fixed top-0 left-0 h-screen flex flex-col justify-between items-center"
        ref="$el"
        style="width: max-content"
    >
        <NuxtLink
            v-for="(item, idx) in computedMenuItems"
            :to="item.url"
            :key="idx"
            class="c-aside-menu-link tracking-[-0.2px] transition-colors duration-200 font-semibold flex grow items-center justify-center p-4"
            :class="{
                'rounded-full ': idx !== 1,
                'c-aside-menu-link--isactive': idx === activeIdx,
            }"
            @click="handleMove"
        >
            <span
                class="text-white"
                style="writing-mode: vertical-rl; transform: rotate(180deg)"
            >
                {{ item.title }}
            </span>
        </NuxtLink>
    </div>
</template>
<script setup>
// For testing color modes
// const route = useRoute();
// watch(
//     () => route.path,
//     async (newPath) => {
//         if (import.meta.client) {
//             await nextTick();
//             if (newPath === "/projects") {
//                 document.documentElement.style.setProperty(
//                     "--color-theme",
//                     "100, 111, 88"
//                 );
//             } else if (newPath === "/article") {
//                 document.documentElement.style.setProperty(
//                     "--color-theme",
//                     "0, 0, 255"
//                 );
//             } else {
//                 document.documentElement.style.setProperty(
//                     "--color-theme",
//                     "239, 70, 92"
//                 );
//             }
//         }
//     },
//     { immediate: true }
// );

const { data: articles } = await useAsyncData("article", () =>
    queryCollection("article").all()
);
const router = useRouter();
if (articles.value?.length > 0) {
    router.replace(articles.value[0].path);
}

const menuItems = [
    { title: "About", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "Articles", url: "/article" },
];

const route = useRoute();
const activeIdx = computed(() =>
    menuItems.findIndex(item =>
        item.url === "/" ? route.path === "/" : route.path.startsWith(item.url)
    )
);

const computedMenuItems = computed(() => {
    const tempmenuItems = [
        { title: "About", url: "/" },
        { title: "Projects", url: "/projects" },
    ];
    if (articles.value?.length > 0) {
        return [
            ...tempmenuItems,
            { title: "Articles", url: articles.value[0].path },
        ];
    } else {
        return [...tempmenuItems, { title: "Articles", url: "/article" }];
    }
});

function handleMove(e) {
    console.log("Handlemove:", e);
}

function handleResize() {
    if ($el.value) {
        headerHeight.value = $el.value.offsetWidth;
        document.documentElement.style.setProperty(
            "--dynamic-site-header-height",
            `${headerHeight.value}px`
        );
    } else {
        document.documentElement.style.removeProperty(
            "--dynamic-site-header-height"
        );
    }
}

const headerHeight = useState("headerHeight", () => 0);
const $el = ref(null);
const sizeObserver = ref(null);

onMounted(() => {
    sizeObserver.value = new ResizeObserver(handleResize);
    if ($el.value) {
        sizeObserver.value.observe($el.value);
    }
});
onUnmounted(() => {
    if (sizeObserver.value) {
        sizeObserver.value.disconnect();
    }
});
</script>
<style lang="postcss">
.c-aside-menu-link {
    background-color: var(--theme-bg);
}
.c-aside-menu-link.c-aside-menu-link--isactive {
    background-color: rgb(var(--color-theme));
}
</style>
