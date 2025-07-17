<template>
    <div
        class="w-full flex justify-between items-center gap-4 max-w-[65ch] mx-auto pt-4 pb-8"
    >
        <NuxtLink
            to="/"
            class="py-4 text-sm relative group"
        >
            <span>{{ header.title }}</span>
            <span
                v-if="route.path !== '/'"
                class="absolute transition-all opacity-0 -left-3.5 duration-200 group-hover:opacity-100 group-hover:-left-4"
            >
                <Icon name="mdi:arrow-left" />
            </span>
        </NuxtLink>

        <ul>
            <li>
                <NuxtLink
                    v-for="link in headerLinks"
                    :key="link.title"
                    :to="link.url"
                    class="mr-2 last:mr-0 p-1 text-sm transition-colors duration-100 hover:text-pink-500"
                    exact-active-class="text-pink-500"
                >
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
const { header } = useAppConfig();
const route = useRoute();

const headerLinks = [
    { title: "Articles", url: "/articles" },
    { title: "Projects", url: "/projects" },
    { title: "About", url: "/about" },
];
const time = ref("");
let intervalId;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    time.value = `${hours}:${minutes}:${seconds}`;
}

onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>
