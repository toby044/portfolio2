<template>
    <div class="h-[25dvh] flex justify-between">
        <span class="font-semibold">Tobias Olesen</span>
        <ul class="flex gap-1 transition-colors duration-200">
            <li>
                <a
                    href="mailto:tobiasnolesen@gmail.com"
                    class="p-4 flex group items-center gap-1 bg-[var(--theme-bg)] rounded-xl font-semibold"
                >
                    <span> Email </span>
                    <Icon
                        name="material-symbols:send-outline"
                        size="24px"
                        class="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                </a>
            </li>
            <li>
                <a
                    href="/resume.pdf"
                    class="p-4 flex group items-center gap-1 bg-[var(--theme-bg)] rounded-xl font-semibold"
                    download
                >
                    <span>Download resume</span>
                    <Icon
                        name="mdi:arrow-down"
                        size="24px"
                        class="group-hover:translate-y-0.5 transition-transform duration-300"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/toby044"
                    target="_blank"
                    class="p-4 flex group items-center gap-1 bg-[var(--theme-bg)] rounded-xl font-semibold"
                >
                    <span>Github</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        size="24px"
                        class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/tobias-olesen-097b61167/"
                    target="_blank"
                    class="p-4 flex group items-center gap-1 bg-[var(--theme-bg)] rounded-xl"
                >
                    <span>LinkedIn</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        size="24px"
                        class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup>
</script>
