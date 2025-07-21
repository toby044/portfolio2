<template>
    <div class="h-[25dvh] flex justify-between">
        <span>Tobias Olesen</span>
        <ul class="flex gap-1">
            <li><a href=""></a></li>
            <li>
                <a
                    href="mailto:tobiasnolesen@gmail.com"
                    class="p-4 flex items-center gap-1 bg-[var(--theme-bg)] rounded-xl"
                >
                    <span> Email </span>
                    <Icon
                        name="material-symbols:send-outline"
                        size="24px"
                    />
                </a>
            </li>
            <li>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    class="p-4 flex items-center gap-1 bg-[var(--theme-bg)] rounded-xl"
                >
                    <span>Download resume</span>
                    <Icon
                        name="mdi:arrow-down"
                        size="24px"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/toby044"
                    target="_blank"
                    class="p-4 flex items-center gap-1 bg-[var(--theme-bg)] rounded-xl"
                >
                    <span>Github</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        size="24px"
                    />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/tobias-olesen-097b61167/"
                    target="_blank"
                    class="p-4 flex items-center gap-1 bg-[var(--theme-bg)] rounded-xl"
                >
                    <span>LinkedIn</span>
                    <Icon
                        name="mdi:arrow-top-right"
                        size="24px"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup></script>

const socials = [ { name: "GitHub", url: "https://github.com/toby044", icon:
"mdi:github", tooltip: "steal my code", }, { name: "LinkedIn", url:
"https://www.linkedin.com/in/tobias-olesen-097b61167/", icon: "mdi:linkedin",
tooltip: "connect with me", }, ];
