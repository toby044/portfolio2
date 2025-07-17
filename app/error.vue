<template>
    <NuxtLayout>
        <div class="min-h-[80vh] flex flex-col items-center justify-center gap-4">
            <h1 class="text-7xl font-black text-pink-500">
                {{ error?.statusCode || 404 }}
            </h1>
            <p class="text-lg text-gray-800">
                {{ error?.statusMessage || "Page Not Found" }}
            </p>
            <NuxtLink
                to="/"
                class="items-center flex gap-0.5 group"
            >
                <Icon name="mdi-arrow-left" class="transition-transform group-hover:-translate-x-2" /> Go back home
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
    error: Object as () => NuxtError,
});
</script>

<style scoped>
.error-page {
    text-align: center;
    padding: 4rem 1rem;
}
.error-code {
    font-size: 6rem;
    font-weight: bold;
    color: #ff6f61;
    margin-bottom: 1rem;
}
.error-message {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
}
.home-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #ff6f61;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s;
}
.home-link:hover {
    background: #e55d50;
}
</style>
