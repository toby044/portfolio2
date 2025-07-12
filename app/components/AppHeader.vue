<template>
    <div class="w-full flex justify-between items-center gap-4">
        <NuxtLink to="/">{{ header.title }}</NuxtLink>
        <div>
            <span>{{ time }}</span>
        </div>
    </div>
</template>
<script setup>
const { header } = useAppConfig();

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
