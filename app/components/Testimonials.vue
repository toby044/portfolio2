<template>
    <div>
        <span class="font-semibold block mb-16">Testimonials</span>
        <div class="grid grid-cols-4 gap-6">
            <div
                v-for="(item, index) in testimonials"
                class="font-semibold leading-[100%] -tracking-[0.2px]"
            >
                <span
                    class="s-recommendation-rich-text"
                    v-html="item.what"
                ></span>
                <br />
                <span class="block">- {{ item.who.name }} <br/>{{ item.who.title }} at {{ item.from }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const testimonials = [
    {
        who: { name: "Thomas Fjordside", title: "Head of Frontend" },
        what: `
            <p>Tobias has an exceptional work ethic, takes responsibility, and shows ownership of his tasks. When you give Tobias an assignment, you know it will be seen through and delivered with high quality.</p>
            <p>He is a great colleague who always approaches tasks with a positive and solution-oriented attitude.</p>
            <p>Tobias is always ready to offer help and will bring value to any team. His calm and positive demeanor makes him a pleasure to work with, even in high-pressure situations.</p>
            <p>Tobias is quick to acquire new knowledge and has a broad experience with various backend and frontend technologies.</p>
        `,
        from: "Limbo Works",
    },
];
</script>
<style lang="postcss">
.s-recommendation-rich-text {
    & p + p {
        margin-top: 1rem;
    }
}
</style>
