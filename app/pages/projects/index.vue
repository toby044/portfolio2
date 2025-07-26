<template>
    <div class="overflow-visible font-semibold">
        <div class="grid grid-cols-8 gap-4 mt-16">
            <p class="col-span-2">Project</p>
            <p>Date</p>
            <p>Employer</p>
            <p class="col-span-2 pl-12">Role</p>
        </div>
        <SectionSpacer />
        <ul
            class=""
            @mouseleave="activeIdx = null"
        >
            <li
                v-for="(item, idx) in projects"
                :key="idx"
                class="mb-8 grid grid-cols-8 gap-4 relative"
                @mouseenter="handleEnter(idx)"
            >
                <a
                    :href="item.url"
                    target="_blank"
                    class="col-span-2 h-fit flex items-center gap-1 underline group"
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
                <div class="col-span-6 grid grid-cols-6 gap-4 relative">
                    <Transition name="fade-out">
                        <NuxtImg
                            v-if="activeIdx === idx"
                            :key="activeIdx"
                            :src="item.img"
                            alt="Project Image"
                            loading="eager"
                            class="absolute z-[1] h-40 w-auto"
                            :style="{ ...activeStyle }"
                        />
                    </Transition>
                    <p class="">{{ item.year }}</p>
                    <p>{{ item.employer }}</p>
                    <p class="pl-12 col-span-4">{{ item.role }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const activeIdx = ref(null);
const activeStyle = ref({});

function handleEnter(idx) {
    activeStyle.value = {
        left: Math.floor(Math.random() * 46) - 15 + "%",
        top: Math.floor(Math.random() * 101) - 50 + "%",
    };
    activeIdx.value = idx;
}
const projects = [
    {
        title: "Viborg Kommune",
        url: "https://www.viborg.dk/",
        year: "2023",
        employer: "Limbo.Works",
        img: "/media/img/viborg.jpg",
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
