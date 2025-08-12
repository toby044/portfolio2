<template>
    <div class="overflow-visible font-semibold">
        <div class="grid-cols-8 gap-4 mt-16 hidden lg:grid">
            <p class="col-span-2">Project</p>
            <p>Date</p>
            <p>Employer</p>
            <p class="col-span-2 pl-12">Role</p>
        </div>
        <SectionSpacer class="hidden lg:block" />
        <ul
            class="mt-[calc(var(--dynamic-site-header-height)+64px)] lg:mt-0"
            @mouseleave="activeIdx = null"
        >
            <li
                v-for="(item, idx) in projects"
                :key="idx"
                class="lg:mb-8 grid lg:grid-cols-8 lg:gap-4 relative"
                @mouseenter="handleEnter(idx)"
            >
                <a
                    :href="item.url"
                    target="_blank"
                    class="col-span-2 h-fit w-fit flex items-center gap-1 underline group mb-4 lg:mb-0"
                >
                    <span class="">
                        {{ item.title }}
                    </span>
                    <Icon
                        name="mdi:arrow-top-right"
                        size="24px"
                        class="inline-block ml-2 transition-transform duration-300 ease-[var(--easing-ease-slow)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </a>
                <div class="grid relative lg:col-span-6 lg:grid-cols-6 gap-4">
                    <Transition name="fade-out">
                        <NuxtImg
                            v-if="activeIdx === idx"
                            :key="activeIdx"
                            :src="item.img.src"
                            :alt="item.img.alt"
                            loading="eager"
                            class="absolute z-[1] h-40 w-auto rounded-md shadow-md pointer-events-none hidden lg:block"
                            :style="{ ...activeStyle }"
                        />
                    </Transition>
                    <NuxtImg
                        :src="item.img.src"
                        :alt="item.img.alt"
                        loading="eager"
                        class="w-full block lg:hidden"
                        :style="{ ...activeStyle }"
                    />
                    <p> {{ item.year }}</p>
                    <p>{{ item.employer }}</p>
                    <p class="lg:pl-12 lg:col-span-4">{{ item.role }}</p>
                    <SectionSpacer
                        class="lg:hidden"
                        :class="{ hidden: idx === projects.length - 1 }"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const activeIdx = ref(null);
const activeStyle = ref({});

function handleEnter(idx) {
    if (window.innerWidth > 1024) {
        activeStyle.value = {
            left: Math.floor(Math.random() * 66) - 15 + "%",
            top: Math.floor(Math.random() * 101) - 50 + "%",
        };
        activeIdx.value = idx;
    }
}
const projects = [
    {
        title: "Hovedstadens Beredskab",
        url: "https://www.hbr.dk/",
        year: "2025",
        employer: "Limbo.Works",
        img: { src: "/media/img/hbr.png", alt: "Hovedstadens Beredskab" },
        role: "Frontend Developer, in charge of implementing the design system. I've acted as one of the key developers in this project, building the fundamentals for a bunch of the APIs, taken decisions on the structure etc. This is composed of a set of components, utilities, and guidelines to ensure consistency across the website. The website is built using Nuxt3, UnoCSS and a bunch of custom packages from Limbo.Works.",
    },
    {
        title: "Viborg Kommune",
        url: "https://www.viborg.dk/",
        year: "2024",
        employer: "Limbo.Works",
        img: { src: "/media/img/viborg.png", alt: "Viborg Kommune" },
        role: "Frontend Developer, in charge of implementing the design system. This is composed of a set of components, utilities, and guidelines to ensure consistency across the website. The website is built using Nuxt3, UnoCSS and a bunch of custom packages from Limbo.Works.",
    },
    {
        title: "Nyborg Kommune",
        url: "https://www.nyborg.dk/",
        year: "2024",
        employer: "Limbo.Works",
        img: { src: "/media/img/nyborg.png", alt: "Nyborg Kommune" },
        role: "Frontend Developer, in charge of implementing the design system. This is composed of a set of components, utilities, and guidelines to ensure consistency across the website. The website is built using Nuxt3, UnoCSS and a bunch of custom packages from Limbo.Works.",
    },
];
</script>
<style>
.fade-out-enter-active,
.fade-out-leave-active {
    transition: opacity 1s var(--easing-ease-slow);
}
.fade-out-enter-from,
.fade-out-leave-to {
    opacity: 0;
}
</style>
