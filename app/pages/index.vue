<template>
    <div class="mt-16 color-[var(--theme-main)]">
        <HeadIcon class="text-[60vw] sm:text-[40vw] lg:text-[25vw] !mb-0" />
        <h1
            id="hero-split"
            class="text-[3rem] sm:text-[5rem] md:text-[6.5rem] leading-[90%] lg:text-[8rem] lg:leading-[80%] lg:-tracking-[3.5px] font-bold block mb-16 lg:mb-28"
        >
            Passionate about building
            <BlocksIcon
                class="hidden xl:inline-block px-1.5 align-middle h-[1em] w-auto"
            />user-friendly frontends and solving
            <ProblemsIcon
                class="hidden xl:inline-block px-1.5 align-middle h-[1em] w-auto"
            />problems creatively
        </h1>
        <AppHeader />
        <SectionSpacer />
        <Skills />
        <SectionSpacer />
        <Testimonials />
    </div>
</template>
<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

import HeadIcon from "~/assets/svgs/head.svg";
import BlocksIcon from "~/assets/svgs/blocks.svg";
import ProblemsIcon from "~/assets/svgs/problems.svg";

onMounted(() => {
    const heroSplit = document.getElementById("hero-split");
    if (heroSplit) {
        // const split = new SplitText(heroSplit, { type: "words,chars" });

        // gsap.from(split.chars, {
        //     duration: 2,
        //     yPercent: "random([-125, 125])",
        //     xPercent: "random([-125, 125])",
        //     stagger: {
        //         from: "random",
        //         amount: 0.6,
        //     },
        //     ease: "elastic.inOut(1,0.3)",
        //     scrollTrigger: {
        //         trigger: heroSplit,
        //         start: "top 80%",
        //         // scrub: 1.3,
        //     },
        // });
        // Split by lines

        const split = new SplitText(heroSplit, { type: "lines" });
        split.lines.forEach((line, i) => {
            gsap.from(line, {
                opacity: 0.2,
                y: 35,
                duration: 1,
                delay: i * 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: line,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    // scrub: true,
                },
            });
        });
    }
});
</script>
