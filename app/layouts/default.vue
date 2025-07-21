<template>
    <div class="min-h-screen">
        <div class="ml-[var(--dynamic-site-header-height)] p-16">
            <AsideMenu />
            <AppHeader />
            <slot />
            <!-- <AppFooter /> -->
        </div>
    </div>
</template>
