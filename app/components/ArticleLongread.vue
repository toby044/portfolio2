<template>
  <div class="c-article-long-read">
    <ul class="pr-10 h-fit sticky top-16 left-0 hidden lg:block">
      <li
        v-for="(item, index) in articles"
        :key="item.id"
        class="c-article-long-read__link flex gap-x-4 mb-6 text-xl font-semibold transition-opacity duration-200"
      >
        <span>{{ index + 1 }}</span>
        <NuxtLink :to="item.path" class="block hover:underline">{{
          item.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
const { data: articles } = useAsyncData("article", () =>
  queryCollection("article").all()
);
</script>
<style>
.c-article-long-read__link {
  opacity: 0.3;
}
.c-article-long-read__link:has(.router-link-exact-active) {
  opacity: 1;
}

.longread-scroll-in-enter-active,
.longread-scroll-in-leave-active {
  transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  & .c-article-long-read__link {
    transition: all 500ms calc(var(--index, 0) * 50ms)
      cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.longread-scroll-in-enter-from {
  clip-path: inset(0 100% 0 0);
  & .c-article-long-read__link {
    transform: translateY(calc((var(--index, 0) + 5) * 10px));
    opacity: 0;
  }
}
.longread-scroll-in-enter-to {
  clip-path: inset(0 0 0 0);
}
.longread-scroll-in-leave-from {
  clip-path: inset(0 0 0 0);
}
.longread-scroll-in-leave-to {
  clip-path: inset(0 100% 0 0); /* instead of 0 0 0 100% */
  & .c-article-long-read__link {
    transform: translateY(calc((var(--index, 0) + 5) * 10px));
    opacity: 0;
  }
}
</style>
