<template>
    <div class="">
        <span
            class="h-[30dvh] overflow-scroll s-recommendation-rich-text text-sm block border-b border-gray-200 pt-4 pb-4 pr-2"
            v-html="recommendation.what[lang]"
        ></span>
        <button
            @click="switchLang"
            class="cursor-pointer text-blue-500 text-xs block ml-auto my-2.5"
            :aria-label="`Set language to ${lang === 'en' ? 'Danish' : 'English'}`"
        >
            {{ lang === "da" ? "en" : "da" }}
        </button>
    </div>
</template>
<script setup>
const props = defineProps({
    recommendation: {
        type: Object,
        required: true,
    },
    lang: String,
});

const lang = ref(props.lang || "en");

function switchLang() {
    if (lang.value === "en") {
        lang.value = "da";
    } else {
        lang.value = "en";
    }
}
</script>
<style lang="postcss">
.s-recommendation-rich-text {
    & p + p {
        margin-top: 1rem;
    }
}
</style>
