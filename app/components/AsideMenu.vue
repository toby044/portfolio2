<template>
    <div
        class="fixed top-0 left-0 h-screen"
        ref="$el"
        style="width: max-content"
    >
        <div
            class="relative h-full bg-[#D3D5DF] flex flex-col justify-between items-center"
        >
            <NuxtLink
                v-for="(item, idx) in computedMenuItems"
                :to="item.url"
                :key="idx"
                class="c-aside-menu-link relative h-1/3 transition-colors duration-200 font-medium flex grow items-center justify-center p-4"
                :class="{
                    'rounded-full ': idx !== 1,
                    'c-aside-menu-link--isactive': idx === activeIdx,
                    'c-aside-menu-link--beforeActive': idx < activeIdx,
                    'c-aside-menu-link--afterActive': idx > activeIdx,
                }"
                @click="handleMove"
            >
                <span
                    class="relative z-10 pointer-events-none"
                    style="writing-mode: vertical-rl; transform: rotate(180deg)"
                >
                    {{ item.title }}
                </span>
            </NuxtLink>
        </div>
        <!-- <div
            class="c-aside-menu__indicator"
            :class="{
                'c-aside-menu__indicator--square': activeIdx === 1,
            }"
            :style="{
                ...indicatorStyle,
            }"
        ></div> -->
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
        console.log(newPath);
        if (import.meta.client) {
            await nextTick();
            if (newPath === "/projects") {
                document.documentElement.style.setProperty(
                    "--color-theme",
                    "100, 111, 88"
                );
                document.documentElement.style.getPropertyPriority(
                    "--color-theme"
                );
            } else if (newPath.startsWith("/article")) {
                document.documentElement.style.setProperty(
                    "--color-theme",
                    "0, 0, 255"
                );
            } else {
                document.documentElement.style.setProperty(
                    "--color-theme",
                    "239, 70, 92"
                );
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
function updateIndicator(y) {
    indicatorStyle.value = {
        top: y + "px",
    };
}

function handleMove(e) {
    const { srcElement } = e;
    const { offsetTop } = srcElement;

    updateIndicator(offsetTop);
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
    const links = document.querySelectorAll(".c-aside-menu-link") || [];
    if (links.length > 0) {
        const activeLink = links[activeIdx.value];
        if (activeLink) {
            const { offsetTop } = activeLink;
            updateIndicator(offsetTop);
        }
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
    overflow: hidden;
    background-color: var(--theme-bg);
    color: rgb(var(--color-theme));
}

.c-aside-menu__indicator {
    background: rgb(var(--color-theme));
    height: 33.3333%;
    width: 100%;
    position: absolute;
    border-radius: 9999px;
    transition:
        top 1s var(--easing-ease-slow),
        border-radius 1.5s var(--easing-ease-slow);
}

.c-aside-menu__indicator--square {
    border-radius: 0px;
}

.c-aside-menu-link {
    &::before {
        opacity: 0;
        content: "";
        transition:
            transform 1s var(--easing-ease-slow),
            opacity 0s var(--easing-ease-slow);
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(0%);
        width: 100%;
        height: 100%;
        background-color: rgb(var(--color-theme));
    }
}

.c-aside-menu-link.c-aside-menu-link--isactive {
    color: white;
    &::before {
        opacity: 1;
        transform: translateY(0%);
    }
}

.c-aside-menu-link.c-aside-menu-link--beforeActive {
    &::before {
        transform: translateY(100%);
        transition:
            opacity 0s 1s var(--easing-ease-slow),
            transform 1s var(--easing-ease-slow);
    }
}
.c-aside-menu-link.c-aside-menu-link--afterActive {
    &::before {
        transform: translateY(-100%);
        transition:
            opacity 0s 1s var(--easing-ease-slow),
            transform 1s var(--easing-ease-slow);
    }
}
</style>
