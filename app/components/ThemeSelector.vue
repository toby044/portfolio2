<template>
    <div
        class="fixed right-0 bottom-4"
        :class="{
            '': isOpen,
        }"
    >
        <button
            class="pl-2 pt-2 pb-2 pr-1 rounded-l-full flex cursor-pointer items-center justify-center bg-[var(--theme-main)] text-[var(--theme-background)] group"
        >
            <Icon
                name="mdi:arrow-left"
                class="size-5 lg:size-6 group-hover:-translate-x-1 transition-transform duration-300"
            />
        </button>
    </div>
</template>
<script setup>
const isOpen = ref(false);
const options = [
    { label: "Gray", value: "gray" },
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Brown", value: "brown" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
];
</script>
