<template>
    <div class="bg-[var(--theme-background)]">
        <NuxtLayout>
            <NuxtPage :transition="transition" />
        </NuxtLayout>
    </div>
</template>
<script setup>
const transition = useState("page-transition");
const theme = useCookie("color-theme");
useColorTheme(theme.value || "brown");

useHead({
    htmlAttrs: {
        lang: "en",
    },
    meta: [
        { name: "designer", content: "Kristian Hansen" },
        { name: "credits", content: "Website design by Kristian Hansen, kristiansportfolio.com" },
    ],
});
useSeoMeta({
    title: "Tobias Olesen",
    ogTitle: "Tobias Olesen",
    description: "This is my portfolio, showcasing my work and projects.",
    ogDescription: "This is my portfolio, showcasing my work and projects.",
});
</script>
<style>
.transition-up-enter-active,
.transition-up-leave-active {
    transition: all 0.45s ease-out;
}
.transition-up-enter-from {
    transform: translateX(55dvw);
    opacity: 0;
}
.transition-up-leave-to {
    transform: translateX(-55dvw);
    opacity: 0;
}

.transition-down-enter-active,
.transition-down-leave-active {
    transition: all 0.45s ease-in;
}
.transition-down-enter-from {
    transform: translateX(-55dvw);
    opacity: 0;
}
.transition-down-leave-to {
    transform: translateX(55dvw);
    opacity: 0;
}

@media (min-width: 1024px) {
    .transition-up-enter-active,
    .transition-up-leave-active {
        transition: all 0.425s ease-out;
    }
    .transition-up-enter-from {
        transform: translateY(45dvh);
        opacity: 0;
    }
    .transition-up-leave-to {
        transform: translateY(-45dvh);
        opacity: 0;
    }

    .transition-down-enter-active,
    .transition-down-leave-active {
        transition: all 0.425s ease-in;
    }

    .transition-down-enter-from {
        transform: translateY(-45dvh);
        opacity: 0;
    }
    .transition-down-leave-to {
        transform: translateY(45dvh);
        opacity: 0;
    }
}

.article-page-enter-active,
.article-page-leave-active {
    transition: all 0.4s var(--easing-ease-slow);
    .c-article-slug-container {
        transition: all 0.4s var(--easing-ease-slow);
    }
}
.article-page-enter-from {
    .c-article-slug-container {
        transform: translateY(10dvh);
        opacity: 0;
    }
}
.article-page-leave-to {
    .c-article-slug-container {
        transform: translateY(-10dvh);
        opacity: 0;
    }
}
</style>
