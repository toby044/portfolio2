<template>
    <div
        class="fixed top-0 left-0 h-screen flex flex-col justify-between items-center"
        ref="$el"
        style="width: max-content"
    >
        <NuxtLink
            v-for="(item, idx) in menuItems"
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
//             } else if (newPath === "/articles") {
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

const route = useRoute();
const activeIdx = computed(() => {
    return menuItems.findIndex(item => route.path === item.url || (item.url !== '/' && route.path.startsWith(item.url)));
});


const menuItems = [
    { title: "About", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "Articles", url: "/articles" },
];

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
