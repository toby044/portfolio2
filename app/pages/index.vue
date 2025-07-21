<template>
    <div class="mt-16 color-[rgb(var(--color-theme))]">
        <HeadIcon class="lg:text-[25vw] !mb-0" />
        <span class="text-[8rem] leading-[80%] -tracking-[3.5px] font-bold">
            Passionate about building
            <BlocksIcon class="px-1.5 inline-block !text-[10vw]" />user-friendly
            frontends and solving
            <ProblemsIcon class="px-1.5 inline-block !text-[10vw]" />problems
            creatively
        </span>
        <SectionSpacer />
        <Testimonials />
        <SectionSpacer />
        <Skills />
    </div>
</template>
<script setup>
import HeadIcon from "~/assets/svgs/head.svg";
import BlocksIcon from "~/assets/svgs/blocks.svg";
import ProblemsIcon from "~/assets/svgs/problems.svg";
</script>
