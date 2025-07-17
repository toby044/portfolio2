<template>
    <div>
        <h2 class="mb-2">Skills</h2>
        <div class="flex flex-wrap gap-1">
            <span
                v-for="skill in skills"
                :key="skill"
                class="bg-gray-100 text-gray-800 px-2 py-1 rounded-lg text-xs"
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
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "MongoDB",
    "Node.js",
    "Git",
    "REST APIs",
    "Responsive Design",
    "Accessibility (a11y)",
];
</script>
