<template>
    <div class="flex justify-between sticky bottom-0 py-8 -mx-1 bg-white">
        <a
            href="mailto:tobiasnolesen@gmail.com"
            class="flex gap-1 items-center text-sm group"
        >
            <Icon
                name="streamline:mail-send-email-message"
                size="0.9em"
                class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-12"
            />
            <span> Email </span>
        </a>
        <a
            href="/resume.pdf"
            target="_blank"
            download="resume.pdf"
            class="flex gap-1 items-center text-sm group"
        >
            <Icon name="streamline:download-file" class="transition-transform group-hover:translate-y-0.5" />
            <span>Download resume</span>
        </a>
    </div>
</template>
