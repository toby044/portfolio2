<template>
    <div class="grid grid-cols-1 gap-y-4">
        <LocoLinkSplit
            v-for="loco in locoLinks"
            :link="loco"
        />
        <EventCard
            v-for="card in eventCards"
            v-bind="{ ...card }"
        />
    </div>
</template>
<script setup>
definePageMeta({
    validate: async () => {
        return process.env.NODE_ENV === "development";
    },
});

const eventCards = [
    
];
const locoLinks = [
    {
        href: "https://store.locomotive.ca/products/summer-breeze-brass-t-shirt",
        prefix: "visit",
        name: "locomotive.ca",
        external: true,
        target: "_blank",
    },
    {
        href: "https://woelk.works",
        prefix: "see",
        name: "woelk.works",
        external: true,
        target: "_blank",
    },
    {
        href: "https://oxygen.dk",
        prefix: "join",
        name: "oxygen.as.frontend.developer",
        external: true,
        target: "_blank",
    },
    {
        href: "https://cernel.ai",
        prefix: "join",
        name: "cernel.as.frontend.developer",
        external: true,
        target: "_blank",
    },
];
</script>
