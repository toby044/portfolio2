<template>
    <div class="flex justify-between relative z-[2]">
        <span class="hidden lg:inline-block font-semibold">Tobias Olesen</span>
        <ul class="flex flex-wrap gap-1 transition-colors duration-200">
            <li>
                <a
                    href="mailto:tobiasnolesen@gmail.com"
                    class="py-2 pl-[11px] pr-[5px] lg:p-4 flex group items-center gap-1 bg-[var(--theme-background-opacity)] rounded-md lg:rounded-xl font-semibold"
                >
                    <span> Email </span>
                    <Icon
                        name="material-symbols:send-outline"
                        class="size-5 lg:size-6 transition-transform duration-300 ease-[var(--easing-ease-slow)] group-hover:translate-x-0.5"
                    />
                </a>
            </li>
            <li>
                <a
                    href="/resume.pdf"
                    class="py-2 pl-[11px] pr-[5px] lg:p-4 flex group items-center gap-1 bg-[var(--theme-background-opacity)] rounded-md lg:rounded-xl font-semibold"
                    download
                >
                    <span>Download resume</span>
                    <Icon
                        name="mdi:arrow-down"
                        class="size-5 lg:size-6 group-hover:translate-y-0.5 transition-transform duration-300 ease-[var(--easing-ease-slow)]"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/toby044"
                    target="_blank"
                    class="py-2 pl-[11px] pr-[5px] lg:p-4 flex group items-center gap-1 bg-[var(--theme-background-opacity)] rounded-md lg:rounded-xl font-semibold"
                >
                    <span>Github</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        class="size-5 lg:size-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 ease-[var(--easing-ease-slow)]"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/tobias-olesen-097b61167/"
                    target="_blank"
                    class="py-2 pl-[11px] pr-[5px] lg:p-4 flex group items-center gap-1 bg-[var(--theme-background-opacity)] rounded-md lg:rounded-xl font-semibold"
                >
                    <span>LinkedIn</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        class="size-5 lg:size-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 ease-[var(--easing-ease-slow)]"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup></script>
