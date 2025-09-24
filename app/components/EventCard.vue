<template>
    <NuxtLink
        :to="link?.href"
        class="c-event-card"
        :target="link?.target"
        :external="link?.type === 'external'"
    >
        <NuxtImage :src="image" />
    </NuxtLink>
</template>
<script setup>
defineProps({
    link: Object,
    image: Object,
    title: String,
    description: String,
    date: {
        type: Object,
        default: () => ({}),
        validate: (val) => "time" in val && "name" in val,
    },
});
</script>
<style lang="postcss">
:where(.c-event-card) {
}
</style>
