<template>
    <div class="min-h-screen">
        <div
            class="p-6 pb-16 pt-[var(--dynamic-site-header-height)] min-h-screen ml-0 lg:p-16 lg:ml-[var(--dynamic-site-header-height,64px)] lg:mt-0"
        >
            <AsideMenu />
            <AppHeader class="hidden lg:flex mb-[25vh]" />
            <ThemeSelector />
            <slot />
            <!-- <AppFooter /> -->
        </div>
    </div>
</template>
