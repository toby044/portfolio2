<template>
    <div class="bg-[var(--theme-background)]">
        <NuxtLayout>
            <NuxtPage :transition="transition" />
        </NuxtLayout>
    </div>
</template>
<script setup>
const transition = useState("page-transition");
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s var(--easing-ease-slow);
}
.page-enter-from {
    transform: translateY(30dvh);
    opacity: 0;
}
.page-leave-to {
    transform: translateY(-30dvh);
    opacity: 0;
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
