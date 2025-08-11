<template>
    <div class="min-h-screen">
        <div class="lg:ml-[var(--dynamic-site-header-height)] p-6 pb-16 lg:p-16">
            <AsideMenu />
            <AppHeader class="hidden lg:flex mb-[25vh]" />
            <ThemeSelector />
            <slot />
            <!-- <AppFooter /> -->
        </div>
    </div>
</template>
