<template>
    <div class="font-semibold">
        <h2 class="block mb-9 lg:mb-16">Skills</h2>
        <div class="flex flex-wrap gap-1">
            <span
                v-for="skill in skills"
                :key="skill"
                class="p-2 lg:p-4 bg-[var(--theme-background-opacity)] rounded-xl"
            >
                {{ skill }}
            </span>
        </div>
    </div>
</template>
<script setup>
const skills = [
    "JavaScript",
    "Vue.js",
    "Nuxt.js",
    "TailwindCSS",
    "UnoCSS",
    "Laravel",
    "MongoDB",
    "Node.js",
    "Git",
    "REST APIs",
    "Responsive Design",
    "Accessibility (a11y)",
    "Conventional Commits",
    "B.E.M",
];
</script>
