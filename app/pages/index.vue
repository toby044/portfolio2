<template>
    <div class="mt-16 color-[var(--theme-main)]">
        <HeadIcon class="text-[60vw] sm:text-[40vw] lg:text-[25vw] !mb-0" />
        <span
            class="text-[3rem] sm:text-[5rem] leading-[90%] lg:text-[8rem] lg:leading-[80%] lg:-tracking-[3.5px] font-bold block mb-12"
        >
            Passionate about building
            <BlocksIcon
                class="hidden lg:inline-block px-1.5 align-middle h-[1em] w-auto"
            />user-friendly frontends and solving
            <ProblemsIcon
                class="hidden lg:inline-block px-1.5 align-middle h-[1em] w-auto"
            />problems creatively
        </span>
        <AppHeader class="lg:hidden" />

        <SectionSpacer />
        <Skills />
        <SectionSpacer />
        <Testimonials />
    </div>
</template>
<script setup>
import HeadIcon from "~/assets/svgs/head.svg";
import BlocksIcon from "~/assets/svgs/blocks.svg";
import ProblemsIcon from "~/assets/svgs/problems.svg";
</script>
