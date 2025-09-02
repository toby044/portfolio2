<template>
  <div
    class="font-semibold grid grid-cols-1 gap-24 mt-[calc(var(--dynamic-site-header-height,64px)+64px)] lg:mt-0"
  >
    <div v-for="item in projects" class="grid grid-cols-2">
      <div
        class="h-fit sticky top-[var(--dynamic-site-header-height,64px)] pb-[var(--dynamic-site-header-height,64px)] left-0 pr-24"
      >
        <NuxtLink :to="item.url" class="flex items-center group w-fit">
          <h3 class="text-lg font-bold group-hover:underline">
            {{ item.title }}
          </h3>
          <Icon
            name="mdi:arrow-top-right"
            size="20px"
            class="inline-block ml-2 transition-transform duration-300 ease-[var(--easing-ease-slow)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </NuxtLink>
        <span
          class="text-sm max-w-3/4 s-rich-text"
          v-html="item.description"
        ></span>
      </div>
      <div v-if="item.images" class="min-h-screen">
        <NuxtImg
          v-for="image in item.images"
          :src="image.src"
          :alt="image.alt"
          loading="eager"
          class="c-project-image w-full block"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hovedstadens Beredskab",
    description:
      "<p>Frontend Developer, in charge of implementing the design system.</p> <p>I've acted as one of the key developers in this project, building the fundamentals for a bunch of the APIs, taking decisions on the structure etc.</p> <p>This is composed of a set of components, utilities, and guidelines to ensure consistency across the website.</p> <p>The website is built using Nuxt4, UnoCSS and a bunch of internal packages from Limbo.Works.</p>",
    url: "https://www.egetberedskab.dk/",
    year: "2025",
    employer: "Limbo.Works",
    images: [
      { src: "/media/img/hbr/hbr.png", alt: "Hovedstadens Beredskab" },
      // { src: "/media/img/hbr/hbr2.png", alt: "Hovedstadens Beredskab" },
      // { src: "/media/img/hbr/hbr3.png", alt: "Hovedstadens Beredskab" },
      { src: "/media/img/hbr/hbr4.png", alt: "Hovedstadens Beredskab" },
      { src: "/media/img/hbr/hbr5.png", alt: "Hovedstadens Beredskab" },
    ],
  },
  {
    title: "Limbo Citi",
    description:
      "<p>A modular frontend engine for Danish Municipalities.</p><p>I've acted as a frontend developer in this project, working on components, page types, ensuring the frontend is pixel-perfect to the design, user-friendly and accessible.</p><p>I have also implemented various subsites, which could be stuff like local school websites in the municipalities.</p><p>A challenge here was making sure everything was consistent and worked across ALL solutions, as a simple change could have an impact on everything.</p><p>I have worked on the websites for Randers, Svendborg, Vejle, Viborg, Nyborg, Roskilde, Odsherred and Aalborg municipalities, aswell as the subsites.</p>",
    url: "https://www.limbociti.dk/",
    year: "2024",
    employer: "Limbo.Works",
    images: [
      {
        src: "/media/img/citi/viborg.png",
        alt: "Viborg Kommune",
      },
      {
        src: "/media/img/citi/nyborg.png",
        alt: "Nyborg Kommune",
      },
      {
        src: "/media/img/citi/vejle.png",
        alt: "Vejle Kommune",
      },
      {
        src: "/media/img/citi/svendborg.png",
        alt: "Svendborg Kommune",
      },
      {
        src: "/media/img/citi/randers.png",
        alt: "Randers Kommune",
      },
      {
        src: "/media/img/citi/roskilde.png",
        alt: "Roskilde Kommune",
      },
    ],
  },
];

onMounted(() => {
  const animateImages = () => {
    const images = document.querySelectorAll(".c-project-image");
    images.forEach((img) => {
      gsap.from(img, {
        y: 40,
        opacity: 0.001,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
        },
      });
    });
  };

  animateImages();
});
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
