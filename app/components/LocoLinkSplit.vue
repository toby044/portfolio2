<template>
    <NuxtLink
        :to="link.href"
        class="c-link-split"
        :external="link?.type === 'external'"
        :target="link?.target"
    >
        <span v-if="link?.prefix">{{ link.prefix }}</span>
        <span v-for="item in transformedName">
            {{ item }}
        </span>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    link: {
        type: Object,
        required: true,
        validate: (val) => "href" in val && "name" in val,
    },
});

const transformedName = computed(() => {
    const arr = [];
    if (props.link?.name && typeof props.link.name === "string") {
        props.link.name.split(/(\.)/).forEach((part) => {
            if (part !== "") arr.push(part);
        });
        return arr;
    } else return null;
});
</script>
<style lang="postcss">
:where(.c-link-split) {
    width: fit-content;
    display: flex;
    font-size: 33.33px;
    span {
        transition: margin 0.5s var(--easing-ease-slow);
        border: 0.067em solid var(--theme-main);
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: lowercase;
        height: 1.8em;
        min-width: 1.8em;
        border-radius: 1.538em;
        padding: 0 0.5em;
        color: var(--theme-main);
        background: var(--theme-background);
    }
    span + span {
        margin-left: -0.35em;
    }
    &:hover {
        span + span {
            margin-left: -0.55em;
        }
    }
}
</style>
