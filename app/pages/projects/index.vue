<template>
    <div class="overflow-x-auto font-semibold">
        <table class="min-w-full">
            <thead>
                <tr class="text-left">
                    <th class="py-16 border-b">Project</th>
                    <th class="py-16 border-b">Date</th>
                    <th class="py-16 border-b">Employer</th>
                    <th class="py-16 border-b">Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="4" class="h-16"></td>
                </tr>
                <tr
                    v-for="(project, idx) in projects"
                    :key="idx"
                    class="pb-16"
                >
                    <td class="pb-16 align-top">
                        <a
                            href=""
                            class="group flex items-center gap-1 hover:underline"
                        >
                            <span> {{ project.title }} </span>
                            <Icon
                                name="mdi:arrow-top-right"
                                size="24px"
                                class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
                            />
                        </a>
                    </td>
                    <td class="pb-16 align-top">
                        <span>{{ project.date }}</span>
                    </td>
                    <td class="pb-16 align-top">
                        <span>{{ project.employer }}</span>
                    </td>
                    <td class="pb-16 w-2/4 align-top">
                        <span>{{ project.description }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const projects = [
    {
        title: "Personal Portfolio Website",
        date: "2023-08-15",
        employer: "Self",
        description:
            "A modern portfolio website built with Vue.js and Tailwind CSS to showcase my projects and skills. The site features a responsive design, interactive project galleries, and a blog section. It also integrates with GitHub and LinkedIn APIs to display real-time updates and includes a contact form with email notifications. The project emphasizes accessibility, performance optimization, and clean, maintainable code.",
    },
    {
        title: "E-commerce Dashboard",
        date: "2022-11-02",
        employer: "ShopEase Inc.",
        description:
            "Developed an admin dashboard for managing products, orders, and users using Vue 3 and Chart.js. The dashboard provides real-time analytics, customizable reports, and advanced filtering options. It supports role-based access control, bulk data import/export, and integrates with third-party payment and shipping APIs. The UI is designed for efficiency, with keyboard shortcuts and responsive layouts for mobile and desktop users.",
    },
    {
        title: "Task Management App",
        date: "2023-01-20",
        employer: "Freelance",
        description:
            "A Kanban-style task management application with drag-and-drop functionality and real-time updates. The app allows users to create, assign, and track tasks across multiple projects, with support for file attachments, comments, and notifications. It features user authentication, activity logs, and integration with popular calendar services. The backend is built with Node.js and WebSocket for instant collaboration between team members.",
    },
    {
        title: "Company Landing Page",
        date: "2022-06-10",
        employer: "BrightTech Solutions",
        description:
            "Designed and implemented a responsive landing page to improve company online presence and lead generation. The page includes interactive sections, customer testimonials, and a dynamic FAQ powered by Vue.js. SEO best practices were applied to maximize search engine visibility, and analytics tools were integrated to monitor visitor behavior. The project also involved A/B testing different layouts to optimize conversion rates.",
    },
];
</script>
