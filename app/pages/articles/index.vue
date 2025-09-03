<template>
    <div>
        <NuxtLayout
            name="article-layout"
            :showLongRead="false"
        >
            <div class="grid md:grid-cols-2">
                <div
                    class="h-fit sticky top-[var(--dynamic-site-header-height,64px)] left-0"
                >
                    <h1
                        class="text-[3rem] sm:text-[5rem] md:text-[6.5rem] leading-[90%] lg:text-[8rem] lg:leading-[80%] lg:-tracking-[3.5px] font-bold block 2xl:w-[90%]"
                    >
                        Articles
                    </h1>
                    <p class="mb-8 text-sm max-w-[60ch] mt-[1.5lh]">
                        I keep coming back to the thought that I want to explore
                        things in depth while writing about them. This part of
                        my page will hopefully inspire me to write things down
                        as I grow or become interested in new topics.
                    </p>
                </div>
                <ul class="pr-10 top-16 left-0 block">
                    <li
                        v-for="item in articles"
                        :key="item.id"
                        class="flex gap-x-4 mb-20 group text-[2rem] sm:text-[5rem] md:text-[5.5rem] leading-[90%] lg:text-[7rem] lg:leading-[80%] lg:-tracking-[3.5px] font-bold"
                    >
                        <NuxtLink
                            :to="item.path"
                            class="block group-hover:underline"
                        >
                            {{ item.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { data: articles } = useAsyncData("article", () =>
    queryCollection("article").all()
);
</script>
