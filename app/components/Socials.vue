<template>
    <div class="grid grid-cols-1">
        <h2 class="mb-2">Socials</h2>
        <ul class="flex gap-4">
            <li
                v-for="item in socials"
                class="text-sm"
            >
                <a
                    :href="item.url"
                    class="flex gap-0.5 items-center group relative"
                    target="_blank"
                >
                    <Icon
                        :name="item.icon"
                        size="1.25em"
                    />
                    <span class="group-hover:underline">{{ item.name }}</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span
                        class="absolute pointer-events-none transition-all bg-teal-200 rounded-lg opacity-0 top-0 whitespace-nowrap group-hover:opacity-100 group-hover:-top-[calc(100%+4px)] px-2 py-0.5"
                    >
                        {{ item.tooltip }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup>
const socials = [
    {
        name: "GitHub",
        url: "https://github.com/toby044",
        icon: "mdi:github",
        tooltip: "steal my code",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tobias-olesen-097b61167/",
        icon: "mdi:linkedin",
        tooltip: "connect with me",
    },
];
</script>
