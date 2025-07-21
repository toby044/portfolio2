<template>
    <div
        class="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between items-center bg-gray-300"
        ref="$el"
    >
        <a
            v-for="(item, idx) in menuItems"
            :href="item.url"
            :key="idx"
            class="flex-1 w-full flex items-center justify-center"
        >
            <span
                class="text-white transform -rotate-90 whitespace-nowrap select-none"
            >
                {{ item.title }}{{ headerHeight }}
            </span>
        </a>
    </div>
</template>
<script setup>
const route = useRoute();
watch(
    () => route.path,
    (newPath) => {
        console.log("Route changed to:", newPath);
        // if (newPath === "/projects") {
        //     document.documentElement.style.setProperty("--aside-menu-color", "green");
        // } else if (newPath === "/about") {
        //     document.documentElement.style.setProperty("--aside-menu-color", "blue");
        // } else {
        //     document.documentElement.style.removeProperty("--aside-menu-color");
        // }
    },
    { immediate: true }
);

const menuItems = [
    { title: "About", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "Articles", url: "/articles" },
];

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
