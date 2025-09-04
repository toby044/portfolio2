<template>
  <div class="mt-16 color-[var(--theme-main)]">
    <HeadIcon class="text-[60vw] sm:text-[40vw] lg:text-[25vw] !mb-0" />
    <h1
      id="hero-split"
      class="text-[3rem] sm:text-[5rem] md:text-[6.5rem] leading-[90%] lg:text-[8rem] lg:leading-[82%] lg:-tracking-[3.5px] font-bold block mb-16 lg:mb-28 2xl:w-[90%]"
    >
      Passionate about building
      <div class="hidden xl:inline-block relative w-[2ch] h-[1ch]">
        <BlocksIcon
          class="px-1.5 align-middle w-[2ch] h-[2ch] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      user-friendly frontends and solving
      <div class="relative w-[2ch] h-[1ch] hidden xl:inline-block">
        <ProblemsIcon
          class="px-1.5 align-middle w-[2ch] h-[2ch] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      problems creatively
    </h1>
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
