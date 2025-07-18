<template>
    <div class="mb-6">
        <template
            v-for="(item, index) in crumbs"
            :key="item.title"
        >
            <NuxtLink
                v-if="item?.title && item?.url"
                :to="item.url"
                class="inline-flex items-center text-xs gap-0.5  hover:underline"
            >
                <!-- <Icon v-if="index === 0" name="mdi-arrow-left" size="0.8em" /> -->
                <span>{{ item.title }}</span>
            </NuxtLink>
            <span
                v-if="index < crumbs.length - 1"
                class="mx-1 text-gray-400 text-sm"
                >/</span
            >
        </template>
    </div>
</template>
<script setup>
defineProps({
    crumbs: {
        type: Array,
        required: true,
    },
});
</script>
