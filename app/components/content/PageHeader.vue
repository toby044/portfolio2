<template>
    <div class="page-header">
        <div class="flex justify-between">
            <h1 class="font-medium text-2xl">{{ title }}</h1>
            <time v-if="date">
                {{
                    new Date(date).toLocaleDateString("en", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })
                }}
            </time>
        </div>
        <p v-if="description" class="">{{ description }}</p>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    description: String,
    date: String,
});
</script>
<style lang="postcss"></style>
