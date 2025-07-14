<template>
    <div>
        <template
            v-for="item in crumbs"
            :key="item.title"
        >
            <NuxtLink
                v-if="item?.title && item?.url"
                :to="item.url"
                class="flex items-center gap-0.5 hover:underline"
            >
                <Icon name="material-symbols:arrow-left-alt-rounded" />
                <span>{{ item.title }}</span>
            </NuxtLink>
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
