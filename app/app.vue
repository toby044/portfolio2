<template>
    <div class="bg-[#D3D5DF]">
        <NuxtLayout>
            <NuxtPage :transition="transition" />
        </NuxtLayout>
    </div>
</template>
<script setup>
import Lenis from "@studio-freight/lenis";
const transition = useState("page-transition");

let lenis;

const onUpdate = (delta) => {
    window.requestAnimationFrame(onUpdate);
    lenis.raf(delta);
};

onMounted(() => {
    lenis = new Lenis({
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        duration: 1.25,
        autoResize: true,
        smooth: true,
        smoothTouch: false,
    });
    onUpdate();
});
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
