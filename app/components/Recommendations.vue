<template>
    <div class="grid grid-cols-1 gap-2">
        <div
            class="flex justify-between items-end pb-2 border-b border-gray-300"
        >
            <h2>Recommendations</h2>
            <span class="text-xs">
                As seen on
                <a
                    href="https://www.linkedin.com/in/tobias-olesen-097b61167/"
                    target="_blank"
                    rel="noopener"
                    class="text-blue-500 group hover:underline"
                >
                    <span>LinkedIn</span>
                    <span>
                        <Icon
                            name="mdi:arrow-top-right"
                            class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span
                ></a>
            </span>
        </div>
        <div class="grid grid-cols-1 gap-2">
            <Transition
                name="fade-out-in"
                mode="out-in"
            >
                <RecommendationItem
                    :key="activeRecommendation"
                    :recommendation="recommendations[activeRecommendation]"
                    :lang="activeLang"
                />
            </Transition>
            <div class="grid grid-cols-3 gap-2">
                <button
                    v-for="item in recommendations"
                    @click="setRecommendation(item)"
                    class="flex flex-col text-left cursor-pointer transition-all duration-200 ring-2 ring-transparent p-2 rounded-lg hover:ring-pink-500"
                    :class="{
                        ' !ring-pink-500':
                            activeRecommendation ===
                            recommendations.indexOf(item),
                    }"
                    :aria-label="`Set active recommendation to ${item.who.name}`"
                >
                    <span class="text-sm">{{ item.who.name }}</span>
                    <span class="text-gray-400 italic text-xs"
                        >{{ item.who.title }} at {{ item.from }}</span
                    >
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const activeRecommendation = ref(0);
const activeLang = ref("en");

const setRecommendation = (item) => {
    activeRecommendation.value = recommendations.indexOf(item);
};

const recommendations = [
    {
        who: { name: "Thomas Fjordside", title: "Head of Frontend" },
        what: {
            original: "da",
            da: `
    <p>Jeg arbejdede sammen med Tobias hos Limbo fra han begyndte i Oktober 2023.</p>
    <p>Han har siden starten vist sig som en dygtig frontend udvikler, der er god til at overskue komplekse problemstillinger og finde kreative og holdbare løsninger.</p>
    <p>Tobias har en exceptionel arbejdsetik, tager ansvar og ejerskab over sine opgaver. Når man giver Tobias en opgave ved man at den bliver fulgt til dørs og løst med høj kvalitet.</p>
    <p>Han er en god kollega, der altid går til opgaverne med en positiv og løsningsorienteret indstilling.</p>
    <p>Tobias er god til at tilbyde hjælp og vil give værdi til ethvert team. Hans rolige og positive tilgang, gør ham til en fornøjelse at arbejde sammen med, også i pressede situationer.</p>
    <p>Tobias er god og hurtig til at tilegne sig ny viden og han besidder en meget bred erfaring med forskellige backend og frontend teknologier.</p>
    `,
            en: `
            <p>I worked with Tobias at Limbo from when he started in October 2023.</p>
            <p>Since the beginning, he has proven to be a skilled frontend developer who is good at grasping complex problems and finding creative and sustainable solutions.</p>
            <p>Tobias has an exceptional work ethic, takes responsibility, and shows ownership of his tasks. When you give Tobias an assignment, you know it will be seen through and delivered with high quality.</p>
            <p>He is a great colleague who always approaches tasks with a positive and solution-oriented attitude.</p>
            <p>Tobias is always ready to offer help and will bring value to any team. His calm and positive demeanor makes him a pleasure to work with, even in high-pressure situations.</p>
            <p>Tobias is quick to acquire new knowledge and has a broad experience with various backend and frontend technologies.</p>
        `,
        },
        from: "Limbo Works",
    },
    {
        who: { name: "Simon Milfred", title: "Head of Frontend" },
        what: { original: "da", da: "test da", en: "test en" },
        from: "Limbo Works",
    },
];
</script>
<style lang="postcss">
.fade-out-in-enter-active,
.fade-out-in-leave-active {
    transition: all 0.3s ease;
}
.fade-out-in-leave-to,.fade-out-in-enter-from  {
    opacity: 0;
    transform: translateY(2px);
}
</style>
