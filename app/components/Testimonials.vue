<template>
    <div>
        <span class="font-semibold block mb-9 lg:mb-16">Testimonials</span>
        <div class="grid lg:grid-cols-4 gap-6 ">
            <div
                v-for="(item, index) in testimonials"
                class="font-semibold leading-[100%] -tracking-[0.2px]"
            >
                <span
                    class="s-rich-text block lg:max-h-[40vh] lg:overflow-auto border-b border-[var(--theme-main)] pb-6 "
                    v-html="item.what"
                ></span>
                <br />
                <span
                    v-if="item?.who"
                    class="block"
                    >- {{ item.who?.name }} <br />{{ item.who?.title }} at
                    {{ item.from }}</span
                >
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
    {
        who: { name: "Simon Milfred", title: "Head of Frontend" },
        what: `
            <p>I have had the pleasure of working closely with Tobias for almost two years at Limbo, where I am Head of Frontend. Tobias started as a trainee and has since developed into an incredibly strong and independent developer whom I have trusted greatly – both with complex and creative tasks.</p>
            <p>Tobias joined Limbo with a background in Vue, and quickly and competently embraced our stack, which is primarily based on Nuxt – including our own company-specific extensions. This is no small feat, and Tobias handled it all with ease and was quickly up to speed.</p>
            <p>At Limbo, we cover the entire process – from requirements clarification and design to frontend and backend development as well as subsequent support. This means that Tobias has worked closely with all parts of the process and has built a solid understanding of business needs, user experience, and technical implementation. He is good at collaborating, asks the right questions, and quickly understands what it takes to get a project safely across the finish line.</p>
            <p>He has worked on both classic website projects and more experimental solutions, but I especially want to highlight his efforts on our municipal engine, Limbo Citi. It is a large and flexible system that forms the basis for many different municipal solutions across the country. Working on Limbo Citi requires not only technical understanding but also overview, precision, and the ability to think in terms of configuration and scalability. Tobias has handled this task with great skill, and it has been a pleasure to follow his development and see him grow with the responsibility.</p>
            <p>Tobias leaves Limbo as an already highly competent developer – and I am personally sorry to have to say goodbye. He has my warmest recommendations, and I have no doubt that he will be a great asset wherever he chooses to continue his journey.</p>
        `,
        from: "Limbo Works",
    },
];
</script>
