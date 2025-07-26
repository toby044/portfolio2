<template>
    <div
        class="c-aside-menu fixed top-0 left-0 h-fit min-w-full lg:min-w-16 lg:min-h-0 lg:h-screen"
        ref="$el"
        style="width: max-content"
    >
        <DesktopAsideClip class="hidden lg:block" />
        <MobileAsideClip class="block lg:hidden" />

        <!-- Desktop -->
        <div
            class="relative h-full flex-col justify-between items-center hidden lg:flex"
        >
            <NuxtLink
                v-for="(item, idx) in computedMenuItems"
                :to="item.url"
                :key="idx"
                class="c-aside-menu-link c-aside-menu-link__desktop relative w-full h-1/3 transition-colors duration-200 font-medium flex grow items-center justify-center p-4"
                :class="{
                    'rounded-full ': idx !== 1,
                    '!text-[var(--theme-background)]': activeIdx === idx,
                }"
                @click="handleMove"
            >
                <span
                    class="relative z-20 pointer-events-none"
                    style="writing-mode: vertical-rl; transform: rotate(180deg)"
                >
                    {{ item.title }}
                </span>
            </NuxtLink>
        </div>

        <!-- Mobile -->
        <div
            class="relative h-full w-full flex justify-between items-center lg:hidden"
        >
            <NuxtLink
                v-for="(item, idx) in computedMenuItems"
                :to="item.url"
                :key="idx"
                class="c-aside-menu-link c-aside-menu-link__mobile relative w-1/3 h-full transition-colors duration-200 font-medium flex grow items-center justify-center p-4"
                :class="{
                    'rounded-full ': idx !== 1,
                    '!text-[var(--theme-background)]': activeIdx === idx,
                }"
                @click="handleMove"
            >
                <span class="relative z-20 pointer-events-none">
                    {{ item.title }}
                </span>
            </NuxtLink>
        </div>

        <div
            class="c-aside-menu__indicator c-aside-menu__indicator--square pointer-events-none"
            :style="{
                ...indicatorStyle,
            }"
        ></div>
    </div>
</template>
<script setup>
const { data: articles } = await useAsyncData("article", () =>
    queryCollection("article").all()
);

const menuItems = [
    { title: "About", url: "/" },
    { title: "Projects", url: "/projects" },
    { title: "Articles", url: "/article" },
];

const route = useRoute();

watch(
    () => route.path,
    async (newPath) => {
        if (import.meta.client) {
            await nextTick();
            if (newPath === "/projects") {
                useColorTheme("brown");
            } else if (newPath.startsWith("/article")) {
                useColorTheme("green");
            } else {
                useColorTheme("yellow");
            }
        }
    },
    { immediate: true }
);
const activeIdx = computed(() =>
    menuItems.findIndex((item) =>
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

const indicatorStyle = ref({ top: "0px" });
function handleMove(e) {
    const { srcElement } = e;
    if (window.innerWidth < 1024) {
        const { offsetLeft } = srcElement;
        indicatorStyle.value = {
            left: offsetLeft + "px",
            top: "0px",
        };
    } else {
        const { offsetTop } = srcElement;
        indicatorStyle.value = {
            top: offsetTop + "px",
            left: "0px",
        };
    }
}

function handleResize() {
    if ($el.value) {
        if (window.innerWidth < 1024) {
            headerHeight.value = $el.value.offsetHeight;
        } else {
            headerHeight.value = $el.value.offsetWidth;
        }
        document.documentElement.style.setProperty(
            "--dynamic-site-header-height",
            `${headerHeight.value}px`
        );
    } else {
        document.documentElement.style.removeProperty(
            "--dynamic-site-header-height"
        );
    }
    if (window.innerWidth < 1024) {
        const links =
            document.querySelectorAll(".c-aside-menu-link__mobile") || [];
        if (links.length > 0) {
            const activeLink = links[activeIdx.value];
            if (activeLink) {
                const { offsetLeft } = activeLink;
                indicatorStyle.value = {
                    left: offsetLeft + "px",
                    top: "0px",
                };
            }
        }
    } else {
        const links =
            document.querySelectorAll(".c-aside-menu-link__desktop") || [];
        if (links.length > 0) {
            const activeLink = links[activeIdx.value];
            if (activeLink) {
                const { offsetTop } = activeLink;
                indicatorStyle.value = {
                    top: offsetTop + "px",
                    left: "0px",
                };
            }
        }
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
    handleResize();
});
onUnmounted(() => {
    if (sizeObserver.value) {
        sizeObserver.value.disconnect();
    }
});
</script>
<style lang="postcss">
.c-aside-menu {
    clip-path: url(#desktopClip);
}

@media (max-width: 1024px) {
    .c-aside-menu {
        clip-path: url(#mobileClip);
    }
}
.c-aside-menu-link {
    overflow: hidden;
    background-color: var(--theme-background-opacity);
    color: var(--theme-main);
}

.c-aside-menu__indicator {
    background: var(--theme-main);
    height: 33.3333%;
    width: 100%;
    position: absolute;
    transition:
        top 1s var(--easing-ease-slow),
        border-radius 1.5s var(--easing-ease-slow),
        background-color 1s var(--easing-ease-slow);
}

@media (max-width: 1024px) {
    .c-aside-menu__indicator {
        background: var(--theme-main);
        width: 33.3333%;
        height: 100%;
        position: absolute;
        transition:
            left 1s var(--easing-ease-slow),
            border-radius 1.5s var(--easing-ease-slow),
            background-color 1s var(--easing-ease-slow);
    }
}
</style>
